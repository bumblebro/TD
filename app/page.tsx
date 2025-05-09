"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import useSWR from "swr";
import VideoPlayer, { VideoPlayerRef } from "@/components/VideoPlayer";
import { useRouter } from "next/navigation";

interface ResponseData {
  file_name: string;
  link: string;
  direct_link: string;
  thumb: string;
  size: string;
  sizebytes: number;
}

const fetchWithToken = async (url: URL | RequestInfo) => {
  const res = await fetch(url);
  if (!res.ok) {
    const errorRes = await res.json();
    const error = new Error();
    error.message = errorRes?.error;
    throw error;
  }

  return await res.json();
};

function isValidUrl(url: string | URL) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function checkUrlPatterns(url: string) {
  const patterns = [
    /ww\.mirrobox\.com/,
    /www\.nephobox\.com/,
    /freeterabox\.com/,
    /www\.freeterabox\.com/,
    /1024tera\.com/,
    /4funbox\.co/,
    /www\.4funbox\.com/,
    /mirrobox\.com/,
    /nephobox\.com/,
    /terabox\.app/,
    /terabox\.com/,
    /www\.terabox\.ap/,
    /terabox\.fun/,
    /www\.terabox\.com/,
    /www\.1024tera\.co/,
    /www\.momerybox\.com/,
    /teraboxapp\.com/,
    /terafileshare\.com/,
    /momerybox\.com/,
    /tibibox\.com/,
    /www\.tibibox\.com/,
    /www\.teraboxapp\.com/,
    /www\.terafileshare\.com/,
  ];

  if (!isValidUrl(url)) {
    return false;
  }

  for (const pattern of patterns) {
    if (pattern.test(url)) {
      return true;
    }
  }

  return false;
}

function isVideoFile(fileName: string) {
  const videoExtensions = [
    ".mp4",
    ".webm",
    ".mov",
    ".avi",
    ".mkv",
    ".flv",
    ".wmv",
  ];
  return videoExtensions.some((ext) => fileName.toLowerCase().endsWith(ext));
}

export default function Home() {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState(
    "Processing your request..."
  );
  const router = useRouter();
  const videoPlayerRef = useRef<VideoPlayerRef>(null);

  const {
    data,
    error: fetchError,
    isLoading,
    mutate,
  } = useSWR<ResponseData>(
    token ? [`/api?data=${encodeURIComponent(token)}`] : null,
    ([url]: [string]) => fetchWithToken(url),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  useEffect(() => {
    if (data) document.title = data.file_name;
    if (data || fetchError) {
      setLoading(false);
      setUrl("");
    }
    if (error || fetchError) {
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  }, [error, fetchError, data]);

  // Reset function to clear all state
  const resetState = () => {
    setUrl("");
    setError("");
    setToken("");
    setLoading(false);
    setLoadingMessage("Processing your request...");
    mutate(undefined, { revalidate: false });
    document.title = "Download Terabox Files. @RoldexVerse";
    // Stop video playback if it's playing
    videoPlayerRef.current?.stop();
  };

  // Listen for route changes to reset state
  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.pathname === "/") {
        resetState();
      }
    };

    const handleReset = () => {
      resetState();
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("resetPage", handleReset);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("resetPage", handleReset);
    };
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setLoadingMessage("Processing your request...");

    if (!url) {
      setError("Please enter a Terabox URL");
      setLoading(false);
      return;
    }
    if (!checkUrlPatterns(url)) {
      setError("Invalid Terabox URL");
      setLoading(false);
      return;
    }

    setToken(url);
  }

  return (
    <div className="flex flex-col min-h-screen bg-white my-28">
      <main className="flex-grow">
        <div className="max-w-4xl px-4 py-4 mx-auto sm:py-8">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-4xl sm:mb-4">
              Download Terabox Files
            </h1>
            <p className="max-w-2xl px-2 mx-auto text-base text-gray-600 sm:text-xl">
              Download files from Terabox without login. Works with 1024terabox,
              freeterabox, nephobox, and other Terabox domains.
            </p>
          </div>

          <div className="p-4 bg-gray-50 rounded-xl sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label
                  htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Enter Terabox URL
                </label>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://1024terabox.com/s/..."
                    required
                    className="flex-1 px-3 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border border-gray-200 rounded-lg sm:px-4 sm:py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-base"
                    disabled={loading}
                  />
                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        const text = await navigator.clipboard.readText();
                        setUrl(text);
                      } catch (err) {
                        setError("Failed to paste from clipboard");
                      }
                    }}
                    className="flex items-center justify-center gap-2 px-3 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border border-gray-200 rounded-lg sm:px-4 sm:py-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base"
                    disabled={loading}
                  >
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                      />
                    </svg>
                    Paste
                  </button>
                </div>
              </div>
              {error && (
                <div className="p-3 text-sm text-red-500 border border-red-100 rounded-lg bg-red-50">
                  {error}
                </div>
              )}
              {loading && (
                <div className="p-3 text-sm text-blue-600 border border-blue-100 rounded-lg bg-blue-50">
                  {loadingMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:py-3 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed sm:text-base"
              >
                {loading ? "Processing..." : "Watch Terabox Video"}
              </button>
            </form>
          </div>

          {data && (
            <div className="p-4 mt-6 sm:mt-8 bg-gray-50 rounded-xl sm:p-8">
              <div className="flex flex-col items-center">
                {isVideoFile(data.file_name) ? (
                  <div className="w-full mb-4 sm:mb-6">
                    <VideoPlayer
                      ref={videoPlayerRef}
                      src={data.direct_link}
                      title={data.file_name}
                      thumbnail={data.thumb}
                    />
                  </div>
                ) : (
                  <div className="mb-4 sm:mb-6">
                    <Image
                      className="transition duration-300 ease-in-out transform rounded-lg hover:scale-105"
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                      src={data.thumb}
                      height={200}
                      width={200}
                      alt={data.file_name}
                    />
                  </div>
                )}
                <div className="mb-4 text-center sm:mb-6">
                  <h2 className="mb-2 text-sm font-bold text-gray-800 lg:text-xl sm:text-2xl">
                    {data.file_name}
                  </h2>
                  <p className="text-sm text-gray-600 sm:text-base">
                    Size: {data.size}
                  </p>
                </div>
                <Link
                  href={data.direct_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-500 rounded-lg sm:py-3 sm:px-6 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:text-base">
                    Download Now
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 gap-4 mt-6 sm:mt-8 sm:grid-cols-3 sm:gap-6">
            <div className="p-4 bg-gray-50 sm:p-6 rounded-xl">
              <h3 className="mb-2 text-base font-semibold text-gray-800 sm:text-lg">
                Fast Downloads
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Get your files quickly with our optimized download system
              </p>
            </div>
            <div className="p-4 bg-gray-50 sm:p-6 rounded-xl">
              <h3 className="mb-2 text-base font-semibold text-gray-800 sm:text-lg">
                No Login Required
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Skip the Terabox login process and download directly
              </p>
            </div>
            <div className="p-4 bg-gray-50 sm:p-6 rounded-xl">
              <h3 className="mb-2 text-base font-semibold text-gray-800 sm:text-lg">
                Privacy Focused
              </h3>
              <p className="text-sm text-gray-600 sm:text-base">
                Your data is never stored on our servers
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";
import VideoPlayer from "@/components/VideoPlayer";

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

  const {
    data,
    error: fetchError,
    isLoading,
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
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Download Terabox Files
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Download files from Terabox without login. Works with 1024terabox,
              freeterabox, nephobox, and other Terabox domains.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="url"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Enter Terabox URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://1024terabox.com/s/..."
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white text-gray-700"
                  disabled={loading}
                />
              </div>
              {error && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg border border-red-100">
                  {error}
                </div>
              )}
              {loading && (
                <div className="text-blue-600 text-sm bg-blue-50 p-3 rounded-lg border border-blue-100">
                  {loadingMessage}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 font-medium"
              >
                {loading ? "Processing..." : "Watch Terabox Video"}
              </button>
            </form>
          </div>

          {data && (
            <div className="mt-8 bg-gray-50 rounded-xl p-8">
              <div className="flex flex-col items-center">
                {isVideoFile(data.file_name) ? (
                  <div className="w-full mb-6">
                    <VideoPlayer
                      src={data.direct_link}
                      title={data.file_name}
                    />
                  </div>
                ) : (
                  <div className="mb-6">
                    <Image
                      className="rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                      src={data.thumb}
                      height={200}
                      width={200}
                      alt={data.file_name}
                    />
                  </div>
                )}
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {data.file_name}
                  </h2>
                  <p className="text-gray-600">Size: {data.size}</p>
                </div>
                <Link
                  href={data.direct_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 font-medium">
                    Download Now
                  </button>
                </Link>
              </div>
            </div>
          )}

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Fast Downloads
              </h3>
              <p className="text-gray-600">
                Get your files quickly with our optimized download system
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                No Login Required
              </h3>
              <p className="text-gray-600">
                Skip the Terabox login process and download directly
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Privacy Focused
              </h3>
              <p className="text-gray-600">
                Your data is never stored on our servers
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

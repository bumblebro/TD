"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
import useSWR from "swr";
import VideoPlayer, { VideoPlayerRef } from "@/components/VideoPlayer";
import { useRouter } from "next/navigation";
import Head from "next/head";

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
  const resetState = useCallback(() => {
    setUrl("");
    setError("");
    setToken("");
    setLoading(false);
    setLoadingMessage("Processing your request...");
    mutate(undefined, { revalidate: false });
    document.title = "TeraBox Stream - Watch & Download TeraBox Videos Online";
    // Stop video playback if it's playing
    videoPlayerRef.current?.stop();
  }, [mutate]);

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
  }, [resetState]);

  const handlePaste = async () => {
    try {
      // Try using the modern Clipboard API first
      if (navigator.clipboard && navigator.clipboard.readText) {
        const text = await navigator.clipboard.readText();
        if (text) {
          setUrl(text);
          return;
        }
      }

      // Fallback for older browsers and mobile devices
      const textarea = document.createElement("textarea");
      textarea.style.position = "fixed";
      textarea.style.left = "-9999px";
      textarea.style.top = "0";
      document.body.appendChild(textarea);

      // Focus and paste
      textarea.focus();
      const success = document.execCommand("paste");

      if (success && textarea.value) {
        setUrl(textarea.value);
      } else {
        // If both methods fail, show a message to copy manually
        setError("Please paste the URL manually (Ctrl+V or Cmd+V)");
      }

      document.body.removeChild(textarea);
    } catch (err) {
      // If all methods fail, show a message to copy manually
      setError("Please paste the URL manually (Ctrl+V or Cmd+V)");
    }
  };

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
    <>
      <Head>
        <title>TeraBox Stream - Watch & Download TeraBox Videos Online</title>
        <meta
          name="description"
          content="Stream and download videos from TeraBox without any software. Watch TeraBox videos online in HD quality. Fast, free, and secure TeraBox video streaming."
        />
        <meta
          name="keywords"
          content="terabox stream, terabox video, terabox download, watch terabox online, terabox streaming, terabox video player, terabox video downloader, terabox stream online, terabox video stream, terabox stream app"
        />
        <meta
          property="og:title"
          content="TeraBox Stream - Watch & Download TeraBox Videos Online"
        />
        <meta
          property="og:description"
          content="Stream and download videos from TeraBox without any software. Watch TeraBox videos online in HD quality. Fast, free, and secure TeraBox video streaming."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="TeraBox Stream - Watch & Download TeraBox Videos Online"
        />
        <meta
          name="twitter:description"
          content="Stream and download videos from TeraBox without any software. Watch TeraBox videos online in HD quality. Fast, free, and secure TeraBox video streaming."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "Terabox Downloader",
            description:
              "Download files from Terabox without login. Fast, free, and secure Terabox downloader.",
            applicationCategory: "UtilityApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
            },
          })}
        </script>
      </Head>

      <div className="flex flex-col min-h-screen bg-white my-28">
        <main className="flex-grow">
          <div className="max-w-4xl px-4 py-4 mx-auto sm:py-8">
            <div className="mb-6 text-center sm:mb-8">
              <h1 className="mb-2 text-2xl font-bold text-gray-800 sm:text-4xl sm:mb-4">
                Download Terabox Files
              </h1>
              <p className="max-w-2xl px-2 mx-auto text-base text-gray-600 sm:text-xl">
                Download files from Terabox without login. Works with
                1024terabox, freeterabox, nephobox, and other Terabox domains.
              </p>
            </div>

            {/* Link Input Section */}
            <section id="link-input-section" className="py-12 bg-gray-50">
              <div className="max-w-3xl mx-auto ">
                <div className="p-4 bg-gray-50 rounded-xl sm:p-8">
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6"
                  >
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
                          onClick={handlePaste}
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
              </div>
            </section>

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

            {/* How to Use Section */}
            <div className="mt-12">
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">
                How to Download Terabox Files
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                <div className="relative p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
                  <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-blue-500 rounded-full shadow-lg">
                      1
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Copy Terabox Link
                    </h3>
                    <p className="text-gray-600">
                      Find and copy the Terabox file or video link you want to
                      download from your Terabox share
                    </p>
                  </div>
                </div>

                <div className="relative p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
                  <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-blue-500 rounded-full shadow-lg">
                      2
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Paste URL
                    </h3>
                    <p className="text-gray-600">
                      Paste the copied Terabox URL into our downloader&apos;s
                      input field above
                    </p>
                  </div>
                </div>

                <div className="relative p-6 transition-shadow duration-300 bg-white border border-gray-100 shadow-sm rounded-xl hover:shadow-md">
                  <div className="absolute transform -translate-x-1/2 -top-4 left-1/2">
                    <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-blue-500 rounded-full shadow-lg">
                      3
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="mb-3 text-lg font-semibold text-gray-800">
                      Download
                    </h3>
                    <p className="text-gray-600">
                      Click the download button and save your file directly to
                      your device
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-500">
                  No registration required. Start downloading your Terabox files
                  instantly!
                </p>
              </div>
            </div>

            {/* Features Section */}
            <div className="mt-12">
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">
                Key Features
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Secure Downloads
                  </h3>
                  <p className="text-gray-600">
                    Direct downloads from Terabox servers with no data storage
                    on our end
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Fast Processing
                  </h3>
                  <p className="text-gray-600">
                    Quick file processing and instant download links
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-center w-12 h-12 mb-4 text-white bg-blue-500 rounded-full">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    No Waiting Time
                  </h3>
                  <p className="text-gray-600">
                    Skip countdown timers and download immediately
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div className="mt-12">
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">
                Why Choose Our Downloader
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    User-Friendly Interface
                  </h3>
                  <p className="text-gray-600">
                    Simple and intuitive design that makes downloading files
                    from Terabox effortless. No technical knowledge required.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    No Registration Required
                  </h3>
                  <p className="text-gray-600">
                    Start downloading immediately without creating an account or
                    providing personal information.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Multiple Device Support
                  </h3>
                  <p className="text-gray-600">
                    Works seamlessly on all devices - desktop computers,
                    laptops, tablets, and mobile phones.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-3 text-lg font-semibold">
                    Regular Updates
                  </h3>
                  <p className="text-gray-600">
                    Our service is constantly updated to ensure compatibility
                    with the latest Terabox changes.
                  </p>
                </div>
              </div>
            </div>

            {/* Usage Statistics */}
            <div className="mt-12">
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">
                Our Service in Numbers
              </h2>
              <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-blue-500">
                    1TB+
                  </div>
                  <p className="text-gray-600">Files Downloaded</p>
                </div>
                <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-blue-500">
                    100%
                  </div>
                  <p className="text-gray-600">Success Rate</p>
                </div>
                <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-blue-500">
                    24/7
                  </div>
                  <p className="text-gray-600">Service Available</p>
                </div>
                <div className="p-6 text-center bg-white rounded-lg shadow-sm">
                  <div className="mb-2 text-3xl font-bold text-blue-500">0</div>
                  <p className="text-gray-600">Data Storage</p>
                </div>
              </div>
            </div>

            {/* About Terabox Section */}
            <div className="mt-12">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  What is Terabox?
                </h3>
                <p className="mb-4 text-gray-600">
                  Terabox (formerly known as Baidu Pan) is a powerful cloud
                  storage platform that provides users with 1TB of free storage
                  space. It&apos;s designed for storing and sharing various
                  types of content, from documents and photos to videos and
                  large files. The service offers seamless file management
                  across multiple devices through its web interface, desktop
                  application, and mobile apps.
                </p>
                <p className="mb-4 text-gray-600">
                  With features like automatic backups, file versioning, and
                  secure sharing options, Terabox ensures your data remains safe
                  and accessible. The platform makes it easy to organize files
                  into folders, share content with others, and access your data
                  from anywhere with an internet connection.
                </p>
                <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800">
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 1TB Free Storage Space</li>
                      <li>• Cross-platform Support</li>
                      <li>• File Versioning</li>
                      <li>• Secure File Sharing</li>
                      <li>• Automatic Backups</li>
                      <li>• Mobile App Access</li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-gray-50">
                    <h4 className="mb-2 text-lg font-semibold text-gray-800">
                      Supported File Types
                    </h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Documents (PDF, DOC, XLS)</li>
                      <li>• Images (JPG, PNG, GIF)</li>
                      <li>• Videos (MP4, AVI, MKV)</li>
                      <li>• Audio Files (MP3, WAV)</li>
                      <li>• Archives (ZIP, RAR)</li>
                      <li>• And many more...</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* About TeraDownloader Section */}
            <div className="mt-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  What is TeraBox Stream?
                </h3>
                <p className="mb-4 text-gray-600">
                  TeraBox Stream is a specialized streaming platform that allows
                  you to watch and download videos from TeraBox directly in your
                  browser. Unlike traditional methods that require downloading
                  software or logging in, our service provides instant access to
                  TeraBox videos through a simple, user-friendly interface.
                </p>
                <p className="text-gray-600">
                  Our platform operates with complete transparency and security.
                  We don&apos;t store any videos or user data on our servers.
                  Instead, we act as a bridge between you and TeraBox, enabling
                  seamless video streaming and downloading. Whether you&apos;re
                  watching movies, TV shows, or any other video content, TeraBox
                  Stream ensures a smooth and high-quality viewing experience
                  with support for HD video playback.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-12">
              <h2 className="mb-8 text-2xl font-bold text-center text-gray-800">
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    What is Terabox?
                  </h3>
                  <p className="text-gray-600">
                    Terabox is a cloud storage service that allows users to
                    store and share files. It offers 1TB of free storage space
                    and is popular for sharing large files. The service is
                    available across multiple platforms including web, desktop,
                    and mobile applications.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is it safe to use this downloader?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our downloader is completely safe. We don&apos;t store
                    any of your files or data on our servers. All downloads are
                    processed directly from Terabox servers, and we use secure
                    HTTPS connections for all transfers.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Do I need to create an account?
                  </h3>
                  <p className="text-gray-600">
                    No, you don&apos;t need to create an account or log in to
                    use our downloader. Simply paste the Terabox link and
                    download your files. This makes the process much faster and
                    more convenient.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    What file types are supported?
                  </h3>
                  <p className="text-gray-600">
                    Our downloader supports all file types available on Terabox,
                    including videos, documents, images, audio files, and
                    archives. There are no restrictions on file types or
                    formats.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is there a file size limit?
                  </h3>
                  <p className="text-gray-600">
                    There is no file size limit for downloading. You can
                    download files of any size from Terabox. However, very large
                    files might take longer to process depending on your
                    internet connection.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    How fast are the downloads?
                  </h3>
                  <p className="text-gray-600">
                    Download speeds depend on your internet connection and the
                    file size. Our servers are optimized for maximum download
                    speeds, and we use direct links to ensure the fastest
                    possible transfer rates.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Can I download multiple files?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can download multiple files by processing them one
                    at a time. Each file is handled independently, ensuring
                    reliable downloads for all your files.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is this service free?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our Terabox downloader is completely free to use. There
                    are no hidden charges, premium features, or subscription
                    requirements. We believe in providing a free and accessible
                    service to all users.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    What if the download fails?
                  </h3>
                  <p className="text-gray-600">
                    If a download fails, you can simply try again. Our system
                    will generate a fresh download link. Make sure you have a
                    stable internet connection and sufficient storage space on
                    your device.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Do you support all Terabox domains?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our downloader supports all Terabox domains including
                    1024terabox.com, freeterabox.com, nephobox.com, and other
                    variations. The service works consistently across all
                    official Terabox domains.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is my data private?
                  </h3>
                  <p className="text-gray-600">
                    Yes, we take privacy seriously. We don&apos;t store any of
                    your files or personal information. All downloads are
                    processed directly from Terabox to your device, ensuring
                    complete privacy.
                  </p>
                </div>

                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Can I use this on mobile devices?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our downloader is fully compatible with mobile devices.
                    You can use it on smartphones and tablets through any modern
                    web browser, making it convenient to download files on the
                    go.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Supported Terabox Domains
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {[
                  "ww.mirrobox.com",
                  "www.nephobox.com",
                  "freeterabox.com",
                  "www.freeterabox.com",
                  "1024tera.com",
                  "4funbox.co",
                  "www.4funbox.com",
                  "mirrobox.com",
                  "nephobox.com",
                  "terabox.app",
                  "terabox.com",
                  "www.terabox.ap",
                  "terabox.fun",
                  "www.terabox.com",
                  "www.1024tera.co",
                  "www.momerybox.com",
                  "teraboxapp.com",
                  "momerybox.com",
                  "tibibox.com",
                  "www.tibibox.com",
                  "www.teraboxapp.com",
                ].map((domain) => (
                  <div
                    key={domain}
                    className="p-3 text-center transition-shadow duration-200 bg-white rounded-lg shadow-sm hover:shadow-md"
                  >
                    <p className="text-sm text-gray-600 break-all">{domain}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-center text-gray-500">
                Our downloader supports all official Terabox domains and their
                variations
              </p>
            </div>

            <div className="mt-12 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-800">
                Ready to Download Your Files?
              </h2>
              <p className="mb-6 text-gray-600">
                Start downloading your Terabox files now - it&apos;s free, fast,
                and secure!
              </p>
              <a
                href="#top"
                className="inline-block px-6 py-3 text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
              >
                Start Downloading
              </a>

              {/* Share Website Buttons */}
              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  Share This Tool
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() =>
                      window.open(
                        `https://twitter.com/intent/tweet?text=Download files from Terabox without login - Fast, free, and secure Terabox downloader&url=${encodeURIComponent(
                          window.location.origin
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-[#1DA1F2] rounded-lg hover:bg-[#1a8cd8] focus:outline-none focus:ring-2 focus:ring-[#1DA1F2] focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    Share on Twitter
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                          window.location.origin
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-[#4267B2] rounded-lg hover:bg-[#365899] focus:outline-none focus:ring-2 focus:ring-[#4267B2] focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Share on Facebook
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.origin
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-[#0077B5] rounded-lg hover:bg-[#006399] focus:outline-none focus:ring-2 focus:ring-[#0077B5] focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    Share on LinkedIn
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/?text=${encodeURIComponent(
                          "Download files from Terabox without login - Fast, free, and secure Terabox downloader: " +
                            window.location.origin
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-[#25D366] rounded-lg hover:bg-[#22c35e] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Share on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
      </div>
    </>
  );
}

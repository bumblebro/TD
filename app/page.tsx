"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
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
        <title>Download Terabox Files - Free Terabox Downloader</title>
        <meta
          name="description"
          content="Download files from Terabox without login. Fast, free, and secure Terabox downloader supporting 1024terabox, freeterabox, nephobox, and other Terabox domains."
        />
        <meta
          name="keywords"
          content="terabox downloader, terabox files, download terabox, terabox video downloader, free terabox downloader, terabox download without login, terabox direct download"
        />
        <meta
          property="og:title"
          content="Download Terabox Files - Free Terabox Downloader"
        />
        <meta
          property="og:description"
          content="Download files from Terabox without login. Fast, free, and secure Terabox downloader."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Download Terabox Files - Free Terabox Downloader"
        />
        <meta
          name="twitter:description"
          content="Download files from Terabox without login. Fast, free, and secure Terabox downloader."
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
                  Terabox is a powerful cloud storage platform that provides
                  users with 1TB of free storage space. It&apos;s designed for
                  storing and sharing various types of content, from documents
                  and photos to videos and large files. The service offers
                  seamless file management across multiple devices through its
                  web interface, desktop application, and mobile apps.
                </p>
                <p className="text-gray-600">
                  With features like automatic backups, file versioning, and
                  secure sharing options, Terabox ensures your data remains safe
                  and accessible. The platform makes it easy to organize files
                  into folders, share content with others, and access your data
                  from anywhere with an internet connection.
                </p>
              </div>
            </div>

            {/* About TeraDownloader Section */}
            <div className="mt-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  What is TeraDownloader?
                </h3>
                <p className="mb-4 text-gray-600">
                  TeraDownloader is a specialized tool that simplifies the
                  process of downloading files from Terabox. While Terabox
                  typically requires users to log in to access shared content,
                  our downloader provides a straightforward way to download
                  files directly from Terabox servers without the need for
                  registration or login.
                </p>
                <p className="text-gray-600">
                  Our service operates with complete transparency and security.
                  We don&apos;t store any files or user data on our servers.
                  Instead, we act as a bridge between you and Terabox, making it
                  easier to access and download your desired content. Whether
                  you&apos;re downloading videos, documents, or any other file
                  type, TeraDownloader ensures a smooth and efficient
                  experience.
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
                    store and share files. It offers free storage space and is
                    popular for sharing large files.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is it safe to use this downloader?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our downloader is completely safe. We don&apos;t store
                    any of your files or data on our servers. All downloads are
                    processed directly from Terabox.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Do I need to create an account?
                  </h3>
                  <p className="text-gray-600">
                    No, you don&apos;t need to create an account or log in to
                    use our downloader. Simply paste the Terabox link and
                    download your files.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    What file types are supported?
                  </h3>
                  <p className="text-gray-600">
                    Our downloader supports all file types available on Terabox,
                    including videos, documents, images, and more.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is there a file size limit?
                  </h3>
                  <p className="text-gray-600">
                    There is no file size limit for downloading. You can
                    download files of any size from Terabox.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    How fast are the downloads?
                  </h3>
                  <p className="text-gray-600">
                    Download speeds depend on your internet connection and the
                    file size. Our servers are optimized for maximum download
                    speeds.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Can I download multiple files?
                  </h3>
                  <p className="text-gray-600">
                    Yes, you can download multiple files by processing them one
                    at a time. Each file is handled independently.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-sm">
                  <h3 className="mb-2 text-lg font-semibold">
                    Is this service free?
                  </h3>
                  <p className="text-gray-600">
                    Yes, our Terabox downloader is completely free to use. No
                    hidden charges or premium features.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
                Supported Terabox Domains
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  "1024terabox.com",
                  "freeterabox.com",
                  "nephobox.com",
                  "terabox.com",
                  "terabox.app",
                  "terabox.fun",
                  "4funbox.com",
                  "mirrobox.com",
                ].map((domain) => (
                  <div
                    key={domain}
                    className="p-4 text-center bg-white rounded-lg shadow-sm"
                  >
                    <p className="text-gray-600">{domain}</p>
                  </div>
                ))}
              </div>
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
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

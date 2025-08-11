// app/loader/page.tsx
"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function LoaderPage({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  const token = searchParams?.token || "";

  useEffect(() => {
    if (!token) return;
    const t = setTimeout(() => {
      window.location.href = `/watch?token=${encodeURIComponent(token)}`;
    }, 2500); // ~2–3s gives AdSense time to hook vignettes
    return () => clearTimeout(t);
  }, [token]);

  if (!token) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="max-w-md p-6 text-center">
          <h1 className="text-2xl font-bold mb-3 text-gray-900">
            No URL Provided
          </h1>
          <Link href="/" className="px-4 py-2 bg-gray-200 rounded-lg">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-white my-28">
      <main className="flex-grow">
        <div className="max-w-4xl px-4 py-4 mx-auto sm:py-8">
          <div className="mb-6 text-center sm:mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 sm:text-4xl sm:mb-4">
              Preparing Your Video…
            </h1>
            <p className="max-w-2xl px-2 mx-auto text-base text-gray-700 sm:text-xl">
              Please wait a moment. You can also continue immediately.
            </p>
          </div>

          <div className="flex items-center justify-center mt-6">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>

          <div className="text-center mt-8">
            <a
              href={`/watch?token=${encodeURIComponent(token)}`}
              className="inline-block px-6 py-3 text-white transition-colors duration-200 bg-blue-500 rounded-lg hover:bg-blue-600"
            >
              Continue Now
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "TeraBox File Sharing Guide: How to Share Files & Folders in 2025",
  description:
    "A human-written guide to sharing files and folders on TeraBox in 2025. Step-by-step instructions, privacy tips, and troubleshooting for TeraBox sharing.",
  keywords:
    "terabox file sharing, terabox share files, terabox share folders, terabox sharing guide, terabox 2025, terabox privacy, terabox tutorial, terabox troubleshooting, terabox tips",
  openGraph: {
    title: "TeraBox File Sharing Guide: How to Share Files & Folders in 2025",
    description:
      "A human-written guide to sharing files and folders on TeraBox in 2025. Step-by-step instructions, privacy tips, and troubleshooting for TeraBox sharing.",
    type: "article",
    url: "https://teraboxstream.com/blog/terabox-file-sharing-guide",
  },
  alternates: {
    canonical: "https://teraboxstream.com/blog/terabox-file-sharing-guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeraBox File Sharing Guide: How to Share Files & Folders in 2025",
    description:
      "A human-written guide to sharing files and folders on TeraBox in 2025. Step-by-step instructions, privacy tips, and troubleshooting for TeraBox sharing.",
  },
};

export default function TeraBoxFileSharingGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-16 text-white bg-blue-600">
        <div className="max-w-4xl px-4 mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link
              href="/blog"
              className="text-blue-100 transition-colors hover:text-white"
            >
              ← Back to Blog
            </Link>
            <span className="text-blue-100">•</span>
            <span className="text-blue-100">5 min read</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">
            TeraBox File Sharing Guide: How to Share Files & Folders in 2025
          </h1>
          <div className="flex items-center gap-4">
            <span className="px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
              Guide
            </span>
            <time className="text-blue-100">July 2025</time>
          </div>
        </div>
      </div>
      <article className="max-w-4xl px-4 py-12 mx-auto">
        <div className="p-8 bg-white rounded-lg shadow-lg">
          <div className="prose prose-lg max-w-none">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">
              How to Share Files & Folders on TeraBox (2025)
            </h2>
            <p className="mb-8 text-xl text-gray-600 lead">
              Want to share files or folders with friends, family, or
              colleagues? Here’s a simple, human-written guide to sharing on
              TeraBox in 2025.
            </p>
            <h3 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Step-by-Step: Sharing Files
            </h3>
            <ol className="text-gray-700 list-decimal list-inside mb-4">
              <li>Open TeraBox (app or web) and log in</li>
              <li>Find the file or folder you want to share</li>
              <li>
                Click the &quot;Share&quot; button (usually an icon with two
                links)
              </li>
              <li>Choose to share via link or email</li>
              <li>
                Set a password or expiration date for extra privacy (optional)
              </li>
              <li>Send the link to your recipient</li>
            </ol>
            <h3 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Privacy & Troubleshooting Tips
            </h3>
            <ul className="text-gray-700 list-disc list-inside mb-4">
              <li>Use passwords for sensitive files</li>
              <li>Set expiration dates for temporary shares</li>
              <li>Check your shared links regularly and remove old ones</li>
              <li>
                If a link isn’t working, try re-sharing or check your internet
                connection
              </li>
            </ul>
            <h3 className="mt-8 mb-4 text-2xl font-bold text-gray-900">
              Final Thoughts
            </h3>
            <p className="text-gray-700">
              TeraBox makes sharing easy, but always use privacy features for
              important files. Happy sharing!
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

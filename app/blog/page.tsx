import Link from "next/link";
import { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "TeraBox Blog - How to Download TeraBox Links & Videos",
  description:
    "Learn how to download TeraBox links and videos. Step-by-step guides, tips, and tricks for using TeraBox downloader. Free tutorials for downloading TeraBox content.",
  keywords:
    "terabox blog, terabox guide, terabox tutorial, how to download terabox, terabox download guide, terabox video tutorial",
};

const blogPosts = [
  {
    slug: "how-to-download-terabox-links",
    title: "How to Download TeraBox Links: Complete Guide [2025]",
    excerpt:
      "Learn how to download any TeraBox link without login. Step-by-step guide for downloading TeraBox files and videos.",
    date: "2024-03-20",
    category: "Guides",
    readTime: "5 min read",
  },
  {
    slug: "terabox-video-downloader-guide",
    title: "TeraBox Video Downloader: Download Videos Without Login",
    excerpt:
      "Complete guide to downloading TeraBox videos. Learn how to use our TeraBox video downloader online.",
    date: "2024-03-19",
    category: "Tutorials",
    readTime: "4 min read",
  },
  {
    slug: "terabox-link-downloader-tutorial",
    title: "TeraBox Link Downloader Tutorial: Download Files Instantly",
    excerpt:
      "Master the TeraBox link downloader. Learn how to download TeraBox links quickly and securely.",
    date: "2024-03-18",
    category: "How-to",
    readTime: "3 min read",
  },
  {
    slug: "terabox-video-streaming-guide",
    title: "How to Stream TeraBox Videos Online: Complete Guide",
    excerpt:
      "Learn how to stream TeraBox videos online without downloading. Watch TeraBox videos in HD quality.",
    date: "2024-03-17",
    category: "Guides",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen mt-20 bg-white">
      <main className="max-w-4xl px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            TeraBox Blog
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Learn how to use TeraBox Stream effectively with our guides and
            tutorials
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Link
            href="/blog/how-to-download-terabox-links"
            className="p-6 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              How to Download TeraBox Links
            </h2>
            <p className="text-gray-600">
              A comprehensive guide on downloading files from TeraBox using our
              downloader.
            </p>
          </Link>

          <Link
            href="/blog/terabox-link-downloader-tutorial"
            className="p-6 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              TeraBox Link Downloader Tutorial
            </h2>
            <p className="text-gray-600">
              Step-by-step tutorial on using our TeraBox link downloader
              effectively.
            </p>
          </Link>

          <Link
            href="/blog/terabox-video-downloader-guide"
            className="p-6 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              TeraBox Video Downloader Guide
            </h2>
            <p className="text-gray-600">
              Learn how to download videos from TeraBox with our easy-to-use
              downloader.
            </p>
          </Link>

          <Link
            href="/blog/terabox-video-streaming-guide"
            className="p-6 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            <h2 className="mb-2 text-xl font-semibold text-gray-800">
              TeraBox Video Streaming Guide
            </h2>
            <p className="text-gray-600">
              Discover how to stream videos from TeraBox without downloading
              them.
            </p>
          </Link>
        </div>

        <CTABanner />
      </main>
    </div>
  );
}

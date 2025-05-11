import Link from "next/link";
import { Metadata } from "next";

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
  },
  {
    slug: "terabox-video-downloader-guide",
    title: "TeraBox Video Downloader: Download Videos Without Login",
    excerpt:
      "Complete guide to downloading TeraBox videos. Learn how to use our TeraBox video downloader online.",
    date: "2024-03-19",
  },
  {
    slug: "terabox-link-downloader-tutorial",
    title: "TeraBox Link Downloader Tutorial: Download Files Instantly",
    excerpt:
      "Master the TeraBox link downloader. Learn how to download TeraBox links quickly and securely.",
    date: "2024-03-18",
  },
  {
    slug: "terabox-video-streaming-guide",
    title: "How to Stream TeraBox Videos Online: Complete Guide",
    excerpt:
      "Learn how to stream TeraBox videos online without downloading. Watch TeraBox videos in HD quality.",
    date: "2024-03-17",
  },
];

export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">TeraBox Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post) => (
          <article key={post.slug} className="border-b pb-8">
            <Link href={`/blog/${post.slug}`} className="block group">
              <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-2">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

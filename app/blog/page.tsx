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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">TeraBox Blog</h1>
          <p className="text-xl text-blue-100">
            Learn everything about downloading and streaming TeraBox content
          </p>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <time className="text-sm text-gray-500">{post.date}</time>
                    <span className="text-blue-600 font-medium hover:text-blue-700">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Get the latest guides and tips about TeraBox downloads delivered
              to your inbox.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

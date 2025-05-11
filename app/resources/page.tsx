import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "TeraBox Resources - Share & Link to TeraBox Downloader",
  description:
    "Find resources, badges, and widgets to share TeraBox Downloader. Get HTML code for embedding our downloader on your website.",
  keywords:
    "terabox resources, terabox badge, terabox widget, terabox embed, terabox share",
};

export default function ResourcesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">TeraBox Resources</h1>

      <div className="space-y-12">
        {/* Badges Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Share Badges</h2>
          <p className="mb-6">
            Add these badges to your website to link to TeraBox Downloader:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-4">Basic Badge</h3>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <code className="text-sm">
                  {`<a href="https://teraboxstream.com" target="_blank">
  <img src="https://teraboxstream.com/badge.png" alt="TeraBox Downloader" />
</a>`}
                </code>
              </div>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    '<a href="https://teraboxstream.com" target="_blank"><img src="https://teraboxstream.com/badge.png" alt="TeraBox Downloader" /></a>'
                  )
                }
                className="text-blue-600 hover:text-blue-800"
              >
                Copy Code
              </button>
            </div>

            <div className="border rounded-lg p-6">
              <h3 className="font-medium mb-4">Text Link</h3>
              <div className="bg-gray-100 p-4 rounded mb-4">
                <code className="text-sm">
                  {`<a href="https://teraboxstream.com" target="_blank">Download TeraBox Videos Online</a>`}
                </code>
              </div>
              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    '<a href="https://teraboxstream.com" target="_blank">Download TeraBox Videos Online</a>'
                  )
                }
                className="text-blue-600 hover:text-blue-800"
              >
                Copy Code
              </button>
            </div>
          </div>
        </section>

        {/* Widget Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Embed Widget</h2>
          <p className="mb-6">Add our downloader widget to your website:</p>

          <div className="border rounded-lg p-6">
            <div className="bg-gray-100 p-4 rounded mb-4">
              <code className="text-sm">
                {`<iframe 
  src="https://teraboxstream.com/widget" 
  width="100%" 
  height="400" 
  frameborder="0"
  title="TeraBox Downloader Widget"
></iframe>`}
              </code>
            </div>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  '<iframe src="https://teraboxstream.com/widget" width="100%" height="400" frameborder="0" title="TeraBox Downloader Widget"></iframe>'
                )
              }
              className="text-blue-600 hover:text-blue-800"
            >
              Copy Code
            </button>
          </div>
        </section>

        {/* Blog Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Blog & Articles</h2>
          <p className="mb-6">Share our helpful articles about TeraBox:</p>

          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">
                How to Download TeraBox Links
              </h3>
              <p className="text-gray-600 mb-2">
                Complete guide to downloading TeraBox links without login
              </p>
              <a
                href="/blog/how-to-download-terabox-links"
                className="text-blue-600 hover:text-blue-800"
              >
                Read More →
              </a>
            </div>

            <div className="border rounded-lg p-4">
              <h3 className="font-medium mb-2">
                TeraBox Video Downloader Guide
              </h3>
              <p className="text-gray-600 mb-2">
                Learn how to download TeraBox videos easily
              </p>
              <a
                href="/blog/terabox-video-downloader-guide"
                className="text-blue-600 hover:text-blue-800"
              >
                Read More →
              </a>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            Partnership Opportunities
          </h2>
          <p className="mb-6">Interested in partnering with us? We offer:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Guest posting opportunities</li>
            <li>Content collaboration</li>
            <li>Affiliate program</li>
            <li>Technical integration support</li>
          </ul>

          <div className="mt-6">
            <a
              href="/contact"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Contact Us for Partnership
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Terabox</h3>
            <p className="text-gray-300 text-sm">
              Terabox is a cloud storage service that offers 1TB of free storage
              space. Our tool helps you download files from Terabox links easily
              and securely.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Supported URLs */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Supported URLs</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">terabox.com</li>
              <li className="text-gray-300">teraboxapp.com</li>
              <li className="text-gray-300">4funbox.com</li>
              <li className="text-gray-300">mirrobox.com</li>
              <li className="text-gray-300">nephobox.com</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300">
                <a
                  href="mailto:support@teraboxdownloader.com"
                  className="hover:text-white"
                >
                  support@teraboxdownloader.com
                </a>
              </li>
              <li className="text-gray-300">
                <a
                  href="https://twitter.com/teraboxdownloader"
                  className="hover:text-white"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Terabox Downloader. All rights
              reserved.
            </p>
            <div className="flex flex-col items-center sm:items-end space-y-3 sm:space-y-2">
              <p className="text-sm text-gray-400">
                Made with ❤️ for Terabox users worldwide
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

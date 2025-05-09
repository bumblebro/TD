"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-sm sm:text-base text-gray-600">
              © {new Date().getFullYear()} TeraBox Viewer. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
            <Link
              href="/about"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm sm:text-base text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy
            </Link>
          </div>
        </div>
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-sm sm:text-base text-gray-500">
            Made with ❤️ for easy file downloads
          </p>
        </div>
      </div>
    </footer>
  );
}

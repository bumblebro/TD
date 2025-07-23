"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHomeClick = () => {
    // Dispatch custom event to reset page state
    window.dispatchEvent(new Event("resetPage"));
    router.push("/");
    router.refresh();
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Logo onClick={handleHomeClick} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
            <Link
              href="/"
              onClick={handleHomeClick}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              About
            </Link>
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              FAQ
            </Link>
            <Link
              href="/supported-urls"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              Supported URLs
            </Link>
            <Link
              href="/dmca"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              DMCA
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
            >
              Terms of Service
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-b-lg">
            <Link
              href="/"
              onClick={() => {
                handleHomeClick();
                setIsOpen(false);
              }}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              About
            </Link>
            <Link
              href="/blog"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Blog
            </Link>
            <Link
              href="/faq"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              FAQ
            </Link>
            <Link
              href="/supported-urls"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Supported URLs
            </Link>
            <Link
              href="/dmca"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              DMCA
            </Link>
            <Link
              href="/privacy-policy"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

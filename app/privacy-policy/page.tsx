export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600">
              At TeraBox Stream, we take your privacy seriously. This Privacy
              Policy explains how we collect, use, and protect your information
              when you use our service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Information We Don&apos;t Collect
            </h2>
            <p className="text-gray-600 mb-4">
              We are committed to your privacy and don&apos;t collect or store:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Personal information</li>
              <li>Video content</li>
              <li>User data</li>
              <li>Browsing history</li>
              <li>IP addresses (beyond basic analytics)</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              How We Work
            </h2>
            <p className="text-gray-600 mb-4">
              Our service operates as a bridge between you and TeraBox:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>We process video links directly from TeraBox servers</li>
              <li>No files are stored on our servers</li>
              <li>All streaming is done through secure HTTPS connections</li>
              <li>We don&apos;t track or monitor your video content</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Analytics
            </h2>
            <p className="text-gray-600">
              We use basic analytics to improve our service. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 mt-4">
              <li>Page visit statistics</li>
              <li>Service performance metrics</li>
              <li>Error tracking</li>
              <li>Browser compatibility data</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Cookies
            </h2>
            <p className="text-gray-600">
              We use minimal cookies only for essential service functionality.
              We don&apos;t use tracking cookies or collect personal data
              through cookies.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600">
              Our service interacts with TeraBox servers directly. We don&apos;t
              share your information with any third-party services or
              advertisers.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Use our service anonymously</li>
              <li>Not provide any personal information</li>
              <li>Clear your browser data at any time</li>
              <li>Contact us with privacy concerns</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600">
              If you have any questions about our Privacy Policy, please contact
              us at support@teraboxstream.com
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated revision date.
            </p>
            <p className="text-gray-500 mt-4">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

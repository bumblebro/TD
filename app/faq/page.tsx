export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-6">
          {/* What is TeraBox Stream? */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              What is TeraBox Stream?
            </h2>
            <p className="text-gray-600">
              TeraBox Stream is a specialized streaming platform that allows you
              to watch and download videos from TeraBox directly in your
              browser. It provides instant access to TeraBox videos through a
              simple, user-friendly interface without requiring any software
              installation.
            </p>
          </div>

          {/* How to use */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              How do I use TeraBox Stream?
            </h2>
            <p className="text-gray-600 mb-4">
              Using TeraBox Stream is simple:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              <li>Copy your TeraBox video link</li>
              <li>Paste it into our streaming interface</li>
              <li>Click &quot;Watch Video&quot; to start streaming</li>
              <li>Use the download button if you want to save the video</li>
            </ol>
          </div>

          {/* Is it free? */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Is TeraBox Stream free to use?
            </h2>
            <p className="text-gray-600">
              Yes, TeraBox Stream is completely free to use. There are no hidden
              charges, premium features, or subscription requirements. We
              believe in providing a free and accessible service to all users.
            </p>
          </div>

          {/* Is it safe? */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Is it safe to use TeraBox Stream?
            </h2>
            <p className="text-gray-600">
              Yes, our service is completely safe. We don&apos;t store any of
              your files or personal information. All streaming and downloads
              are processed directly from TeraBox servers, and we use secure
              HTTPS connections for all transfers.
            </p>
          </div>

          {/* Supported domains */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Which TeraBox domains are supported?
            </h2>
            <p className="text-gray-600 mb-4">
              We support all official TeraBox domains, including:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>terabox.com</li>
              <li>teraboxapp.com</li>
              <li>4funbox.com</li>
              <li>mirrobox.com</li>
              <li>nephobox.com</li>
              <li>And many more...</li>
            </ul>
          </div>

          {/* Video quality */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              What video quality is supported?
            </h2>
            <p className="text-gray-600">
              TeraBox Stream supports all video qualities available in the
              original TeraBox link, including HD and 4K content. The streaming
              quality will automatically adjust based on your internet
              connection speed.
            </p>
          </div>

          {/* Device support */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Which devices are supported?
            </h2>
            <p className="text-gray-600">
              TeraBox Stream works on all modern devices and browsers. You can
              use it on:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 mt-2">
              <li>Desktop computers (Windows, Mac, Linux)</li>
              <li>Mobile phones (iOS, Android)</li>
              <li>Tablets</li>
              <li>Smart TVs with web browsers</li>
            </ul>
          </div>

          {/* Troubleshooting */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              What if the video doesn&apos;t play?
            </h2>
            <p className="text-gray-600 mb-4">
              If you&apos;re having trouble playing a video, try these
              solutions:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              <li>Check your internet connection</li>
              <li>Try refreshing the page</li>
              <li>Make sure the TeraBox link is valid and accessible</li>
              <li>Try using a different browser</li>
              <li>Clear your browser cache</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

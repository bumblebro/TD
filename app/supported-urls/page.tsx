export default function SupportedUrlsPage() {
  const supportedDomains = [
    "terabox.com",
    "teraboxapp.com",
    "4funbox.com",
    "mirrobox.com",
    "nephobox.com",
    "freeterabox.com",
    "1024tera.com",
    "www.4funbox.com",
    "www.freeterabox.com",
    "www.1024tera.co",
    "www.momerybox.com",
    "www.nephobox.com",
    "www.terabox.com",
    "www.teraboxapp.com",
    "terabox.fun",
    "tibibox.com",
    "www.tibibox.com",
    "momerybox.com",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Supported TeraBox Domains
        </h1>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <p className="text-gray-600 mb-6">
            TeraBox Stream supports all official TeraBox domains and their
            variations. You can use our service with any of the following
            domains:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {supportedDomains.map((domain) => (
              <div
                key={domain}
                className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors duration-200"
              >
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700 font-medium">{domain}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
          <h2 className="text-xl font-semibold text-blue-900 mb-3">
            How to Use
          </h2>
          <p className="text-blue-700 mb-4">
            Simply copy your TeraBox video link from any of these supported
            domains and paste it into our streaming interface. Our service will
            automatically detect the domain and process your video.
          </p>
          <div className="space-y-2 text-blue-700">
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              No registration required
            </p>
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Instant video streaming
            </p>
            <p className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
              HD video quality support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

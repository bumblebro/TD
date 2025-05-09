export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600">
                  We collect minimal information necessary to provide our
                  service. This includes:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>TeraBox URLs you submit for processing</li>
                  <li>Basic usage statistics to improve our service</li>
                  <li>Technical information about your browser and device</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600">
                  We use the collected information to:
                </p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Process your download requests</li>
                  <li>Improve our service and user experience</li>
                  <li>Monitor and prevent abuse of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  3. Data Storage
                </h2>
                <p className="text-gray-600">
                  We do not store any files or personal data on our servers. All
                  file processing is done in real-time, and no data is retained
                  after the download is complete.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  4. Third-Party Services
                </h2>
                <p className="text-gray-600">
                  We use third-party services for analytics and performance
                  monitoring. These services may collect anonymous usage data to
                  help us improve our service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  5. Your Rights
                </h2>
                <p className="text-gray-600">You have the right to:</p>
                <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1">
                  <li>Access any personal data we hold about you</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of analytics tracking</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  6. Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about our privacy policy, please
                  contact us through our contact page.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

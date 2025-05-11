export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600">
              By accessing and using TeraBox Stream, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please
              do not use our service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              2. Service Description
            </h2>
            <p className="text-gray-600">
              TeraBox Stream is a video streaming service that allows users to
              watch and download videos from TeraBox links. Our service acts as
              an intermediary between users and TeraBox content.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 mb-4">
              As a user of TeraBox Stream, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Use the service only for legal purposes</li>
              <li>Respect copyright and intellectual property rights</li>
              <li>Not attempt to bypass any security measures</li>
              <li>Not use the service for any malicious purposes</li>
              <li>
                Not share or distribute copyrighted content without permission
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600">
              TeraBox Stream respects intellectual property rights. Users are
              responsible for ensuring they have the right to access and use the
              content they stream or download through our service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              5. Service Limitations
            </h2>
            <p className="text-gray-600 mb-4">Our service:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Does not store or host any video content</li>
              <li>May have occasional service interruptions</li>
              <li>May not support all video formats or qualities</li>
              <li>Is provided &quot;as is&quot; without warranties</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              6. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600">
              TeraBox Stream is provided without any warranties, express or
              implied. We do not guarantee the availability, reliability, or
              quality of our service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-600">
              TeraBox Stream shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of or inability to use the service.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              8. Changes to Terms
            </h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Continued
              use of the service after changes constitutes acceptance of the
              modified terms.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              9. Contact Information
            </h2>
            <p className="text-gray-600">
              For questions about these Terms of Service, please contact us at
              support@teraboxstream.com
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              10. Governing Law
            </h2>
            <p className="text-gray-600">
              These terms shall be governed by and construed in accordance with
              applicable laws, without regard to its conflict of law provisions.
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

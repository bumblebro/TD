import CTABanner from "@/components/CTABanner";

export default function FAQ() {
  return (
    <div className="min-h-screen mt-20 bg-white">
      <main className="max-w-4xl px-4 py-8 mx-auto">
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Find answers to common questions about TeraBox Stream
          </p>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              What is TeraBox Stream?
            </h2>
            <p className="text-gray-600">
              TeraBox Stream is a free online tool that allows you to download
              files from TeraBox without requiring a login. It provides a simple
              and secure way to access your TeraBox files.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              How do I use TeraBox Stream?
            </h2>
            <p className="text-gray-600">
              Simply paste your TeraBox link into our downloader, and we&apos;ll
              process it instantly. No registration or login is required.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Is it safe to use?
            </h2>
            <p className="text-gray-600">
              Yes, TeraBox Stream is completely safe. We don&apos;t store any
              files on our servers, and all downloads are processed directly
              from TeraBox.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              Do I need to create an account?
            </h2>
            <p className="text-gray-600">
              No, you don&apos;t need to create an account or log in to use our
              service. It&apos;s completely free and accessible to everyone.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-gray-50">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              What types of files can I download?
            </h2>
            <p className="text-gray-600">
              You can download any type of file that&apos;s stored on TeraBox,
              including videos, documents, images, and more.
            </p>
          </div>
        </div>

        <CTABanner />
      </main>
    </div>
  );
}

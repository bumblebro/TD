import { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn about how TeraBox Stream protects your privacy and handles your data. Our privacy policy explains our data collection and usage practices.",
  openGraph: {
    title: "Privacy Policy | TeraBox Stream",
    description:
      "Learn about how TeraBox Stream protects your privacy and handles your data. Our privacy policy explains our data collection and usage practices.",
    url: "https://teraboxstream.com/privacy-policy",
  },
  alternates: {
    canonical: "https://teraboxstream.com/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen mt-20 bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl px-4 py-8 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              Privacy Policy
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Your privacy is important to us. Learn how we protect your data.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl">
            <div className="space-y-6">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  1. Information We Collect
                </h2>
                <p className="text-gray-600">
                  We collect minimal information necessary to provide our
                  service. This includes:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  <li>TeraBox URLs you submit for processing</li>
                  <li>Basic usage statistics to improve our service</li>
                  <li>Technical information about your browser and device</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-600">
                  We use the collected information to:
                </p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  <li>Process your download requests</li>
                  <li>Improve our service and user experience</li>
                  <li>Monitor and prevent abuse of our service</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  3. Data Storage
                </h2>
                <p className="text-gray-600">
                  We do not store any files or personal data on our servers. All
                  file processing is done in real-time, and no data is retained
                  after the download is complete.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  4. Third-Party Services
                </h2>
                <p className="text-gray-600">
                  We use third-party services for analytics and performance
                  monitoring. These services may collect anonymous usage data to
                  help us improve our service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  5. Your Rights
                </h2>
                <p className="text-gray-600">You have the right to:</p>
                <ul className="mt-2 space-y-1 text-gray-600 list-disc list-inside">
                  <li>Access any personal data we hold about you</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of analytics tracking</li>
                </ul>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  6. Contact Us
                </h2>
                <p className="text-gray-600">
                  If you have any questions about our privacy policy, please
                  contact us through our contact page.
                </p>
              </section>
            </div>
          </div>

          <CTABanner />
        </div>
      </main>
    </div>
  );
}

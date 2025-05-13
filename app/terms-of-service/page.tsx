import { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read our Terms of Service to understand the rules and guidelines for using TeraBox Stream. Learn about your rights and responsibilities as a user.",
  openGraph: {
    title: "Terms of Service | TeraBox Stream",
    description:
      "Read our Terms of Service to understand the rules and guidelines for using TeraBox Stream. Learn about your rights and responsibilities as a user.",
    url: "https://teraboxstream.com/terms-of-service",
  },
  alternates: {
    canonical: "https://teraboxstream.com/terms-of-service",
  },
};

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen mt-20 bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl px-4 py-8 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              Terms of Service
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Please read these terms carefully before using our service.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl">
            <div className="space-y-6">
              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing and using TeraBox Viewer, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  2. Use of Service
                </h2>
                <p className="text-gray-600">
                  TeraBox Viewer is provided for legitimate file downloading
                  purposes only. Users are responsible for ensuring they have
                  the right to download any files they access through our
                  service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  3. Service Limitations
                </h2>
                <p className="text-gray-600">
                  We do not guarantee uninterrupted or error-free service. We
                  reserve the right to modify, suspend, or discontinue the
                  service at any time.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  4. User Responsibilities
                </h2>
                <p className="text-gray-600">
                  Users are responsible for maintaining the security of their
                  systems and for any activities that occur under their usage of
                  the service.
                </p>
              </section>

              <section>
                <h2 className="mb-4 text-2xl font-bold text-gray-800">
                  5. Changes to Terms
                </h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Users
                  will be notified of any material changes to these terms.
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

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our service.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-600">
                  By accessing and using TeraBox Viewer, you accept and agree to
                  be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  3. Service Limitations
                </h2>
                <p className="text-gray-600">
                  We do not guarantee uninterrupted or error-free service. We
                  reserve the right to modify, suspend, or discontinue the
                  service at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  4. User Responsibilities
                </h2>
                <p className="text-gray-600">
                  Users are responsible for maintaining the security of their
                  systems and for any activities that occur under their usage of
                  the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  5. Changes to Terms
                </h2>
                <p className="text-gray-600">
                  We reserve the right to modify these terms at any time. Users
                  will be notified of any material changes to these terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

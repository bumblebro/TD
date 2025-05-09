export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              About TeraBox Viewer
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A modern solution for downloading files from TeraBox without
              requiring login.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6">
              TeraBox Viewer was created to provide a simple, fast, and secure
              way to download files from TeraBox without the need for user
              registration or login. We believe in making file sharing
              accessible to everyone while maintaining privacy and security.
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">Features</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
              <li>No login required</li>
              <li>Fast and reliable downloads</li>
              <li>Support for multiple TeraBox domains</li>
              <li>Privacy-focused approach</li>
              <li>Simple and intuitive interface</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600">
              Our service acts as a bridge between you and TeraBox, handling the
              authentication and file retrieval process in the background. This
              allows you to download files directly without going through the
              TeraBox login process.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

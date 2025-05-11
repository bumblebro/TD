export default function About() {
  return (
    <div className="flex flex-col min-h-screen mt-20 bg-white">
      <main className="flex-grow">
        <div className="max-w-4xl px-4 py-8 mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-4 text-4xl font-bold text-gray-800">
              About TeraBox Viewer
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              A modern solution for downloading files from TeraBox without
              requiring login.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">
              Our Mission
            </h2>
            <p className="mb-6 text-gray-600">
              TeraBox Viewer was created to provide a simple, fast, and secure
              way to download files from TeraBox without the need for user
              registration or login. We believe in making file sharing
              accessible to everyone while maintaining privacy and security.
            </p>

            <h2 className="mb-4 text-2xl font-bold text-gray-800">Features</h2>
            <ul className="mb-6 space-y-2 text-gray-600 list-disc list-inside">
              <li>No login required</li>
              <li>Fast and reliable downloads</li>
              <li>Support for multiple TeraBox domains</li>
              <li>Privacy-focused approach</li>
              <li>Simple and intuitive interface</li>
            </ul>

            <h2 className="mb-4 text-2xl font-bold text-gray-800">
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

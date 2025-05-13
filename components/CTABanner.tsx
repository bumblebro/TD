import Link from "next/link";

export default function CTABanner() {
  return (
    <div className="p-8 mt-12 text-white bg-blue-600 rounded-lg">
      <h3 className="mb-4 text-2xl font-bold">
        Ready to Download Your TeraBox Links?
      </h3>
      <p className="mb-6 text-blue-100">
        Try our TeraBox link downloader now and get your files instantly!
      </p>
      <Link
        href="/"
        className="inline-block px-8 py-3 font-semibold text-blue-600 transition-colors bg-white rounded-lg hover:bg-blue-50"
      >
        Download TeraBox Links Now
      </Link>
    </div>
  );
}

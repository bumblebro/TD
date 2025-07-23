import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy | teraboxstream.com",
  description: "Read the DMCA Policy for teraboxstream.com. Learn how to report copyright infringement and our repeat infringer policy.",
};

export default function DmcaPage() {
  return (
    <div className="min-h-screen bg-gray-50 mt-40">
      <main className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">DMCA Policy for teraboxstream.com</h1>
        <p className="mb-4 text-gray-700">Welcome to teraboxstream.com&apos;s DMCA Policy, where we prioritize copyright compliance and address infringement claims promptly. Below, you&apos;ll find our procedures for reporting copyright violations and our approach to handling repeat infringements.</p>
        
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Reporting Copyright Infringement Claims:</h2>
        <p className="mb-4 text-gray-700">If you believe your copyrighted work has been used on teraboxstream.com without proper authorization, please inform our designated DMCA Agent by emailing <a href="mailto:mail.TeraboxStream@gmail.com" className="text-blue-600 underline">mail.TeraboxStream@gmail.com</a></p>
        <p className="mb-4 text-gray-700">For your notice to be effective, please include the following details:</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>A valid physical or electronic signature of an authorized person representing the copyright owner.</li>
          <li>Clear identification of the copyrighted work that has been infringed.</li>
          <li>Specific details of the infringing material, including its location on our website.</li>
          <li>Your contact information, including address, telephone number, and email address.</li>
          <li>A statement affirming your good faith belief that the use of the material is not authorized by the copyright owner, its agent, or the law.</li>
          <li>A statement confirming the accuracy of the information provided and asserting that you are authorized to act on behalf of the copyright owner.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Repeat Infringer Policy</h2>
        <p className="mb-4 text-gray-700">At teraboxstream.com, we adhere strictly to DMCA regulations. If a user is found to repeatedly infringe copyrights, we will terminate their access to our website. Our repeat infringer policy ensures compliance and protects intellectual property rights.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Changes to the DMCA policy</h2>
        <p className="mb-4 text-gray-700">We may update this DMCA Policy periodically to comply with DMCA regulations and other applicable laws. Please check back regularly for any revisions.</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900">Contact Us</h2>
        <p className="mb-4 text-gray-700">Thank you for your cooperation in helping us maintain a copyright-friendly environment on teraboxstream.com.</p>
        <p className="mb-4 text-gray-700">If you have any questions about this DMCA Policy, please contact us.</p>
      </main>
    </div>
  );
}

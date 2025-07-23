import { Metadata } from "next";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Privacy Policy for TeraboxStream.com",
  description:
    "Read our privacy policy to understand how TeraboxStream.com protects your data and maintains your privacy while using our service.",
  keywords:
    "TeraboxStream privacy policy, TeraboxStream data protection, TeraboxStream privacy, TeraboxStream terms",
  openGraph: {
    title: "Privacy Policy for TeraboxStream.com",
    description:
      "Read our privacy policy to understand how TeraboxStream.com protects your data and maintains your privacy while using our service.",
    type: "website",
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
              Privacy Policy for TeraboxStream.com
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              This Privacy Policy document contains types of information that is collected and recorded by TeraboxStream.com and how we use it.
            </p>
          </div>

          <div className="p-8 bg-gray-50 rounded-xl space-y-6 text-gray-700">
            <section>
              <p>At TeraboxStream.com, accessible from https://TeraboxStream.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by TeraboxStream.com and how we use it.</p>
              <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.</p>
              <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in TeraboxStream.com. This policy is not applicable to any information collected offline or via channels other than this website.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Consent</h2>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Information we collect</h2>
              <p>The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.</p>
              <p>If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.</p>
              <p>When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">How we use your information</h2>
              <p>We use the information we collect in various ways, including to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Log Files</h2>
              <p>TeraboxStream.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Cookies</h2>
              <p>Like any other website, TeraboxStream.com uses &quot;cookies&quot;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Our Advertising Partners</h2>
              <p>Some of advertisers on our site may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Google<br /><a href="https://policies.google.com/technologies/ads" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads</a></li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Advertising Partners Privacy Policies</h2>
              <p>You may consult this list to find the Privacy Policy for each of the advertising partners of TeraboxStream.com.</p>
              <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on TeraboxStream.com, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
              <p>Note that TeraboxStream.com has no access to or control over these cookies that are used by third-party advertisers.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Third Party Privacy Policies</h2>
              <p>TeraboxStream.com&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.</p>
              <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Children&apos;s Information</h2>
              <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
              <p>TeraboxStream.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
            </section>

            <section>
              <h2 className="mb-2 text-2xl font-bold text-gray-800">Contact Us</h2>
              <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to Contact us.</p>
            </section>
          </div>

          <CTABanner />
        </div>
      </main>
    </div>
  );
}

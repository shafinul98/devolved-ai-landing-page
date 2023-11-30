"use client";

import HeroImage from "../../public/contact/hero-image.webp";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between p-0 md:p-0">
      <section
        className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
          <div className="text-center">
            <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033]">
              Privacy Policy for Devolved AI
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full xl:my-10 items-center bg-gray-100 3xl:container">
        <div className="flex flex-col items-start justify-around px-4 py-4 xl:px-8 relative">
          <h1 className="text-3xl font-bold mb-4">
            Last Updated: November 28, 2023
          </h1>
          <p className="mb-4">
            Devolved AI ("us," "we," or "our") operates the website
            www.devolvedai.com (the "Website"). This Privacy Policy informs you
            of our policies regarding the collection, use, and disclosure of
            personal information we receive from users of the Website. By using
            the Website, you agree to the collection and use of information in
            accordance with this policy.
          </p>
          ​
          <h2 className="text-2xl font-bold mb-2">
            1. Information Collection and Use
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              1.1. Information You Provide: When you visit our Website, you may
              voluntarily provide us with certain personally identifiable
              information, including but not limited to your name, email
              address, and any other information you choose to provide when
              contacting us.
            </li>
            <li>
              1.2. Log Data: Like many website operators, we collect information
              that your browser sends whenever you visit our Website ("Log
              Data"). This Log Data may include information such as your
              computer's Internet Protocol ("IP") address, browser type, browser
              version, the pages of our Website that you visit, the time and
              date of your visit, the time spent on those pages, and other
              statistics.
            </li>
          </ul>
          ​<h2 className="text-2xl font-bold mb-2">2. Cookies</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              2.1. Cookies: Cookies are files with a small amount of data, which
              may include an anonymous unique identifier. Cookies are sent to
              your browser from a website and stored on your computer's hard
              drive. We use "cookies" to collect information and improve our
              Website.
            </li>
            <li>
              2.2. Third-Party Service Providers: We may use third-party service
              providers to monitor and analyze the use of our Website.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">3. Data Security</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              3.1. Security Measures: The security of your personal information
              is important to us, but please remember that no method of
              transmission over the Internet, or method of electronic storage,
              is 100% secure. While we strive to use commercially acceptable
              means to protect your personal information, we cannot guarantee
              its absolute security.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">4. Links to Other Sites</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              4.1. Third-Party Links: Our Website may contain links to other
              sites that are not operated by us. If you click on a third-party
              link, you will be directed to that third party's site. We strongly
              advise you to review the Privacy Policy of every site you visit.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">
            5. Changes to this Privacy Policy
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              5.1. Updates: We may update our Privacy Policy from time to time.
              We will notify you of any changes by posting the new Privacy
              Policy on this page.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">6. Contact Us</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              6.1. Contact Information: If you have any questions or concerns
              about this Privacy Policy, please contact us at
              info@devolvedai.com
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
    </main>
  );
}

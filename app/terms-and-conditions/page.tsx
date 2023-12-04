"use client";

import HeroImage from "@/public/contact/hero-image.webp"

export default function TermsAndConditions() {
  return (
    <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between p-0 md:p-0">
      <section
        className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HeroImage.src})` }}
      >
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
          <div className="text-center">
            <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033]">
              Terms and Conditions for Devolved AI
            </h1>
          </div>
        </div>
      </section>

      <section className="w-full xl:my-10 items-center bg-gray-100 3xl:container">
        <div className="flex flex-col items-start justify-around px-4 py-4 xl:px-8 relative">
          ​<h2 className="text-2xl font-bold mb-2">1. Acceptance of Terms</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              1.1 By accessing or using the Devolved AI website (hereinafter
              referred to as the "Website"), you agree to comply with and be
              bound by these Terms and Conditions.
            </li>
            <li>
              1.2 If you do not agree with any part of these Terms and
              Conditions, please do not use the Website.
            </li>
          </ul>
          ​<h2 className="text-2xl font-bold mb-2">2. Changes to Terms</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              2.1 Devolved AI reserves the right to modify, amend, or update
              these Terms and Conditions at any time without prior notice. Any
              changes will be effective immediately upon posting on the Website.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">3. Privacy Policy</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              3.1 Our Privacy Policy, available at
              https://devolvedai.com/privacy governs the collection, use, and
              disclosure of your personal information. By using the Website, you
              consent to the practices described in our Privacy Policy.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">4. Intellectual Property</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              4.1 All content on the Website, including but not limited to text,
              graphics, logos, images, software, and other materials, is
              protected by intellectual property laws and is the property of
              Devolved AI or its licensors. You may not reproduce, distribute,
              or use any content from the Website without explicit written
              permission.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">5. Use of the Website</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              5.1 You agree to use the Website only for lawful and legitimate
              purposes and in accordance with these Terms and Conditions.
            </li>
            <li>
              5.2 You must not engage in any conduct that may disrupt, damage,
              or impair the functionality of the Website or interfere with other
              users' access to the Website.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">6. User Accounts</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              6.1 If the Website offers user account registration, you are
              responsible for maintaining the confidentiality of your account
              information and for all activities that occur under your account.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">
            7. Disclaimers and Limitation of Liability
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              7.1 The Website and its content are provided on an "as is" and "as
              available" basis. Devolved AI makes no warranties or
              representations regarding the accuracy, completeness, or
              reliability of the Website.
            </li>
            <li>
              7.2 Devolved AI disclaims all liability for any damages, including
              but not limited to direct, indirect, incidental, consequential, or
              punitive damages, arising from your use of the Website.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">
            8. Governing Law and Jurisdiction
          </h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              8.1 These Terms and Conditions are governed by and construed in
              accordance with the laws of the State of California, United
              States. You agree to submit to the exclusive jurisdiction of the
              state and federal courts located in California for any disputes
              arising out of or related to these Terms and Conditions.
            </li>
          </ul>
          <h2 className="text-2xl font-bold mb-2">9. Contact Information</h2>
          <ul className="list-disc list-inside mb-4">
            <li>
              9.1 If you have any questions or concerns about these Terms and
              Conditions, you may contact us at info@devolvedai.com
            </li>
          </ul>
        </div>
      </section>

      <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
    </main>
  );
}

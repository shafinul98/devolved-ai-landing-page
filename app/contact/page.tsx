import React from "react";

import ContactPageHeroImage from "../../public/Contact Page Hero Image.svg";
import Image from "next/image";

const ContactPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            CONTACT
          </h1>
          <Image
            src={ContactPageHeroImage}
            alt="Hero Image"
            className="w-full"
          />
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

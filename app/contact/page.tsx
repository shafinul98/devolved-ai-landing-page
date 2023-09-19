"use client";

import React, { useEffect } from "react";

import ContactPageHeroImage from "../../public/Contact Page Hero Image.webp";
import Image from "next/image";
import { ContactForm } from "@/components/Custom Components/ContactForm";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  FaDiscord,
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";

const ContactPage = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable text selection
    document.body.style.userSelect = "none";

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

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
            className="w-full md:h-[25rem]"
          />
        </div>
      </section>

      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-xl my-5">Find us on these platforms</h1>
        <div className="flex gap-3 md:gap-10">
          <Link
            href={"https://facebook.com/devolvedai"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaFacebook size={30} />
          </Link>

          <Link
            href={"https://twitter.com/devolvedai"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTwitter size={30} />
          </Link>

          <Link
            href={"https://www.reddit.com/user/devolvedai"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaReddit size={30} />
          </Link>

          <Link
            href={"https://discord.gg/Z2avfRQ4xc"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaDiscord size={30} />
          </Link>

          <Link
            href={"https://t.me/devolvedai"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaTelegram size={30} />
          </Link>
        </div>
      </div>

      <section className="w-full mt-[7.5rem] lg:mt-[5rem] bg-[#f5f5f5]">
        <div className="flex flex-col mt-[4rem] px-3">
          <h1 className="text-center text-[2rem] font-bold text-[#2D3748] mb-[1rem]">
            Contact us
          </h1>
          <p className="text-center text-base text-[#646E73] md:px-[25.63rem]">
            theFront will make your product look modern and professional while
            saving you precious time.
          </p>
        </div>

        <div className="px-5">
          <ContactForm />
        </div>
      </section>

      <section className="w-full my-10 md:mb-20">
        <h3 className="text-[#646E73] text-center text-base">F.A.Q</h3>
        <h1 className="text-[#2D3748] text-3xl text-center font-bold">
          Have a question?
        </h1>
        <p className="text-[#646E73] text-center text-xl my-3">
          Search our FAQ for answers to anything you might ask.
        </p>

        <div className="px-5 mt-10 md:w-1/2 mx-auto">
          <Accordion type="single" collapsible className="w-full text-base">
            <AccordionItem
              value="item-1"
              className="shadow-lg p-2 rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Can I purchase a gift certificate?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="shadow-lg p-2 rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                What is your return policy?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="shadow-lg p-2 rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Do you sell gift cards?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="shadow-lg p-2 rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Can I change plans later on?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="shadow-lg p-2 rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Is this a subscription service?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

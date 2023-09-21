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
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            CONTACT
          </h1>
          <Image
            src={ContactPageHeroImage}
            alt="Hero Image"
            className="w-full md:h-[30rem] object-cover"
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
            Get in Touch with Devolved AI
          </h1>
          <p className="text-center text-base text-[#646E73] md:px-[5rem] lg:px-[15rem]">
            We're eager to hear from you. Whether you have questions about our
            PoV Protocol, AGC rewards, or how to get involved in our
            community-driven AI initiatives, don't hesitate to reach out. Your
            input is valuable to us.
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
          <Accordion
            type="single"
            collapsible
            className="w-full text-base sm:max-md:text-center"
          >
            <AccordionItem
              value="item-1"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                What is DevolvedAI?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Devolved AI is a community-driven platform focused on developing
                decentralized Artificial Intelligence (AI). We use our unique
                PoV Protocol to reward contributions and allow for democratic
                governance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                How do I earn Argocoin (AGC)?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                You can earn AGC by participating in various activities such as
                data validation, AI training, and governance voting. Our PoV
                Protocol ensure fair and transparent rewards.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Can I redeem AGC for other cryptocurrencies?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Yes, you can redeem your earned AGC for USDT, ETH and BNB on
                their respective blockchains via a wrapped AGC.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-4"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                How does the voting process work?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Our token-weighted voting system allows AGC holders to
                participate in governance decisions. Proposals can be submitted
                by any community member, and voting is conducted in a
                transparent manner.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-5"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                How can I contribute to AI training?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                You can contribute by providing valuable data or computational
                resources. Detailed guidelines are available in our
                Participation Guide.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-6"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Is my data secure?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Yes, data privacy and security are among our top priorities. All
                data is encrypted and stored securely.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-7"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                How do I get technical support?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                We offer 24/7 technical support. You can reach out to us via the
                Contact page for any technical queries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-8"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                Where can I find the Transparency Report?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Our Transparency Report is available for download on our Rewards
                Page, providing details on AGC distribution and community
                contributions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-9"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                How can I stay updated with Devolved AI's developments?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                You can subscribe to our newsletter or follow us on social media
                to stay updated with all our latest news and developments.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-10"
              className="shadow-lg px-5 py-2  rounded-xl my-3"
            >
              <AccordionTrigger className="font-bold text-[#2D3748]">
                How can I get involved?
              </AccordionTrigger>
              <AccordionContent className="text-[#646E73] font-normal text-base">
                Getting involved is easy. Simply follow the steps in our
                Participation Guide to start contributing and earning rewards.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

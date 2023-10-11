"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";

import DevolvedAILogoEA from "../../public/Devolved_AI_Logo_EA.svg";
import MailIcon from "../../public/Mail Icon.svg";
import MoneyIcon from "../../public/Money Icon.svg";
import TrophyIcon from "../../public/Trophy Icon.svg";
import CalendarIcon from "../../public/Calendar Icon.svg";
import StayConnectedIcon from "../../public/Stay Connected Icon.svg";
import PhonebookIcon from "../../public/Phone Book Icon.svg";

import SweepstakesImage from "../../public/Sweepstakes Image.png";
import MissionImage from "../../public/Mission Image.png";
import PuzzleImage from "../../public/Puzzle Image.png";
import PartnershipImage from "../../public/Partnership Image.png";
import ContactUsImage from "../../public/Contact Us Image.png";

import {
  FaDiscord,
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const EarlyAccessSuccess = () => {
  const pathname = usePathname();

  const router = useRouter();

  useEffect(() => {
    if (!pathname.includes("?isSignedUp=")) {
      router.push("/");
    }
  }, []);

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between p-0">
      <section
        className="min-h-screen w-full"
        style={{
          background: "linear-gradient(105deg, #02296D 0%, #204FA2 100%)",
        }}
      >
        <div className="mx-auto bg-[#F5F5F5] w-10/12 lg:w-6/12 xl:w-1/3 md:max-lg:w-8/12 my-10 rounded-[0.9375rem] flex flex-col items-center py-5">
          {/* Devolved AI Logo */}
          <Image src={DevolvedAILogoEA} alt="Logo" className="mt-5" />
          {/* Welcome Text */}
          <div className="mt-10 flex flex-col">
            <h1 className="text-[#2D3748] text-[1.5rem] text-center md:text-start md:text-[2.125rem] font-extrabold capitalize">
              Thank You for Joining Us!
            </h1>
            <p className="text-[#646E73] text-[1rem] text-center md:text-start px-2.5 md:px-0">
              Your journey towards a decentralized AI future begins here.
            </p>
          </div>
          {/* Mail Icon and message */}
          <div className="flex flex-col mt-10 items-center gap-2.5 px-5">
            <Image src={MailIcon} alt="Mail Icon" />
            <p className="text-[#646E73] text-[1rem] text-center">
              Important: Please check your inbox for our welcome email. If you
              don't see it, ensure it's not in your spam or junk folder. This
              email holds key information on rewards and benefits.
            </p>
          </div>
          {/* Money Section */}
          <div className="flex flex-col items-center mt-10">
            {/* Money Icon and Title */}
            <div className="flex gap-5">
              <Image src={MoneyIcon} alt="Money Icon" />
              <h1 className="text-[#2D3748] text-[1.5rem] font-extrabold capitalize">
                Win $1,000 Cash !
              </h1>
            </div>
            {/* Sweepstakes Image */}
            <div className="px-2.5 md:px-5 mt-8">
              <Image src={SweepstakesImage} alt="Sweepstakes Image" />
            </div>
            {/* Sweepstakes text */}
            <div className="mt-8 md:px-5 px-2.5">
              <p className="text-[#646E73] text-[1.125rem] font-semibold text-center">
                Sweepstakes entries end at 12am on December 5. Stay tuned ! The
                winner will be announced at 6pm PST December 5 on all our social
                media channels
              </p>
            </div>
            {/* Mission Image */}
            <div className="md:px-5 px-2.5 mt-12">
              <Image src={MissionImage} alt="Mission Image" />
            </div>
            {/* Mission Icon, Title and Sub Text */}
            <div className="flex gap-5 mt-8">
              <Image src={TrophyIcon} alt="Trophy Icon" />
              <h1 className="text-[#2D3748] text-[1.5rem] capitalize font-extrabold">
                Our Mission
              </h1>
            </div>
            <p className="text-[#646E73] text-[1rem] text-center md:px-5 px-2.5 mt-2.5">
              To pioneer an AI future that's shaped by the community. Be part of
              the revolution.
            </p>
            {/* Puzzle Image */}
            <div className="px-2.5 md:px-5 mt-12">
              <Image src={PuzzleImage} alt="Puzzle Image" />
            </div>
            {/* Calendar Icon and Title */}
            <div className="px-2.5 md:px-5 mt-8 flex flex-col items-center gap-2.5">
              <Image src={CalendarIcon} alt="Calendar Icon" />
              <p className="text-[#646E73] text-[1rem] text-center">
                Mark your calendars! Our MVP is launching on Dec 5, 2023. Stay
                tuned for exclusive updates.
              </p>
            </div>
            {/* Partnership Image */}
            <div className="px-2.5 md:px-5 mt-12">
              <Image src={PartnershipImage} alt="Partnership Image" />
            </div>
            {/* Stay Connected Icon and Title */}
            <div className="flex gap-4 mt-8">
              <Image src={StayConnectedIcon} alt="Stay Connected Icon" />
              <h1 className="text-[#2D3748] font-extrabold text-[1.5rem] capitalize">
                Stay Connected
              </h1>
            </div>
            <p className="mt-2.5 text-[1rem] text-[#646E73] text-center md:text-start px-5 md:px-0">
              "Join our community and stay updated on our journey."
            </p>
            {/* Social Icons */}
            <div className="flex flex-col items-center justify-center mt-10 px-5 md:px-0">
              <div className="flex gap-5 md:gap-10">
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
            {/* Contact Us Image */}
            <div className="px-2.5 md:px-5 mt-12">
              <Image src={ContactUsImage} alt="Contact Us" />
            </div>
            {/* Phonebook Icon and Title */}
            <div className="flex gap-4 mt-8">
              <Image src={PhonebookIcon} alt="Stay Connected Icon" />
              <h1 className="text-[#2D3748] font-extrabold text-[1.5rem] capitalize">
                Contact Us{" "}
              </h1>
            </div>
            {/* Sub Text */}
            <p className="mt-2.5 text-[1rem] text-[#646E73] mb-12 text-center md:text-start px-5 md:px-0">
              Questions? We're here for you. Email us at devolved@care.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EarlyAccessSuccess;

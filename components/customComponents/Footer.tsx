"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../public/logo.svg";
import FooterBackground from "../../public/footer/background.webp";

import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="flex flex-col overflow-x-hidden justify-between mt-10 md:mt-15 lg:mt-20 3xl:container">
      <div className="flex flex-col items-start xl:m-12 m-10 gap-10 xl:flex-row xl:justify-around">
        <div
          className="flex flex-col items-start xl:ml-2"
          style={{
            backgroundImage: `url(${FooterBackground.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100px",
          }}
        >
          <div className="mb-5 xl:ml-3">
            <Link href={"/"}>
              <Image
                priority
                src={FooterLogo}
                alt="footer_logo"
                className="md:w-[11.25rem] md:h-[#1D1D1D] w-[11.75rem] h-[2rem] md:ms-[-0.5rem]"
                quality={100}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-5 items-center md:items-start mt-2 mr-5">
            <div className="flex items-center">
              <span className="xl:mr-2 mb-4">
                <HiLocationMarker className="w-5 h-5 text-black-500" />
              </span>
              <span className="text-[#1D1D1D] text-[1rem] leading-[1.25rem] font-normal">
                <span className="block">1706 Chester Ave., Suite #555</span>
                <span className="block">Bakersfield, CA 93309</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="mb-5 font-medium text-[1.25rem] leading-normal text-[#29233B]">
            Quick Links
          </p>
          <div className="flex flex-col gap-2 font-normal leading-normal text-[1rem] text-[#1D1D1D]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/argoCoin">Argocoin</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/community">CommUnity</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col items-start">
          <p className="mb-5 font-medium text-[1.25rem] leading-normal text-[#29233B]">
            Utility pages
          </p>
          <div className="flex flex-col gap-2 text-[1rem] font-normal leading-normal text-[#1D1D1D]">
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/usdc-giveaway">USDC Giveaway and Terms</Link>
          </div>
        </div>

        <div
          className="flex flex-col items-start"
          style={{
            backgroundImage: `url(${FooterBackground.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: "100px",
          }}
        >
          <p className="mb-5 font-medium text-[1.25rem] text-start leading-normal text-[#29233B]">
            Social Links
          </p>
          <div className="flex gap-3">
            <Link
              className="md:w-[2.82381rem] md:h-[2.82381rem]"
              href={"https://facebook.com/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook size={25} />
            </Link>

            <Link
              className="md:w-[2.82381rem] md:h-[2.82381rem]"
              href={"https://twitter.com/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size={25} />
            </Link>

            <Link
              className="md:w-[2.82381rem] md:h-[2.82381rem]"
              href={"https://www.reddit.com/user/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaReddit size={25} />
            </Link>

            <Link
              className="md:w-[2.82381rem] md:h-[2.82381rem]"
              href={"https://discord.com/invite/uS4pBdJz"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDiscord size={25} />
            </Link>

            <Link
              className="md:w-[2.82381rem] md:h-[2.82381rem]"
              href={"https://t.me/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTelegram size={25} />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[#E5E7EB] w-full mx-auto border bottom-1" />

      <p className="text-center my-10 text-[#1D1D1D] text-[1rem] font-normal leading-[1.25rem]">
        © Devolved AI 2023. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

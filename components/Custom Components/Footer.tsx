import Image from "next/image";
import React from "react";
import FooterLogo from "../../public/Devolved AI Image.svg";
import Button from "./Button";
import Link from "next/link";

import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-4 md:mt-6 lg:mt-10">
      <div className="flex flex-col items-center md:items-baseline gap-10 md:flex-row md:justify-around mb-20">
        <div className="flex flex-col gap-5 items-center justify-center">
          <div>
            <Link href={"/"}>
              <Image
                src={FooterLogo}
                alt=""
                className="md:w-[18.5rem] md:h-[5rem] w-[11.75rem] h-[2rem] md:ms-[-0.5rem]"
                quality={100}
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-1">
            <Button
              title="Get Early Access"
              extraStyles=" p-1 bg-[#FF6F00] rounded-full text-center text-white md:w-[7.9rem]"
            />
            <Button
              title="Whitepaper"
              extraStyles=" p-1 bg-white text-[#0074D9] border-[#0074D9] rounded-full text-center md:w-[7.9rem]"
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-5 font-normal text-[1.5rem]">Quick Links</h1>
          <div className="flex flex-col items-start gap-2">
            <Link href="/about">About</Link>
            <Link href="/core">Core</Link>
            <Link href="/community">Community</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/rewards">Rewards</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="mb-5 font-normal text-[1.5rem] text-start">
            Follow Us on
          </h1>
          <div className="flex gap-3">
            <Link
              href={"https://facebook.com/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook size={25} />
            </Link>

            <Link
              href={"https://twitter.com/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size={25} />
            </Link>

            <Link
              href={"https://www.reddit.com/user/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaReddit size={25} />
            </Link>

            <Link
              href={"https://discord.gg/Z2avfRQ4xc"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDiscord size={25} />
            </Link>

            <Link
              href={"https://t.me/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTelegram size={25} />
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />

      <p className="text-center my-10 font-light">
        © Devolved AI 2023. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

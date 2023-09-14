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
    <footer className="min-w-full md:w-full">
      <div className="flex flex-col items-center md:items-baseline gap-10 md:flex-row md:justify-around mb-20">
        <div className="flex flex-col gap-5 items-center">
          <div>
            <Link href={"/"}>
              <Image src={FooterLogo} alt="" width={150} height={200} />
            </Link>
          </div>
          <Button
            title="Launch App"
            extraStyles=" w-3/4 p-1 bg-[#FF6F00] rounded-full text-center text-white"
          />
          <Button
            title="Whitepaper"
            extraStyles=" w-3/4 p-1 bg-white text-[#0074D9] border-[#0074D9] rounded-full text-center"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5 font-semibold">Quick Links</h1>
          <div className="flex flex-col items-start gap-2">
            <Link href="/about">About</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/community">Community</Link>
            <Link href="/governance">Governance</Link>
            <Link href="/rewards">Rewards</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="mb-5 font-semibold">Follow Us on</h1>
          <div className="flex gap-3">
            <Link href={"https://www.facebook.com/deepengineai/"}>
              <FaFacebook size={25} />
            </Link>

            <Link href={"https://twitter.com/deepengineai"}>
              <FaTwitter size={25} />
            </Link>

            <Link href={"https://www.reddit.com/r/DeepEngineAI/?rdt=38444"}>
              <FaReddit size={25} />
            </Link>

            <Link href={"https://discord.com/invite/Z2avfRQ4xc"}>
              <FaDiscord size={25} />
            </Link>

            <FaTelegram size={25} />
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

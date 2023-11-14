"use client"

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../public/logo.svg";
import FooterBackground from "../../public/footer/background.png"

import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaTelegram
} from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-16 lg:mt-20 3xl:container">
      <div className="flex flex-col items-center md:items-start gap-10 md:flex-row md:justify-around mb-12">
        <div className="flex flex-col items-center md:items-start"
          style={{
            backgroundImage: `url(${FooterBackground.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100px',
          }}>

          <div className="logo mb-5 ml-3">
            <Link href={"/"}>
              <Image
                src={FooterLogo}
                alt="footer_logo"
                className="md:w-[12.5rem] md:h-[3rem] w-[11.75rem] h-[2rem] md:ms-[-0.5rem]"
                quality={100}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-5 items-center md:items-start mt-2 mr-5">
            <div className="flex items-center">
              <span className="icon mr-2 mb-4">
                <HiLocationMarker className="w-5 h-5 text-black-500" />
              </span>
              <span className="text" 
                style={{ 
                  color: '#1D1D1D', 
                  fontFamily: 'Ubuntu', 
                  fontSize: '1rem', 
                  fontStyle: 'normal', 
                  fontWeight: 400,
                  lineHeight: '1.25rem'
                }}>
                <span className="block">1706 Chester Ave., Suite #555</span>
                <span className="block">Bakersfield, CA 93309</span>
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-5 font-ubuntu font-bold text-[1rem]">Quick Links</h1>
          <div className="flex flex-col items-start gap-2 font-ubuntu font-normal text-[.75rem]">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/argoCoin">$AGC</Link>
            <Link href="/technology">Technology</Link>
            <Link href="/community">Community</Link>
            <Link href="#">Governance</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-5 font-ubuntu font-bold text-[1rem]">Utility pages</h1>
          <div className="flex flex-col items-start gap-2 font-ubuntu font-normal text-[.75rem]">
            <Link href="#">Terms and conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start"
          style={{
            backgroundImage: `url(${FooterBackground.src})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '100px',
          }}>
          <h1 className="mb-5 font-ubuntu font-bold text-[1rem] text-start">
            Social Links
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

      <p className="text-center my-10"
        style={{ 
          color: '#1D1D1D', 
          fontSize: '0.75rem', 
          fontStyle: 'normal', 
          fontWeight: '400', 
          lineHeight: '1.25rem'
        }}>
        © Devolved AI 2023. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
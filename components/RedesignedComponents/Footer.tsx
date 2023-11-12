"use client"

import Image from "next/image";
import React from "react";
import FooterLogo from "../../public/logo.svg";
import LocationIcon from "../../public/footer/location-icon.svg"
import FooterBackground from "../../public/footer/background.png"
import Link from "next/link";

import {
  FaFacebook,
  FaTwitter,
  FaDiscord,
  FaReddit,
  FaTelegram,
  FaSearchLocation
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
          height: '300px',
        }}>
          <div className="logo">
            <Link href={"/"}>
              <Image
                src={FooterLogo}
                alt="footer_logo"
                className="md:w-[18.5rem] md:h-[5rem] w-[11.75rem] h-[2rem] md:ms-[-0.5rem]"
                quality={100}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-5 items-center md:items-start mt-5">
            <div className="flex items-center">
              <span className="icon">
                <HiLocationMarker className="w-5 h-5 text-black-500" />
              </span>
              <span className="text" 
              style=
              {{ 
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
          <h1 className="mb-5 font-normal text-[1.5rem]">Quick Links</h1>
          <div className="flex flex-col items-start gap-2">
            <Link href="#">Home</Link>
            <Link href="#">About</Link>
            <Link href="#">$AGC</Link>
            <Link href="#">Technology</Link>
            <Link href="#">Community</Link>
            <Link href="#">Governance</Link>
            <Link href="#">Contact</Link>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="mb-5 font-normal text-[1.5rem]">Utility pages</h1>
          <div className="flex flex-col items-start gap-2">
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
          height: '300px',
        }}>
          <h1 className="mb-5 font-normal text-[1.5rem] text-start">
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

      <p
      className="text-center my-10"
      style={{ color: '#1D1D1D', fontSize: '1rem', fontStyle: 'normal', fontWeight: '400', lineHeight: '1.25rem'}}>
        © Devolved AI 2023. All rights reserved.
      </p>

    </footer>
  );
};

export default Footer;

"use client";

import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../../public/Menu Icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/logo.svg";
import Button from "../Custom Components/Button";
import useScroll from "@/lib/hooks/use-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrolled = useScroll(50);

  useEffect(() => {
    // Function to handle clicks outside the menu
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Attach the event listener when the menu is open
    if (isMenuOpen) {
      window.addEventListener("click", handleClickOutside);
    }

    // Clean up the event listener when the component unmounts or the menu closes
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header>
      <nav>
      <div className={`fixed top-0 w-full flex justify-between xl:justify-center items-center md:px-10 py-1 3xl:container ${
        scrolled
        ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
        : "bg-white/0" } z-30 transition-all`}>
          <Link href={"/redesigned/home"} className="xl:pr-5 2xl:me-auto 2xl:pl-6">
            <Image
              src={Logo}
              alt="Devolved AI Logo"
              quality={100}
              className="w-full"
            />
          </Link>
          <div className="lg:hidden" ref={menuRef}>
            <div
              className="w-10 h-10 flex border items-center justify-center rounded-sm p-1 me-3.5"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}>
              <Image src={MenuIcon} alt="Menu Icon" />
            </div>

            <div
              className={
                isMenuOpen
                  ? "fixed z-50 right-0 top-0 w-[40%] h-full bg-[#FFF] ease-in duration-500"
                  : "fixed z-50 right-[-100%] ease-in duration-500"
              }>
                {/* Mobile menu close icon */}
              <div className="flex items-center md:justify-between justify-start pt-1 px-2">
                <div
                  className="w-10 h-10 flex items-center justify-end rounded-sm p-1"
                  onClick={() => {
                    setIsMenuOpen(!isMenuOpen);
                  }}
                >
                  <AiOutlineClose />
                </div>
              </div>

              {/* Home Menu item */}
              <ul className="uppercase pt-5 min-h-screen flex flex-col gap-5 items-start pl-5">
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="/redesigned/home">
                    Home
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="#">
                    About
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="/redesigned/argoCoin">
                    $AGC
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="/redesigned/technology">
                    Technology
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="#">
                    Community
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="#">
                    Governance
                  </Link>
                </li>
                <li
                  className="relative"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <Link className="ms-[5px]" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile and Above NavBar */}
          <div className="p-3 xl:ms-0 lg:justify-center xl:justify-between items-center xl:gap-10 lg:gap-5 hidden lg:flex text-sm text-[#2D3748]">
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal"
            href="/redesigned/home">
              Home
            </Link>
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal" 
            href="#">
              About
            </Link>
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal" 
            href="/redesigned/argoCoin">
              $AGC
            </Link>
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal" 
            href="/redesigned/technology">
              Technology
            </Link>
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal" 
            href="#">
              Community
            </Link>
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal" 
            href="#">
              Governance
            </Link>
            <Link 
            className="text-[1rem] text-[#1D1D1D] font-ubuntu font-normal font-weight-400 leading-normal lg:pr-6 xl:pr-8" 
            href="#">
              Contact
            </Link>
            <Button
              title="JOIN THE REVOLUTION"
              extraStyles="border border-black text-black font-bold py-2 px-4 rounded-md md:w-[12.5625rem] md:h-[3.125rem] transition-all hover:bg-black hover:text-white"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

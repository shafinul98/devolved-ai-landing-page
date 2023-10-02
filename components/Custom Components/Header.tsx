"use client";

import MenuIcon from "../../public/Menu Icon.svg";

import { AiOutlineClose } from "react-icons/ai";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../public/Devolved AI Logo.svg";
import Link from "next/link";
import Button from "./Button";
import { EarlyAccessForm } from "./EarlyAccessForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav className="shadow-lg">
        <div className="flex justify-between xl:justify-center items-center md:px-10 py-1 3xl:container">
          <Link href={"/"} className="xl:pr-28 2xl:me-auto 2xl:pl-12">
            <Image
              src={Logo}
              alt="Devolved AI Logo"
              quality={100}
              className="w-full"
            />
          </Link>
          <div className="lg:hidden">
            <div
              className="w-10 h-10 flex border items-center justify-center rounded-sm p-1 me-3.5"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Image src={MenuIcon} alt="Menu Icon" />
            </div>

            <div className={!isMenuOpen ? "hidden" : "flex w-full"}>
              <div
                className={
                  isMenuOpen
                    ? "fixed z-50 right-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#FFF] transition ease-in duration-1000"
                    : "fixed transition right-[-100%] ease-out duration-1000"
                }
              >
                <div className="flex items-center md:justify-between justify-center pt-1 px-2">
                  <Link href={"/"} className="xl:pr-28 2xl:me-auto 2xl:pl-12">
                    <Image
                      src={Logo}
                      alt="Devolved AI Logo"
                      quality={100}
                      className="w-full"
                    />
                  </Link>
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-sm p-1"
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <AiOutlineClose />
                  </div>
                </div>

                <ul className="uppercase pt-5 min-h-screen flex flex-col gap-5 items-start pl-5">
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/">
                      Home
                    </Link>
                  </li>
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/about">
                      About
                    </Link>
                  </li>
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/core">
                      Core
                    </Link>
                  </li>
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/community">
                      Community
                    </Link>
                  </li>
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/governance">
                      Governance
                    </Link>
                  </li>
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/rewards">
                      Rewards
                    </Link>
                  </li>
                  <li
                    className="relative"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link className="ms-[5px]" href="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mobile and Above NavBar */}
          <div className="p-3 xl:ms-0 lg:justify-center xl:justify-between items-center xl:gap-10 lg:gap-5 hidden lg:flex text-sm text-[#2D3748]">
            <Link className="text-[1rem]" href="/">
              Home
            </Link>
            <Link className="text-[1rem]" href="/about">
              About
            </Link>
            <Link className="text-[1rem]" href="/core">
              Core
            </Link>
            <Link className="text-[1rem]" href="/community">
              Community
            </Link>
            <Link className="text-[1rem]" href="/governance">
              Governance
            </Link>
            <Link className="text-[1rem]" href="/rewards">
              Rewards
            </Link>
            <Link className="text-[1rem] lg:pr-6 xl:pr-8" href="/contact">
              Contact
            </Link>
            <EarlyAccessForm>
              <Button
                title="Get Early Access"
                extraStyles=" bg-[#FF6F00] text-white font-bold rounded-[0.3125rem] w-full md:w-[8.75rem] md:h-[2.625rem] xl:me-16"
              />
            </EarlyAccessForm>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

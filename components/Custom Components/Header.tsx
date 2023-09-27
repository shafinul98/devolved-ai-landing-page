"use client";

import MenuIcon from "../../public/Menu Icon.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

            <div className={!isMenuOpen ? "hidden" : "flex"}>
              <div
                className="w-10 h-10 flex border items-center justify-center rounded-sm p-1 me-3.5"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                <Image src={MenuIcon} alt="Menu Icon" />
              </div>
              <nav
                id="sidenav-2"
                className="fixed right-0 top-0 z-[1035] h-screen w-80 transition duration-500 -translate-x-full overflow-hidden bg-white shadow-[0_4px_12px_0_rgba(0,0,0,0.07),_0_2px_4px_rgba(0,0,0,0.05)] data-[te-sidenav-hidden='false']:translate-x-0 dark:bg-zinc-800"
                data-te-sidenav-init
                data-te-sidenav-hidden="false"
                data-te-sidenav-mode="side"
                data-te-sidenav-content="#content"
              >
                <div className="flex sm:max-md:my-5 md:my-[1.25rem] items-center justify-center">
                  <Link href={"/"} className="me-10">
                    <Image
                      src={Logo}
                      alt="Devolved AI Logo"
                      quality={100}
                      className="w-3/4"
                    />
                  </Link>
                  <div
                    className="w-10 h-10 flex border items-center justify-center rounded-sm p-1 me-3.5"
                    onClick={() => {
                      setIsMenuOpen(!isMenuOpen);
                    }}
                  >
                    <Image src={MenuIcon} alt="Menu Icon" />
                  </div>
                </div>

                <ul
                  className="relative m-0 list-none px-[1.25rem] py-[1.25rem] flex flex-col gap-5"
                  data-te-sidenav-menu-ref
                >
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
              </nav>
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

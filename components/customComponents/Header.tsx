"use client";

import Image from "next/image";
import Link from "next/link";
import MenuIcon from "../../public/Menu Icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect, useRef, useState } from "react";
import Logo from "../../public/logo.svg";
import useScroll from "@/lib/hooks/use-scroll";
import { useActivePath } from "./UseActivePath";
import { EarlyAccessForm } from "./EarlyAccessForm";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const scrolled = useScroll(50);
  const checkActivePath = useActivePath()

  type NavigationItem = {
    href: string
    name: string
  }
  
  const navigation: NavigationItem[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/argoCoin', name: '$AGC' },
    { href: '/technology', name: 'Technology' },
    { href: '/community', name: 'Community' },
    { href: '#', name: 'Governance' },
    { href: '/contact', name: 'Contact' },
  ]

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
        <div className={`fixed top-0 w-full flex justify-between xl:justify-center items-center md:px-10 py-1 
        ${ scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : scrolled
            ? "border-b border-gray-200 backdrop-blur-xl"
            : "bg-white/0"
        } z-30 transition-all`}>
          <Link href={"/"} className="xl:pr-6 2xl:me-auto 2xl:pl-5">
            <Image
              src={Logo}
              alt="Devolved AI Logo"
              quality={100}
              className="w-40 md:w-60 lg:w-80"
              style={{ width: "11.25rem", height: "1.51444rem" }}
            />
          </Link>

          <div className="lg:hidden" ref={menuRef}>
            <div
              className="w-10 h-10 flex items-center justify-center rounded-sm p-1 me-3.5"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <Image src={MenuIcon} alt="Menu Icon" />
            </div>

            <div
              className={
                isMenuOpen
                  ? "fixed z-50 right-0 top-0 w-[100%] lg:w-[40%] h-full bg-[#FFF] ease-in duration-500"
                  : "fixed z-50 right-[-100%] ease-in duration-500"
              }
            >
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
              <ul className="pt-5 min-h-screen flex flex-col gap-5 items-start pl-5">
                {navigation.map(({ href, name }) => (
                  <li
                    key={name}
                    className="relative ms-[5px]"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    <Link
                      href={href}
                      className={checkActivePath(href) ? "active" : ""}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile and Above NavBar */}
          <div className="p-3 xl:ms-0 lg:justify-center xl:justify-between items-center xl:gap-10 lg:gap-5 hidden lg:flex">
            {navigation.map(({ href, name }) => (
              <div
                key={name}
                className="text-[1rem] text-[#1D1D1D] font-normal font-weight-400 leading-normal relative ms-[5px]"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
              >
                <Link
                  href={href}
                  className={checkActivePath(href) ? "active" : ""}
                >
                  {name}
                </Link>
              </div>
            ))}
            <EarlyAccessForm>
              <button className="text-[1rem] text-[1D1D1D] font-bold font-weight-500 leading-normal border-black border-2 py-2 px-4 rounded-[0.625rem] md:w-[14.5625rem] md:h-[3.125rem] transition-all hover:bg-black hover:text-white">
                JOIN THE REVOLUTION
              </button>
            </EarlyAccessForm>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
"use client";

import MenuIcon from "@/public/Menu Icon.svg";
import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Logo from "@/public/logo.svg";
import Link from "next/link";
import { useActivePath } from "./UseActivePath";
import useScroll from "@/lib/hooks/use-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const checkActivePath = useActivePath();
  const scrolled = useScroll(50);
  const menuRef = useRef<HTMLDivElement>(null);

  type NavigationItem = {
    href: string
    name: string
    target?: string
  }
  
  const navigation: NavigationItem[] = [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/argoCoin', name: 'Argocoin' },
    { href: '/technology', name: 'Technology' },
    { href: '/community', name: 'CommUnity' },
    { href: 'https://spearmint.xyz/p/argonauts', name: 'Argonauts NFT', target: '_blank' },
    { href: '/contact', name: 'Contact' }
  ]

  const handleDiscordButtonClick = () => {
    window.open('https://discord.com/invite/devolvedai', '_blank');
  };

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
      <nav className="shadow-lg">
        <div className={`fixed w-full top-0 xl:right-0 xl:left-0 grid grid-cols-2 justify-between items-center md:px-20 py-5
            ${scrolled ? "border-b bg-white xl:border-gray-200 xl:bg-white/50 xl:backdrop-blur-xl"
              : "xl:bg-white/0"
            } z-30 transition-all`}>

          {/* logo */}
          <div className="col-span-1 flex xl:justify-center md:justify-start justify-end">
            <Link href={"/"} className="m-3 xl:mr-[20rem]">
              <Image
                src={Logo}
                alt="Devolved AI Logo"
                quality={100}
                className="xl:w-full mx-auto"
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="xl:hidden md:flex fixed lg:m-5 md:m-5 m-5 top-0 right-0" ref={menuRef}>

            {/* Mobile menu icon */}
            <div className="w-10 h-10 flex border items-center justify-center rounded-sm p-1 me-3.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Image src={MenuIcon} alt="Menu Icon" />
            </div>

            <div className={isMenuOpen ? "fixed z-50 right-0 top-0 w-[40%] h-full bg-[#FFF] ease-in duration-500" : "fixed z-100 right-[-100%] ease-in duration-500"}>

              {/* Mobile menu close icon */}
              <div className="flex items-center md:justify-between justify-start pt-1 px-2 m-2">
                <div className="w-10 h-10 border flex items-center justify-center rounded-sm p-1 me-3.5" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  <AiOutlineClose />
                </div>
              </div>

              {/* Menu item */}
              <ul className="uppercase text-[1rem] text-[#1D1D1D] font-normal leading-normal pt-5 min-h-screen flex flex-col gap-5 items-start pl-5">
                {navigation.map(({ href, name }) => (
                  <li key={name} className="relative ms-[5px]" onClick={() => setIsMenuOpen(false)}>
                    <Link href={href} className={checkActivePath(href) ? "active" : ""}>
                      {name}
                    </Link>
                  </li>
                ))}
                <button onClick={handleDiscordButtonClick}
                  className="uppercase text-[1rem] text-[#ffffff] font-bold leading-normal p-3 mr-2 bg-[#1D1D1D] border-2 rounded-[0.425rem] w-auto h-auto">
                  join on discord
                </button>
              </ul>
            </div>
          </div>

          {/* Desktop Menu*/}
          <div className="col-span-1 p-3 xl:mr-[25rem] justify-center items-center xl:gap-4 hidden md:hidden lg:hidden xl:flex text-sm text-[#2D3748] min-w-screen">
            {navigation.map(({ href, name, target }) => (
              <div key={name} className="text-[1rem] xl:whitespace-nowrap xl:text-[1rem] text-[#1D1D1D] font-normal leading-normal relative ms-[5px]" onClick={() => setIsMenuOpen(false)}>
                <Link target= {target} href={href} className={checkActivePath(href) ? "active" : ""}>
                  {name}
                </Link>
              </div>
            ))}
            <div className="flex">
                <button onClick={handleDiscordButtonClick}
                className="uppercase text-[1rem] text-[1D1D1D] font-bold leading-normal border-black border-2 rounded-[0.625rem] xl:w-[12.5625rem] xl:h-[3.125rem] transition-all hover:bg-black hover:text-white">
                  join us on discord
                </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

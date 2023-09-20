import MenuIcon from "../../public/Menu Icon.svg";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import React from "react";
import Logo from "../../public/Devolved AI Logo.svg";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  return (
    <header>
      <nav className="shadow-lg">
        <div className="flex justify-between items-center md:px-10 py-1">
          <Link href={"/"} className="xl:ms-16">
            <Image
              src={Logo}
              alt="Devolved AI Logo"
              quality={100}
              className="w-full"
            />
          </Link>
          <div className="lg:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger className="px-5 py-1">
                <div className="w-10 h-10 flex border items-center justify-center rounded-sm p-1">
                  <Image src={MenuIcon} alt="Menu Icon" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/">Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/about">About</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/core">Core</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/community">Community</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/governance">Governance</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/rewards">Rewards</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {" "}
                  <Link href="/contact">Contact</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    title="Launch App"
                    extraStyles=" bg-[#FF6F00] text-white"
                  />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="p-3 xl:ms-0 lg:justify-center xl:justify-between items-center gap-1.5 lg:gap-5 hidden lg:flex text-sm text-[#2D3748]">
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
            <Link className="text-[1rem] lg:pr-6" href="/contact">
              Contact
            </Link>
            <Button
              title="Launch App"
              extraStyles=" bg-[#FF6F00] text-white rounded-[0.3125rem] w-[8.5rem] h-[2.625rem]"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

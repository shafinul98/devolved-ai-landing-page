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
          <Link href={"/"}>
            <Image
              src={Logo}
              alt="Devolved AI Logo"
              className="w-[8rem] h-[1.875rem] md:w-[12rem] lg:w-[14rem] xl:w-[16rem] ms-[0.75rem] md:ms-[1.25rem] lg:ms-[5.75rem] xl:ms-[6.5rem] 2xl:ms-[5rem]"
              quality={100}
            />
          </Link>
          <div className="md:hidden">
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
          <div className="p-3 md:ms-20 xl:ms-0 justify-between items-center gap-10 hidden md:flex text-sm text-[#2D3748]">
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
            <Link className="text-[1rem] pr-12" href="/contact">
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

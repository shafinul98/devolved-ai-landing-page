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
    <nav className="shadow-lg min-w-max">
      <div className="flex justify-between items-center md:px-10 py-1 md:justify-around">
        <Link href={"/"}>
          <Image src={Logo} alt="Devolved AI Logo" loading="lazy" width={150} />
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
                <Link href="/technology">Technology</Link>
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
        <div className="p-3 justify-between items-center gap-10 hidden md:flex">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/technology">Technology</Link>
          <Link href="/community">Community</Link>
          <Link href="/governance">Governance</Link>
          <Link href="/rewards">Rewards</Link>
          <Link href="/contact">Contact</Link>
          <Button title="Launch App" extraStyles=" bg-[#FF6F00] text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Header;

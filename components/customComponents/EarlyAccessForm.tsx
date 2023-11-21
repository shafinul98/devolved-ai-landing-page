"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

import DevolvedAIHeroLogo from "../../public/logo.svg";
import GetReferral from "./GetReferral";

export function EarlyAccessForm({
  children,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) {

  return (
    <>
      <Dialog>
        <DialogTrigger className="w-full md:w-fit">{children}</DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <Image
              src={DevolvedAIHeroLogo}
              alt="Devolved AI Logo"
              width={125}
              className="mx-auto my-8"
            />
            <DialogTitle className="text-center text-[1.25rem] leading-6 text-[#2D3748]">
              <GetReferral/>
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

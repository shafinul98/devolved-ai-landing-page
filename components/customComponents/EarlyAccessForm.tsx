"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";

import Image from "next/image";

import { useEffect, useState } from "react";

import DevolvedAIHeroLogo from "../../public/logo.svg";

import { Button } from "../ui/button";
import { Alert } from "../ui/alert";
import GetReferral from "./GetReferral/ViralLoopsForm";

export function EarlyAccessForm({
  children,
  extraStyles,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) {
  const [email, setEmail] = useState("");

  const [isEmailValid, setIsEmailValid] = useState(true);

  const [isError, setIsError] = useState(false);

  const [error, setError] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (input: any) => {
    const isValid = /\S+@\S+\.\S+/.test(input);
    setIsEmailValid(isValid);
  };

  const [isSignedUp, setIsSignedUp] = useState(false);

  const submitHandler = async () => {
    setIsLoading(true);
    const res = await fetch("/api/emailOctopus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "PENDING",
      }),
    });

    const { error, status } = await res.json();

    if (status === 200) {
      setIsSignedUp(true);
      window.location.href = `/earlyAccessSuccess?isSignedUp=true`;
    }

    if (status === 400) {
      setError(error?.message);
      setIsError(true);
    }
  };

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
              <GetReferral />
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}

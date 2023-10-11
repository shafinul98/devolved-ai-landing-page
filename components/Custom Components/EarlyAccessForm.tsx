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

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import Image from "next/image";

import { useState } from "react";

import DevolvedAIHeroLogo from "../../public/Devolved AI Hero Logo.svg";

import { Button } from "../ui/button";
import { Alert } from "../ui/alert";

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

  const validateEmail = (input: any) => {
    const isValid = /\S+@\S+\.\S+/.test(input);
    setIsEmailValid(isValid);
  };

  const [isSignedUp, setIsSignedUp] = useState(false);

  const router = useRouter();

  const submitHandler = async () => {
    const res = await fetch("/api/emailOctopus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "SUBSCRIBED",
      }),
    });

    const { error, status } = await res.json();

    if (status === 200) {
      setIsSignedUp(true);
      window.open(`/earlyAccessSuccess?isSignedUp=${true}`, "_blank");
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
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <Image
              src={DevolvedAIHeroLogo}
              alt="Devolved AI Logo"
              width={125}
              className="mx-auto my-8"
            />
            <DialogTitle className="text-center text-[1.25rem] leading-6 text-[#2D3748]">
              Be the First to Experience the Future of Decentralized AI!
            </DialogTitle>
            <DialogDescription className="text-start text-[1rem] my-2 text-[#646E73]">
              Devolved AI is redefining the AI landscape with community-driven
              development and governance. Sign up now for exclusive early access
              to our web app, launching on December 5, 2023!
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-1 items-center gap-4">
              <Input
                placeholder="Enter your email"
                type="email"
                className="col-span-3 focus:outline-none"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
                onFocus={() => blur}
                tabIndex={-1}
                style={{ fontSize: "16px" }}
              />
            </div>
          </div>
          <DialogFooter>
            {isError ? (
              <Alert className="mx-auto bg-[#ff3737] font-bold text-sm text-white">
                Error in Signing Up: {error}
              </Alert>
            ) : (
              <Button
                onClick={submitHandler}
                disabled={email === "" || !isEmailValid}
                className="mx-auto bg-[#377DFF] font-bold text-white"
              >
                Get Early Access
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

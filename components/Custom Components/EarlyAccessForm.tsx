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

import { useState } from "react";

import DevolvedAIHeroLogo from "../../public/Devolved AI Hero Logo.svg";

import { Button } from "../ui/button";

export function EarlyAccessForm({
  children,
  extraStyles,
}: {
  children: React.ReactNode;
  extraStyles?: string;
}) {
  const [email, setEmail] = useState("");

  const [isSignedUp, setIsSignedUp] = useState(false);

  const submitHandler = async () => {
    try {
      const res = await fetch("/api/mailchimp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      });

      if (res.status === 200) {
        setIsSignedUp(true);
      }
    } catch (error) {
      setIsSignedUp(false);
    }
  };

  return (
    <>
      {isSignedUp ? (
        <Dialog>
          <DialogTrigger className={`w-full md:w-fit`}>
            {children}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <Image
                src={DevolvedAIHeroLogo}
                alt="Devolved AI Logo"
                width={125}
                className="mx-auto my-8"
              />
              <DialogTitle className="text-center text-[1.25rem] leading-6 text-[#2D3748]">
                Almost There!
              </DialogTitle>
              <DialogDescription className="text-start text-[1rem] my-2 text-[#646E73]">
                Thanks for signing up for early access! Please check your email
                to confirm your subscription. If you don't see the email, be
                sure to check your spam folder.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : (
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
                development and governance. Sign up now for exclusive early
                access to our web app, launching on December 5, 2023!
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-1 items-center gap-4">
                <Input
                  placeholder="Enter your email"
                  type="email"
                  className="col-span-3 focus:outline-none"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => blur()}
                  style={{ fontSize: "16px" }}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                onClick={submitHandler}
                disabled={email === ""}
                className="mx-auto bg-[#377DFF] font-bold text-white"
              >
                Get Early Access
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

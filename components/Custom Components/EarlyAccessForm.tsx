"use client";

import { Button } from "@/components/ui/button";
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

export function EarlyAccessForm({ children }: { children: React.ReactNode }) {
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
          status: "pending",
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
          <DialogTrigger className="w-full md:w-fit">{children}</DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <Image
                src={DevolvedAIHeroLogo}
                alt="Devolved AI Logo"
                width={100}
                className="mx-auto my-8"
              />
              <DialogTitle className="text-center text-[1.25rem] leading-6 text-[#2D3748]">
                Almost There!
              </DialogTitle>
              <DialogDescription className="text-start text-[1rem] my-2 text-[#646E73]">
                Thank you for signing up for early access to Devolved AI's web
                app! We're excited to have you join our community. To complete
                your registration and confirm your early access spot, please
                check your email and click the link we've sent you. Don't see
                the email? Be sure to check your spam folder.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      ) : (
        <Dialog>
          <DialogTrigger className="sm:max-md:w-full sm:max-md:flex sm:max-md:justify-center">
            {children}
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <Image
                src={DevolvedAIHeroLogo}
                alt="Devolved AI Logo"
                width={100}
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
                  className="col-span-3"
                  required
                  onChange={(e) => setEmail(e.target.value)}
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

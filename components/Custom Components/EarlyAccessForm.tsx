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

import axios from "axios";

import Image from "next/image";

import { useState } from "react";

import DevolvedAIHeroLogo from "../../public/Devolved AI Hero Logo.svg";

export function EarlyAccessForm({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState("");

  const [isSignedUp, setIsSignedUp] = useState(false);

  const submitHandler = async () => {
    try {
      const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
      const API_KEY = process.env.MAILCHIMP_API_KEY;
      const DATA_CENTER = process.env.MAILCHIMP_API_SERVER;
      const data = {
        email_address: email,
        status: "pending",
      };

      const config = {
        headers: {
          Authorization: `apiKey ${API_KEY}`,
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(
        `https://${DATA_CENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        data,
        config
      );

      // const response = await fetch(
      //   `https://us21.api.mailchimp.com/3.0/lists/5e6935d43c/members`,
      //   {
      //     body: JSON.stringify(data),
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     method: "POST",

      //     mode: "no-cors",
      //   }
      // );

      if (response.status === 201) {
        setEmail("");
        setIsSignedUp(true);
      }
    } catch (error) {
      setEmail("");
      setIsSignedUp(false);
    }
  };

  return (
    <>
      {isSignedUp ? (
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

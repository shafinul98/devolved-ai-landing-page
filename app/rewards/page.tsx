"use client";

import React, { useEffect } from "react";

import RewardsPageHeroImage from "../../public/Rewards Page Hero Image.webp";
import AGCIllustration from "../../public/AGC Distribution Illustration.webp";

import RewardsIllustration from "../../public/Rewards Illustration.svg";
import TransparencyReportIllustration from "../../public/Transparency Report Illustration.svg";

import OneIcon from "../../public/One Icon.svg";
import TwoIcon from "../../public/Two Icon.svg";
import ThreeIcon from "../../public/Three Icon.svg";
import RightArrowIconBlue from "../../public/Right Arrow Blue.svg";
import CheckIconYellow from "../../public/Check Icon Yellow.svg";

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Custom Components/Button";

const RewardsPage = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable text selection
    document.body.style.userSelect = "none";

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            REWARDS
          </h1>
          <Image
            src={RewardsPageHeroImage}
            alt="Hero Image"
            className="w-full md:h-[25rem]"
          />
        </div>
      </section>

      <section className="w-full my-10 md:mt-20 md:mb-0 items-center">
        <div className="flex flex-col items-center md:flex-row justify-between md:mx-16">
          <div className="flex flex-col px-6 md:mt-20 gap-5 md:w-[28.25rem]">
            <h1 className="text-base text-[#0074D9]">REWARD SYSTEM OVERVIEW</h1>
            <h1 className="text-[2rem] font-bold text-[#2D3748]">
              PoV Protocol
            </h1>
            <p className="text-[1.25rem] text-[#646E73]">
              Three products that can be used independently or combined together
              for your company's needs. Don't listen to what they say go and
              see. Join the biggest community of people.
            </p>
          </div>
          <Image
            src={RewardsIllustration}
            alt="Rewards Illustration"
            className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[36.3125rem] md:h-[24.25rem]"
          />
        </div>

        <div className="flex flex-col-reverse items-center md:flex-row justify-between md:mx-16">
          <Image
            src={AGCIllustration}
            alt="ArgoCoin Distribution Illustration"
            className="mt-5 md:mt-0 w-[22.9375rem] h-[16.375rem] md:w-[36.3125rem] md:h-[24.25rem]"
          />
          <div className="flex flex-col px-5 md:mt-20 gap-5 md:w-[35.1875rem]">
            <h1 className="text-[2rem] text-[#2D3748] font-bold">
              AGC Distribution
            </h1>
            <p className="text-[1.25rem] text-[#646E73]">
              Three products that can be used independently or combined together
              for your company's needs. Don't listen to what they say go and
              see. Join the biggest community of people.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-5 my-10 md:my-0 bg-[#f5f5f5] py-16 md:px-20 md:pb-20 md:pt-4">
        <div className="flex flex-col">
          <div className="flex flex-col px-5 md:mt-20 gap-4 text-center">
            <h6 className="text-[1rem] text-[#0074D9]">How to Earn Rewards </h6>
            <h1 className="text-[2rem] font-bold text-[#2D3748]">
              Participation Guide
            </h1>
            <p className="text-[#646E73] text-[1.25rem] md:mx-[10.5rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-10">
          <div className="flex flex-col px-10 gap-3">
            <Image src={OneIcon} alt="One Icon" />
            <h1 className="text-xl font-bold text-[#2D3748]">
              Community at the core
            </h1>
            <p className="text-[#646E73] text-sm">
              Our mission is fueled by community collaboration. Using democratic
              principles and blockchain, we're creating a transparent,
              accessible AI legacy.
            </p>
            <div className="flex gap-1 justify-start items-center">
              <p className="text-[#0074D9] text-sm">Learn more</p>
              <Image
                src={RightArrowIconBlue}
                alt="Right Arrow Icon"
                width={25}
              />
            </div>
          </div>

          <div className="flex flex-col px-10 gap-3">
            <Image src={TwoIcon} alt="One Icon" />
            <h1 className="text-xl font-bold text-[#2D3748]">
              Rewarding Contributions
            </h1>
            <p className="text-[#646E73] text-sm">
              Your efforts in AI training and data validation are central to our
              success. Receive Argocoin (AGC) rewards, and let your voice be a
              driving force in AI's future.{" "}
            </p>
            <div className="flex gap-1 justify-start items-center">
              <p className="text-[#0074D9] text-sm">Learn more</p>
              <Image
                src={RightArrowIconBlue}
                alt="Right Arrow Icon"
                width={25}
              />
            </div>
          </div>

          <div className="flex flex-col px-10 gap-3">
            <Image src={ThreeIcon} alt="One Icon" />
            <h1 className="text-xl font-bold text-[#2D3748]">
              A Nexus for Visionaries
            </h1>
            <p className="text-[#646E73] text-sm">
              We are more than a platform; we unite innovators for an AI future
              crafted by the people. Align with us, endorse accessibility, and
              democratize AI's landscape
            </p>
            <div className="flex gap-1 justify-start items-center">
              <p className="text-[#0074D9] text-sm">Learn more</p>
              <Image
                src={RightArrowIconBlue}
                alt="Right Arrow Icon"
                width={25}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full my-10">
        <div className="flex flex-col md:flex-row md:justify-center text-center md:text-start items-center gap-28">
          <Image
            src={TransparencyReportIllustration}
            alt=""
            className="md:w-[31.25rem] md:h-[31.25rem]"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-bold text-[#2D3748] mb-3 px-10">
              Transparency Report
            </h1>
            <p className="text-[#646E73] text-sm pl-10 pr-32 mb-3">
              Send one-off and automated email, push, and in-app messages to
              people. Create better stories.
            </p>
            <div className="flex flex-col items-start px-10 gap-3">
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-xs font-normal">
                  Lifetime Updates & Introduction and Working
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-xs font-normal">
                  Tech support & Mutual Funds
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-xs font-normal">
                  Tons of assets & Lifetime Updates
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-xs font-normal">
                  Integration ready & Tech support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center mx-5 mt-[5rem] mb-10">
          <article className="w-[21.375rem] h-[15.0625rem] lg:w-[27.375rem] flex flex-col my-5 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5] transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110">
            <h1 className="text-[1.25rem] text-[#2D3748] font-normal text-start my-4">
              High quality
            </h1>
            <p className="text-[#646E73] text-[1rem] text-start mb-4">
              We will always give you the opportunity to get acquainted with the
              instrument closer.
            </p>
            <Link
              href={"#"}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#377DFF] text-end mt-12"
            >
              Download Report
            </Link>
          </article>
          <article className="w-[21.375rem] h-[15.0625rem] lg:w-[27.375rem] flex flex-col my-5 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5] transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110">
            <h1 className="text-[1.25rem] text-[#2D3748] font-normal text-start my-4">
              Musical instruments{" "}
            </h1>
            <p className="text-[#646E73] text-[1rem] text-start mb-4">
              Our employees are always ready to come to your aid in choosing
              musical instruments, be it a string, keyboard, percussion or any
              other instrument.
            </p>
            <Link
              href={"#"}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#377DFF] text-end"
            >
              Download Report
            </Link>
          </article>
          <article className="w-[21.375rem] h-[15.0625rem] lg:w-[27.375rem] flex flex-col my-5 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5] transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110">
            <h1 className="text-[1.25rem] text-[#2D3748] font-normal text-start my-4">
              Free assistance
            </h1>
            <p className="text-[#646E73] text-[1rem] text-start mb-4">
              You will always get professional advice on the selection of
              musical instruments, equipment and accessories.
            </p>
            <Link
              href={"#"}
              rel="noopener noreferrer"
              target="_blank"
              className="text-[#377DFF] text-end mt-6"
            >
              Download Report
            </Link>
          </article>
        </div>

        <div className="flex items-center justify-center mb-[3rem]">
          <Button
            title="View All Reports"
            extraStyles=" bg-[#0074D9] text-white px-10 md:w-[11.375rem] md:h-[2.625rem]"
          />
        </div>
      </section>
    </main>
  );
};

export default RewardsPage;

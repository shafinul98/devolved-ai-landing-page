import React from "react";

import RewardsPageHeroImage from "../../public/Rewards Page Hero Image.svg";
import RewardsIllustration from "../../public/Rewards Illustration.svg";
import AGCIllustration from "../../public/AGC Distribution Illustration.svg";
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
            className="w-full"
          />
        </div>
      </section>
      <section className="w-full my-10 md:my-16 md:px-10 items-center">
        <div className="flex flex-col md:flex-row justify-center px-5 gap-5">
          <div className="flex flex-col px-5 md:mt-20 gap-5">
            <h1 className="text-base text-[#0074D9]">REWARD SYSTEM OVERVIEW</h1>
            <h1 className="text-3xl font-bold">PoV Protocol</h1>
            <p>
              Three products that can be used independently or combined together
              for your company’s needs. Don't listen to what they say go and
              see. Join the biggest community of people.
            </p>
          </div>
          <Image src={RewardsIllustration} alt="" />
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center px-5 gap-5">
          <Image src={AGCIllustration} alt="" />
          <div className="flex flex-col px-5 md:mt-20 gap-5">
            <h1 className="text-3xl font-bold">AGC Distribution</h1>
            <p>
              Three products that can be used independently or combined together
              for your company’s needs. Don't listen to what they say go and
              see. Join the biggest community of people.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-5 my-10 md:my-5 bg-[#f5f5f5] py-16 md:px-20 md:pb-20 md:pt-4">
        <div className="flex flex-col">
          <div className="flex flex-col px-5 md:mt-20 gap-4 text-center">
            <h1 className="text-sm  text-[#0074D9]">How to Earn Rewards </h1>
            <h1 className="text-3xl font-bold text-[#2D3748]">
              Participation Guide
            </h1>
            <p className="text-[#646E73]">
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
        <div className="flex flex-col md:flex-row  md:justify-center text-center md:text-start items-center gap-3">
          <Image
            src={TransparencyReportIllustration}
            alt=""
            className="px-10"
          />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-[#2D3748] mb-3 px-10">
              Transparency Report
            </h1>
            <p className="text-[#646E73] text-sm px-10 mb-3">
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

        <div className="flex flex-col md:flex-row items-center mx-5 my-3">
          <article className="w-full flex flex-col my-5 md:p-12 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5]">
            <h1 className="text-lg font-semibold text-start my-2">
              High quality
            </h1>
            <p className="text-gray-600 text-sm text-start mb-4">
              We will always give you the opportunity to get acquainted with the
              instrument closer.
            </p>
            <Link
              href={""}
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 text-end"
            >
              Download Report
            </Link>
          </article>
          <article className="w-full flex flex-col my-5 md:p-10 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5]">
            <h1 className="text-lg font-semibold text-start my-2">
              Musical instruments{" "}
            </h1>
            <p className="text-gray-600 text-sm text-start mb-4">
              Our employees are always ready to come to your aid in choosing
              musical instruments, be it a string, keyboard, percussion or any
              other instrument.
            </p>
            <Link
              href={""}
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 text-end"
            >
              Download Report
            </Link>
          </article>
          <article className="w-full flex flex-col my-5 md:p-10 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5]">
            <h1 className="text-lg font-semibold text-start my-2">
              Free assistance
            </h1>
            <p className="text-gray-600 text-sm text-start mb-4">
              You will always get professional advice on the selection of
              musical instruments, equipment and accessories.
            </p>
            <Link
              href={""}
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-500 text-end"
            >
              Download Report
            </Link>
          </article>
        </div>

        <div className="flex items-center justify-center">
          <Button
            title="View All Reports"
            extraStyles=" bg-[#0074D9] text-white px-10"
          />
        </div>
      </section>
    </main>
  );
};

export default RewardsPage;

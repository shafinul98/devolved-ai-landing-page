"use client";

import React, { useEffect } from "react";

import RewardsPageHeroImage from "../../public/Rewards Page Hero Image.webp";
import AGCIllustration from "../../public/AGC Distribution Illustration.webp";

import RewardsIllustration from "../../public/Rewards Illustration.svg";
import TransparencyReportIllustration from "../../public/Transparency Report Illustration.svg";

import OneIcon from "../../public/One Icon.svg";
import TwoIcon from "../../public/Two Icon.svg";
import ThreeIcon from "../../public/Three Icon.svg";
import CheckIconYellow from "../../public/Check Icon Yellow.svg";

import Image from "next/image";
import Link from "next/link";

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
            className="w-full md:h-[30rem] object-cover"
          />
        </div>
      </section>

      <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
        <div className="flex flex-col items-center lg:flex-row justify-around xl:px-8 md:mx-16 lg:max-xl:mx-10 ">
          <div className="flex flex-col px-6 md:mt-20 gap-5 lg:max-xl:gap-10 lg:max-xl:mx-0 lg:ms-[0.5rem] xl:me-14 3xl:container">
            <h1 className="text-base text-[#0074D9]">REWARD SYSTEM OVERVIEW</h1>
            <h1 className="text-[2rem] font-bold text-[#2D3748]">
              PoV Protocol
            </h1>
            <p className="sm:max-md:text-[1rem] text-[#646E73]">
              Our Proof of Value (PoV) Protocol is a revolutionary system
              designed to reward community members for their valuable
              contributions to the Devolved AI ecosystem. Unlike traditional
              reward systems, the PoV Protocol quantifies the value of various
              types of contributions-be it data validation, AI training or
              governance participation-and allocates ArgoCoin (AGC) rewards
              accordingly. This ensures a fair, transparent, and incentivized
              environment where every action you take has a direct impact on the
              development and governance of our decentralized AI platform.
            </p>
          </div>
          <Image
            src={RewardsIllustration}
            alt="Rewards Illustration"
            className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
          />
        </div>

        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20">
          <Image
            src={AGCIllustration}
            alt="ArgoCoin Distribution Illustration"
            className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
          />
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
            <h1 className="text-[2rem] text-[#2D3748] font-bold">
              AGC Distribution
            </h1>
            <p className="text-[1rem] text-[#646E73]">
              The Argocoin (AGC) Distribution mechanism is a carefully designed
              system that allocates AGC tokens to community members based on
              their level of engagement and contribution to the Devolved AI
              ecosystem. Governed by our PoV Protocol, AGC Distribution is not
              just a reward but a testament to your stake and influence within
              the community. Whether you're contributing to AI training,
              participating in governance decisions, or validating data, AGC
              Distribution ensures that your efforts are quantified and rewarded
              appropriately. This transparent allocation process fortifies the
              democratic ethos of Devolved AI, empowering you to be an active
              participant in shaping the future of decentralized AI.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col gap-5 my-10 md:my-0 bg-[#f5f5f5] py-16 md:px-20 md:pb-20 md:pt-4">
        <div className="flex flex-col">
          <div className="flex flex-col px-5 md:mt-20 gap-4 text-center 3xl:container">
            <h6 className="text-[1rem] text-[#0074D9]">HOW TO EARN REWARDS </h6>
            <h1 className="text-[2rem] font-bold text-[#2D3748]">
              Participation Guide
            </h1>
            <p className="text-[#646E73] text-[1rem] md:mx-5 lg:mx-10 3xl:px-20">
              Our rewards system is designed to be straightforward and
              inclusive, allowing community members to earn Argocoin (AGC)
              through various avenues. Whether you're a developer, data
              scientist, or simply an AI enthusiast, there are multiple ways for
              you to contribute and earn rewards
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-10 3xl:container 3xl:px-24">
          <div className="flex flex-col px-10 gap-3 md:px-10 lg:px-16 xl:px-20">
            <Image src={OneIcon} alt="One Icon" />
            <h1 className="text-xl font-bold text-[#2D3748]">
              Data Validation
            </h1>
            <p className="text-[#646E73] text-[1rem]">
              Contribute to the accuracy and reliability of our AI models by
              participating in data validation tasks. Your efforts are rewarded
              with AGC Tokens.
            </p>
          </div>

          <div className="flex flex-col px-10 gap-3">
            <Image src={TwoIcon} alt="One Icon" />
            <h1 className="text-xl font-bold text-[#2D3748]">
              Governance Participation
            </h1>
            <p className="text-[#646E73] text-[1rem]">
              Engage in our decentralized governance model by voting on
              proposals and submitting your own. Earn AGC tokens for your active
              participation in shaping Devolved AI.
            </p>
          </div>

          <div className="flex flex-col px-10 gap-3">
            <Image src={ThreeIcon} alt="One Icon" />
            <h1 className="text-xl font-bold text-[#2D3748]">AI Training</h1>
            <p className="text-[#646E73] text-[1rem]">
              Help train our AI models by providing valuable data or
              computational resources. Earn AGC tokens based on the quality and
              quantity of your contributions.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full my-10">
        <div className="flex flex-col md:flex-row md:justify-center text-center md:text-start items-center md:gap-10 lg:gap-14 xl:gap-16">
          <Image
            src={TransparencyReportIllustration}
            alt=""
            className="lg:ms-[10rem] md:w-[15rem] md:h-[15rem] xl:w-[31.25rem] xl:h-[31.25rem]"
          />
          <div className="flex flex-col gap-6">
            <h1 className="text-[2rem] font-bold text-[#2D3748] mb-3 md:px-12 lg:px-10">
              Maximizing Your Rewards with Devolved AI
            </h1>
            <p className="text-[#646E73] text-center md:text-start text-[1rem] md:pl-10 md:pr-32 mb-3">
              Discover the various ways you can maximize your AGC earnings and
              make impactful contributions to the Devolved AI ecosystem.
            </p>
            <div className="flex flex-col items-start px-10 gap-3">
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-[1rem] font-normal text-start">
                  Lifetime Updates & Introduction and Working
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-[1rem] font-normal text-start">
                  Tech support & Mutual Funds
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-[1rem] font-normal text-start">
                  Tons of assets & Lifetime Updates
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconYellow} alt="Blue tick" />
                <p className="text-[#2D3748] text-[1rem] font-normal text-start">
                  Integration ready & Tech support
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:justify-center mx-5 md:mx-18 mt-[5rem] mb-10">
          <article className="w-full xl:w-[25rem] xl:h-[15rem] lg:w-[15rem] lg:h-[20rem] md:w-[12rem] md:h-[30rem] flex flex-col my-5 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5]">
            <h1 className="text-[1.25rem] text-[#2D3748] font-normal text-start my-4">
              Reward Tiers
            </h1>
            <p className="text-[#646E73] text-[1rem] text-start mb-4 md:max-lg:mb-12">
              Different levels of contributions come with varying tiers of
              rewards, allowing you to earn more as you contribute more.
            </p>
          </article>
          <article className="w-full xl:w-[25rem] xl:h-[15rem] lg:w-[15rem] lg:h-[20rem] md:w-[12rem] md:h-[30rem] flex flex-col my-5 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5]">
            <h1 className="text-[1.25rem] text-[#2D3748] font-normal text-start my-4 lg:my-1.5">
              Redeemable Benefits
            </h1>
            <p className="text-[#646E73] text-[1rem] text-start mb-4 md:max-lg:mb-0">
              Your earned AGC can not only be used for various benefits within
              the Devolved AI ecosystem but can also be redeemed for USDT, ETH
              and BNB on their respective blockchains via a wrapped AGC.
            </p>
          </article>
          <article className="w-full xl:w-[25rem] xl:h-[15rem] lg:w-[15rem] lg:h-[20rem] md:w-[12rem] md:h-[30rem] flex flex-col my-5 p-5 mx-5 shadow-lg rounded-lg bg-[#f5f5f5]">
            <h1 className="text-[1.25rem] text-[#2D3748] font-normal text-start my-4">
              Long-Term Incentives
            </h1>
            <p className="text-[#646E73] text-[1rem] text-start mb-4 md:max-lg:mb-0">
              Consistent contributions are recognized and rewarded with
              long-term incentives, ensuring sustained community engagement.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
};

export default RewardsPage;

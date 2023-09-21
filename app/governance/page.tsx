"use client";

import React, { useEffect } from "react";

import GovernanceHeroImage from "../../public/Governance Page Hero Image.webp";
import GovernanceStructureImage from "../../public/Governance Structure Image.webp";
import GovernanceHeroIllustration from "../../public/Voting Illustration.svg";

import CheckIconYellow from "../../public/Check Icon Yellow.svg";
import MouseClickIcon from "../../public/Mouse Click Icon.svg";
import StackedCards from "../../public/Stacked Cards Icon.svg";
import CodeIcon from "../../public/Code Icon.svg";
import ProposalIcon from "../../public/Proposal Icon.svg";

import Image from "next/image";
import ProposalCard from "@/components/Custom Components/ProposalCard";

const GovernancePage = () => {
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
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            GOVERNANCE
          </h1>
          <Image
            src={GovernanceHeroImage}
            alt="Hero Image"
            className="w-full md:h-[30rem] object-cover object-top"
          />
        </div>
      </section>

      <section className="flex w-full min-h-screen justify-center items-center p-8 lg:hidden">
        <div className="flex flex-col gap-x-32">
          <div className="flex-col space-y-8 md:space-y-4">
            <h1 className="font-bold text-[1.5625rem] text-center">
              Governance Structure
            </h1>
            <Image
              src={GovernanceStructureImage}
              alt="Governance Structure"
              className="mx-auto"
            />
            <p className="w-full text-[1rem] text-[#646E73]">
              At Devolved AI, we believe in a decentralized governance model
              that empowers our community. Our token-weighted voting system
              ensures that every voice is heard, and every decision is
              transparent
            </p>

            <div className="flex flex-wrap justify-center gap-5">
              <div className="flex my-2 w-full">
                <div className="flex items-center justify-center space-x-2 md:max-lg:me-40 me-10 md:max-lg:ms-20">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Decentralized Authority
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Token-Weighted Voting
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full">
                <div className="flex items-center space-x-2 md:max-lg:me-40 sm:max-md:me-20 me-[6rem] md:max-lg:ms-20">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Transparency
                  </p>
                </div>
                <div className="flex items-center space-x-2 md:max-lg:ms-20">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Community-Driven
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full">
                <div className="flex items-center space-x-2 md:max-lg:me-40 me-10 md:max-lg:ms-20">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Inclusive Decision-Making
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-[0.5rem]">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Rewarding Engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full justify-center items-center px-16 xl:px-32 hidden lg:flex pb-20 bg-[#F5F5F5]">
        <div className="flex flex-row gap-16">
          <Image
            src={GovernanceStructureImage}
            alt="Governance Structure"
            width={1000}
            className="mt-16"
          />
          <div className="flex-col py-16 lg:mt-20 ms-8 space-y-8 text-start">
            <h1 className="font-bold text-[2rem]">Governance Structure</h1>
            <p className=" text-[#646E73] text-[1.25rem] pr-[6.5rem]">
              At Devolved AI, we believe in a decentralized governance model
              that empowers our community. Our token-weighted voting system
              ensures that every voice is heard, and every decision is
              transparent
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-0 justify-start">
              <div className="flex my-2 w-full justify-start gap-24">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Decentralized Authority
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Token-Weighted Voting
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-40 lg:gap-[10.05rem]">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Transparency
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Community-Driven
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-[5.25rem]">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Inclusive Decision-Making
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Rewarding Engagement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen p-8 lg:hidden bg-[#f5f5f5] pb-10 mb-10">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div className="flex flex-col">
            <span className="text-[#0074D9] text-[1rem]">VOTING PROCESS:</span>
            <h1 className="font-bold text-3xl inline">
              Empowering Community Through Decisions
            </h1>
            <p className="mt-5 text-[1rem] text-[#646E73]">
              Our voting process is designed to be simple, transparent, and
              inclusive, ensuring that every community member can participate in
              shaping Devolved AI's future.
            </p>
          </div>
          <div>
            <Image
              src={GovernanceHeroIllustration}
              alt="Governance Illustration"
            />
          </div>

          <div className="mt-10 flex flex-col gap-10 border-t-2 md:border-0 py-10 rounded-sm">
            <div className="flex flex-col items-start gap-[0.625rem] md:gap-5">
              <Image src={MouseClickIcon} alt="Mouse Click Icon" />
              <h1 className="text-[1rem] font-normal text-[#2D3748]">
                Open Proposals
              </h1>
              <p className="text-sm  text-[#646E73]">
                Any community member has the opportunity to submit governance
                proposals, encouraging a diverse range of ideas and solutions.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Image src={StackedCards} alt="" />
              <h1 className="text-[1rem] font-normal text-[#2D3748]">
                Democratic Voting
              </h1>
              <p className="text-sm  font-light text-[#646E73]">
                Stakeholders can use their Argocoin (AGC) holdings to cast
                weighted votes, ensuring a fair and democratic decision-making
                process.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Image src={CodeIcon} alt="" />
              <h1 className="text-[1rem] font-normal text-[#2D3748]">
                Public Outcomes
              </h1>
              <p className="text-sm  font-light text-[#646E73]">
                The results of each voting cycle are publicly recorded on the
                blockchain, providing complete transparency and accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full hidden lg:flex items-center gap-5 bg-[#f5f5f5] pb-[7rem] mb-[4.5rem]"
        id="curved-rectangle"
      >
        <div className="flex flex-col gap-y-8 px-10 xl:px-28">
          <div className="flex flex-col ">
            <span className="text-[#0074D9] text-[1rem]">VOTING PROCESS:</span>
            <h1 className="font-bold text-[2rem] inline">
              Empowering Community Through Decisions
            </h1>
            <p className="mt-5 text-xl text-[#646E73]">
              Our voting process is designed to be simple, transparent, and
              inclusive, ensuring that every community member can participate in
              shaping Devolved AI's future.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-sm mt-8">
            <div className="flex items-center md:items-start gap-5">
              <Image src={MouseClickIcon} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-[#2D3748]">
                  Open Proposals
                </h1>
                <p className="text-sm text-[#646E73]">
                  Any community member has the opportunity to submit governance
                  proposals, encouraging a diverse range of ideas and solutions.
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-start gap-5">
              <Image src={StackedCards} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-[#2D3748]">
                  Democratic Voting
                </h1>
                <p className="text-sm text-[#646E73]">
                  Stakeholders can use their Argocoin (AGC) holdings to cast
                  weighted votes, ensuring a fair and democratic decision-making
                  process.
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-start gap-5">
              <Image src={CodeIcon} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-[#2D3748]">
                  Public Outcomes{" "}
                </h1>
                <p className="text-sm text-[#646E73]">
                  The results of each voting cycle are publicly recorded on the
                  blockchain, providing complete transparency and
                  accountability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={GovernanceHeroIllustration}
            alt="Decentralized AI Governance"
            width={700}
            className="px-5 xl:pr-24 xl:me-24"
          />
        </div>
      </section>

      <section className="w-full mt-8 md:mt-16 mb-20 flex justify-center">
        <div className="flex flex-col items-center justify-center px-10 gap-5 md:gap-4 md:w-[54.0625rem]">
          <span className="text-[#0074D9] text-center text-[1rem]">
            SUCCESSFUL COMMUNITY PROPOSALS
          </span>
          <h1 className="font-bold text-[1.5625rem] md:text-[2rem] md:px-20 text-center">
            Recently Passed Governance Proposals Shaping the Future of Devolved
            AI
          </h1>
          <p className="mt-5 text-base text-[#646E73] text-center md:px-10 px-3">
            Below are some of the key proposals that have successfully navigated
            our democratic voting process. These initiatives reflect the
            collective will our of our community and are instrumental in shaping
            the future of Devolved AI.
          </p>
        </div>
      </section>

      <section className="w-full md:mt-10 mb-20">
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:px-16 lg:px-18 xl:px-24">
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" w-full md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" w-full md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" w-full md:w-[23.875rem] md:-[13.5625rem]"
          />
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-5 md:px-16 lg:px-18 xl:px-24">
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" w-full md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" w-full md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" w-full md:w-[23.875rem] md:-[13.5625rem]"
          />
        </div>
      </section>
    </main>
  );
};

export default GovernancePage;

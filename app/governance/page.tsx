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
    <main className="flex min-h-screen flex-col items-center">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            GOVERNANCE
          </h1>
          <Image
            src={GovernanceHeroImage}
            alt="Hero Image"
            className="w-full md:h-[30rem]"
          />
        </div>
      </section>

      <section className="flex w-full min-h-screen justify-center items-center p-8 md:hidden">
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
            <p className="w-full text-[1.25rem] text-[#646E73]">
              Using theFront to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </p>

            <div className="flex flex-wrap justify-center gap-5 sm:gap-0 md:justify-start">
              <div className="flex my-2 w-full justify-center">
                <div className="flex items-center space-x-2 me-10">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    All features
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Email Support
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-center">
                <div className="flex items-center space-x-2 me-4">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Lifetime updates
                  </p>
                </div>
                <div className="flex items-center space-x-2 me-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Tons of assets
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-center">
                <div className="flex items-center space-x-2 ms-2 me-8">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Tech support
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-[0.5rem]">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Integration ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full justify-center items-center px-16 hidden md:flex pb-20 bg-[#F5F5F5]">
        <div className="flex flex-row gap-16">
          <Image
            src={GovernanceStructureImage}
            alt="Governance Structure"
            className="w-[33.375rem] h-[37.25rem] mt-[4rem] ms-[5rem] lg:ms-[6rem]"
          />
          <div className="flex-col py-16 md:mt-20 md:ms-20 lg:ms-36 space-y-8 text-start">
            <h1 className="font-bold text-[2rem]">Governance Structure</h1>
            <p className=" text-[#646E73] text-[1.25rem] pr-[6.5rem]">
              Using theFront to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-0 justify-start">
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    All features
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-4">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Email support
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-36">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Lifetime updates
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Tons of assets
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-[10.5rem]">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Tech support
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Integration ready
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen p-8 md:hidden bg-[#f5f5f5] pb-10 mb-10">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div className="flex flex-col">
            <span className="text-[#0074D9] text-[1rem]">VOTING PROCESS:</span>
            <h1 className="font-bold text-3xl inline">
              <span className="text-[#0074D9]">Develop anything </span> your
              business needs
            </h1>
            <p className="mt-5 text-xl text-[#646E73]">
              Build a beautiful, modern website with flexible, fully
              customizable, atomic Material-UI components.
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
                Built for developers
              </h1>
              <p className="text-sm  text-[#646E73]">
                theFront is built to make your life easier. Variables, build
                tooling, documentation, and reusable components.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Image src={StackedCards} alt="" />
              <h1 className="text-[1rem] font-normal text-[#2D3748]">
                Designed to be modern
              </h1>
              <p className="text-sm  font-light text-[#646E73]">
                Designed with the latest design trends in mind. theFront feels
                modern, minimal, and beautiful.
              </p>
            </div>
            <div className="flex flex-col items-start gap-5">
              <Image src={CodeIcon} alt="" />
              <h1 className="text-[1rem] font-normal text-[#2D3748]">
                Documentation for everything
              </h1>
              <p className="text-sm  font-light text-[#646E73]">
                We've written extensive documentation for components and tools,
                so you never have to reverse engineer anything.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full hidden md:px-16 md:flex items-center gap-5 bg-[#f5f5f5] pb-[7rem] mb-[4.5rem]"
        id="curved-rectangle"
      >
        <div className="flex flex-col gap-y-8 w-[43.25rem]">
          <div className="flex flex-col">
            <span className="text-[#0074D9] text-[1rem]">VOTING PROCESS:</span>
            <h1 className="font-bold text-[2rem] inline">
              <span className="text-[#0074D9]">Develop anything </span> your
              business needs
            </h1>
            <p className="mt-5 text-xl text-[#646E73]">
              Build a beautiful, modern website with flexible, fully
              customizable, atomic Material-UI components.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-sm mt-8">
            <div className="flex items-center md:items-start gap-5">
              <Image src={MouseClickIcon} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-[#2D3748]">
                  Community at the Core
                </h1>
                <p className="text-sm text-[#646E73]">
                  Our mission is fueled by community collaboration. Using
                  democratic principles and blockchain, we're creating a
                  transparent, accessible AI legacy.{" "}
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-start gap-5">
              <Image src={StackedCards} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-[#2D3748]">
                  Rewarding Contributions{" "}
                </h1>
                <p className="text-sm text-[#646E73]">
                  Your efforts in AI training and data validation are central to
                  our success. Receive Argocoin (AGC) rewards, and let your
                  voice be a driving force in AI's future.
                </p>
              </div>
            </div>
            <div className="flex items-center md:items-start gap-5">
              <Image src={CodeIcon} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-lg font-semibold text-[#2D3748]">
                  A Nexus for Visionaries{" "}
                </h1>
                <p className="text-sm text-[#646E73]">
                  We are more than a platform; we unite innovators for an AI
                  future crafted by the people. Align with us, endorse
                  accessibility, and democratize AI's landscape
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={GovernanceHeroIllustration}
            alt="Decentralized AI Governance"
            className="w-[28.375rem] h-[32.1875rem] ms-[5rem]"
          />
        </div>
      </section>

      <section className="w-full mt-8 md:mt-16 mb-20 flex justify-center">
        <div className="flex flex-col items-center justify-center px-10 gap-5 md:gap-4 md:w-[54.0625rem]">
          <span className="text-[#0074D9] text-[1rem]">
            GOVERNANCE PROPOSALS
          </span>
          <h1 className="font-bold text-[1.5625rem] md:text-[2rem] md:px-20 text-center">
            The powerful and flexible theme for all kinds of businesses
          </h1>
          <p className="mt-5 text-base text-[#646E73] text-center md:px-10 px-6">
            Build a beautiful, modern website with flexible, fully customizable,
            atomic Material-UI components. An experience you'd expect from a
            design system.
          </p>
        </div>
      </section>

      <section className="w-full md:mt-10 mb-20">
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-5">
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 md:w-[23.875rem] md:-[13.5625rem]"
          />
        </div>
        <div className="flex flex-col md:flex-row md:justify-center gap-5">
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 md:w-[23.875rem] md:-[13.5625rem]"
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
            extraStyles=" transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-110 md:w-[23.875rem] md:-[13.5625rem]"
          />
        </div>
      </section>
    </main>
  );
};

export default GovernancePage;

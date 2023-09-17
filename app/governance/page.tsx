import React from "react";

import GovernanceHeroImage from "../../public/Governance Page Hero Image.webp";
import GovernanceStructureImage from "../../public/Governance Structure Image.webp";
import GovernanceHeroIllustration from "../../public/Voting Illustration.svg";

import CheckIconYellow from "../../public/Check Icon Yellow.svg";
import MouseClickIcon from "../../public/Mouse Click Icon.svg";
import ProposalIcon from "../../public/Proposal Icon.svg";

import Image from "next/image";
import ProposalCard from "@/components/Custom Components/ProposalCard";

const GovernancePage = () => {
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
            className="w-full"
          />
        </div>
      </section>

      <section className="flex w-full min-h-screen justify-center items-center p-8 md:hidden">
        <div className="flex flex-col md:flex-row md:justify-center gap-x-32">
          <div className="md:mt-24 flex-col space-y-8 md:space-y-4 md:text-start">
            <h1 className="font-bold text-[20px] md:text-3xl text-center">
              Governance Structure
            </h1>
            <Image
              src={GovernanceStructureImage}
              alt="Governance Structure"
              className="mx-auto"
            />
            <p className="md:break-words w-full md:w-3/4 text-[#646E73]">
              Using theFront to build your site means never worrying about
              designing another page or cross browser compatibility. Our
              ever-growing library of components and pre-designed layouts will
              make your life easier.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-0 md:justify-start">
              <div className="flex my-2 w-full justify-around">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">Security</p>
                </div>
                <div className="flex items-center space-x-2 ms-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Governance
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-around">
                <div className="flex items-center space-x-2 ms-1">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Innovation
                  </p>
                </div>
                <div className="flex items-center space-x-2 me-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Community
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-around">
                <div className="flex items-center space-x-2 ms-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Prosperity
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-1">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full justify-center items-center px-16 lg:px-24 lg:py-36 hidden md:flex bg-[#F5F5F5]">
        <div className="flex flex-row gap-16">
          <Image
            src={GovernanceStructureImage}
            alt="Governance Structure"
            className="w-1/2"
          />
          <div className="flex-col py-16 md:mt-20 md:ms-20 space-y-8 text-start">
            <h1 className="font-bold text-3xl">Governance Structure</h1>
            <p className="md:break-words w-full md:w-3/4 text-[#646E73]">
              “Technology is nothing. What's important is that you have a faith
              in people, that they're basically good and smart, and if you give
              them tools, they'll do wonderful things with them.”
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-0 justify-start">
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">Security</p>
                </div>
                <div className="flex items-center space-x-2 ms-4">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Governance
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Innovation
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Community
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Prosperity
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={CheckIconYellow} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Transparency
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
            <span className="text-[#0074D9]">VOTING PROCESS:</span>
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
            <Image src={GovernanceHeroIllustration} alt="Robot and Human" />
          </div>

          <div className="mt-10 flex flex-col gap-10 border-t-2 md:border-0 py-10 rounded-sm">
            <div className="flex flex-col items-center md:items-start gap-5">
              <Image src={MouseClickIcon} alt="" />
              <h1 className="text-lg font-semibold text-[#2D3748]">
                Built for developers
              </h1>
              <p className="text-sm text-center text-[#646E73]">
                theFront is built to make your life easier. Variables, build
                tooling, documentation, and reusable components.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-5">
              <Image src={MouseClickIcon} alt="" />
              <h1 className="text-xl font-semibold text-[#2D3748]">
                Designed to be modern
              </h1>
              <p className="text-sm text-center md:text-start font-light text-[#646E73]">
                Designed with the latest design trends in mind. theFront feels
                modern, minimal, and beautiful.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-5">
              <Image src={MouseClickIcon} alt="" />
              <h1 className="text-xl font-semibold text-center text-[#2D3748]">
                Documentation for everything
              </h1>
              <p className="text-sm text-center md:text-start font-light text-[#646E73]">
                We've written extensive documentation for components and tools,
                so you never have to reverse engineer anything.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen md:px-12 lg:px-16 hidden md:flex items-center gap-5 bg-[#f5f5f5] rounded-b-[30px] pb-10 mb-20">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col">
            <span className="text-[#0074D9]">VOTING PROCESS:</span>
            <h1 className="font-bold text-3xl pr-72 inline">
              <span className="text-[#0074D9]">Develop anything </span> your
              business needs
            </h1>
            <p className="mt-5 text-xl text-[#646E73] pr-32">
              We're crafting a shared journey in AI, ensuring transparency,
              inclusiveness, and rewarding your essential role with Argocoin
              (AGC). Embrace a future where artificial intelligence is
              democratized and accessible to all.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-sm mt-12">
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
              <Image src={MouseClickIcon} alt="" width={50} />
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
              <Image src={MouseClickIcon} alt="" width={50} />
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
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="w-full my-10">
        <div className="flex flex-col items-center justify-center px-10 md:px-52 gap-5 md:gap-2">
          <span className="text-[#0074D9]">GOVERNANCE PROPOSALS</span>
          <h1 className="font-bold text-2xl inline text-center">
            The powerful and flexible theme for all kinds of businesses
          </h1>
          <p className="mt-5 text-base text-[#646E73] text-center">
            Build a beautiful, modern website with flexible, fully customizable,
            atomic Material-UI components. An experience you'd expect from a
            design system.
          </p>
        </div>
      </section>

      <section className="w-full mt-10 mb-20">
        <div className="flex flex-col md:flex-row">
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
          />
          <ProposalCard
            proposalTitle="Proposal 1"
            proposalDescription="This is a sample proposal"
            proposalImage={ProposalIcon}
          />
        </div>
      </section>
    </main>
  );
};

export default GovernancePage;

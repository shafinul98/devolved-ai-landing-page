import Image from "next/image";
import HeroImage from "../public/Home Page Hero.svg";
import MoneyBag from "../public/Money Bag.svg";
import TeamWork from "../public/Team Work.svg";
import Blockchain from "../public/Blockchain.svg";
import SteveJobs from "../public/Steve Jobs.svg";
import BlueTick from "../public/Blue Tick.svg";
import DevolvedAIHeroLogo from "../public/Devolved AI Hero Logo.svg";
import Community from "../public/Community and Outreach Logo.svg";
import Rewards from "../public/Rewarding Contributions Logo.svg";
import LinkIcon from "../public/Link Logo.svg";
import DemocraticGovIcon from "../public/Democratice Governace Logo.svg";
import InnovationIcon from "../public/User Centric Innovation Logo.svg";
import ProsperityIcon from "../public/Shared Prosperity Logo.svg";
import PrivacyIcon from "../public/Privacy and Security Logo.svg";
import TransparencyIcon from "../public/Transparency Icon.svg";

import Button from "@/components/Custom Components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-6 py-8 md:p-0">
      <section className="grid w-full rounded-b-[30px] min-h-screen place-items-center md:bg-slate-50 md:px-12 md:py-8 lg:py-14 lg:px-16 mb-20 md:mb-20">
        <div className="flex flex-col gap-x-72 items-center md:flex-row md:justify-between md:p-10">
          <div className="flex flex-col gap-5 mb-10">
            <h1 className="font-bold text-3xl md:text-start md:text-5xl md:text-clip text-[#2D3748]">
              Artificial Intelligence designed by the People, for the People
            </h1>
            <p className="font-normal md:text-start md:text-xl text-[#646E73]">
              Join us in taking AI out of corporate hands. Vote on its
              direction, contribute your insights, and earn rewards in an AI
              ecosystem that is transparently and democratically governed by
              you.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-5">
              <Button
                title="Launch App"
                extraStyles=" bg-[#FF6F00] text-white w-full text-center"
              />
              <Button
                title="Whitepaper"
                extraStyles=" bg-white text-[#0074D9] border-[#0074D9] w-full text-center"
              />
            </div>
          </div>

          <div>
            <Image src={HeroImage} alt="Hero Image" width={1000} />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-10 md:px-10 md:flex-row bg-slate-50 md:bg-white border-t-2 md:border-0 py-5 rounded-sm">
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image src={MoneyBag} alt="" />
            <h1 className="text-xl font-semibold text-[#2D3748]">
              Contribute and Profit
            </h1>
            <p className="text-sm text-center md:text-start font-light text-[#646E73]">
              Use your skills or computational power to help train AI, and earn
              Argocoin (AGC) as a direct reward for your contributions.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image src={TeamWork} alt="" />
            <h1 className="text-xl font-semibold text-[#2D3748]">
              Community-Led Innovation
            </h1>
            <p className="text-sm text-center md:text-start font-light text-[#646E73]">
              Influence the development and evolution of AI through
              token-weighted voting, ensuring the technology serves your needs.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-5">
            <Image src={Blockchain} alt="" />
            <h1 className="text-xl font-semibold text-[#2D3748]">
              Trust Through Transparency
            </h1>
            <p className="text-sm text-center md:text-start font-light text-[#646E73]">
              Benefit from a secure and transparent environment, where
              blockchain technology validates every transaction and decision.
            </p>
          </div>
        </div>
      </section>

      <section className="flex w-full min-h-screen justify-center items-center p-8 mb-20 md:hidden">
        <div className="flex flex-col md:flex-row md:justify-center gap-x-32">
          <div className="mt-10 md:mt-24 flex-col space-y-8 md:space-y-4 md:text-start">
            <h1 className="font-bold text-[20px] md:text-3xl">
              Nurturing Faith in Innovation:
              <span className="font-bold">
                {" "}
                Tools for <span className="text-[#0074D9]">Excellence</span>
              </span>
            </h1>
            <Image src={SteveJobs} alt="Steve Jobs" className="mx-auto" />
            <p className="md:break-words w-full md:w-3/4 text-[#646E73]">
              “Technology is nothing. What's important is that you have a faith
              in people, that they're basically good and smart, and if you give
              them tools, they'll do wonderful things with them.”
            </p>
            <p className="break-words md:w-3/4 text-[#646E73] font-semibold">
              -Steve Jobs
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-0 md:justify-start">
              <div className="flex my-2 w-full justify-around">
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">Security</p>
                </div>
                <div className="flex items-center space-x-2 ms-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Governance
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-around">
                <div className="flex items-center space-x-2 ms-1">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Innovation
                  </p>
                </div>
                <div className="flex items-center space-x-2 me-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Community
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-around">
                <div className="flex items-center space-x-2 ms-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Prosperity
                  </p>
                </div>
                <div className="flex items-center space-x-2 ms-1">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen justify-center items-center px-16 lg:px-24 lg:py-36 my-15 hidden md:flex bg-[#F5F5F5]">
        <div className="flex flex-row gap-16">
          <Image src={SteveJobs} alt="Steve Jobs" className="w-1/2" />
          <div className="flex-col py-16 space-y-8 text-start">
            <h1 className="font-bold text-3xl">
              Nurturing Faith in Innovation: Tools for
              <span className="text-[#0074D9]"> Excellence</span>
            </h1>
            <p className="md:break-words w-full md:w-3/4 text-[#646E73]">
              “Technology is nothing. What's important is that you have a faith
              in people, that they're basically good and smart, and if you give
              them tools, they'll do wonderful things with them.”
            </p>
            <p className="break-words md:w-3/4 text-[#646E73] font-semibold">
              -Steve Jobs
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-0 justify-start">
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">Security</p>
                </div>
                <div className="flex items-center space-x-2 ms-4">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Governance
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Innovation
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Community
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-start gap-40">
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Prosperity
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Transparency
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen p-8 mb-20 md:hidden">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div>
            <h1 className="font-bold text-[20px] text-center">
              <span className="text-[#0074D9]">Devolved AI: </span> A Communal
              Pathway to the Future of Artificial Intelligence
            </h1>
          </div>
          <div>
            <Image src={DevolvedAIHeroLogo} alt="Robot and Human" />
          </div>
          <p className="text-center text-[#646E73]">
            We're crafting a shared journey in AI, ensuring transparency,
            inclusiveness, and rewarding your essential role with Argocoin
            (AGC). Embrace a future where artificial intelligence is
            democratized and accessible to all.
          </p>
          <div className="mt-10 flex flex-col gap-10 border-t-2 md:border-0 py-10 rounded-sm">
            <div className="flex flex-col items-center md:items-start gap-5">
              <Image src={Community} alt="" />
              <h1 className="text-lg font-semibold text-[#2D3748]">
                Community at the Core
              </h1>
              <p className="text-sm text-center text-[#646E73]">
                Our mission is fueled by community collaboration. Using
                democratic principles and blockchain, we're creating a
                transparent, accessible AI legacy.{" "}
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-5">
              <Image src={Rewards} alt="" />
              <h1 className="text-xl font-semibold text-[#2D3748]">
                Rewarding Contributions{" "}
              </h1>
              <p className="text-sm text-center md:text-start font-light text-[#646E73]">
                Your efforts in AI training and data validation are central to
                our success. Receive Argocoin (AGC) rewards, and let your voice
                be a driving force in AI's future.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start gap-5">
              <Image src={LinkIcon} alt="" />
              <h1 className="text-xl font-semibold text-[#2D3748]">
                A Nexus for Visionaries{" "}
              </h1>
              <p className="text-sm text-center md:text-start font-light text-[#646E73]">
                We are more than a platform; we unite innovators for an AI
                future crafted by the people. Align with us, endorse
                accessibility, and democratize AI's landscape
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full min-h-screen md:px-12 lg:px-16 hidden md:flex items-center gap-5">
        <div className="flex flex-col gap-y-8">
          <div className="flex flex-col gap-y-8">
            <h1 className="font-bold text-3xl pr-72">
              <span className="text-[#0074D9]">Devolved AI: </span> A Communal
              Pathway to the Future of Artificial Intelligence
            </h1>
            <p className="text-xl text-[#646E73] pr-32">
              We're crafting a shared journey in AI, ensuring transparency,
              inclusiveness, and rewarding your essential role with Argocoin
              (AGC). Embrace a future where artificial intelligence is
              democratized and accessible to all.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-sm mt-12">
            <div className="flex items-center md:items-start gap-5">
              <Image src={Community} alt="" width={50} />
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
              <Image src={Rewards} alt="" width={50} />
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
              <Image src={LinkIcon} alt="" width={50} />
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
            src={DevolvedAIHeroLogo}
            alt="Robot and Man"
            width={1000}
            height={1000}
          />
        </div>
      </section>

      <section className="w-full p-4 md:p-20 md:mb-0 mb-20 bg-slate-50">
        <div className="flex flex-col gap-3 text-center">
          <h3 className="text-base font-semibold text-primary ">
            EMPOWERING THE FUTURE OF AI TOGETHER
          </h3>
          <h1 className="text-xl font-bold">
            Join a community-driven AI revolution with Devolved AI
          </h1>
          <p>
            Contribute to our mission, influence our growth through voting, and
            earn rewards with Argocoin (AGC) as you partake in a transparent and
            community guided AI ecosystem.
          </p>
          <div className="flex gap-x-2 md:px-96">
            <Button
              title="Launch App"
              extraStyles=" bg-[#FF6F00] w-full md:w-1/2 text-white"
            />
            <Button
              title="Whitepaper"
              extraStyles=" w-full md:w-1/2 bg-white text-[#0074D9] border-[#0074D9] text-primary"
            />
          </div>
        </div>
      </section>

      <section className="w-full md:py-20 mb-20">
        <div className="flex flex-col">
          <div className="flex flex-col text-center gap-3">
            <h1 className="text-3xl font-bold">Our Guiding Principles</h1>
            <p className="text-[#646E73] text-lg font-semibold">
              Six Pillars Shaping The Future Of Decentralized AI
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center md:py-10">
            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4">
              <Image src={DemocraticGovIcon} alt="" />
              <h6 className="text-xl text-[#2D3748]">Democratic Governance</h6>
              <p className="text-[#646E73]">
                Ensuring every voice matters through token weighted voting and
                transparency
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4">
              <Image src={InnovationIcon} alt="" />
              <h6 className="text-xl text-[#2D3748]">
                User Centric Innovation
              </h6>
              <p className="text-[#646E73]">
                Focused on developer friendly, seamless AI integration and UI/UX
                excellence
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4">
              <Image src={ProsperityIcon} alt="" />
              <h6 className="text-xl text-[#2D3748]">Shared Prosperity</h6>
              <p className="text-[#646E73]">
                Creating a culture of mutual growth through contributions and
                rewards
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4">
              <Image src={PrivacyIcon} alt="" />
              <h6 className="text-xl text-[#2D3748]">Privacy and Security</h6>
              <p className="text-[#646E73]">
                Committed to safeguarding privacy and security in all
                operations.
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4">
              <Image src={Community} alt="" />
              <h6 className="text-xl text-[#2D3748]">Community and Outreach</h6>
              <p className="text-[#646E73]">
                Building a vibrant community through diverse engagement and
                support
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4">
              <Image src={TransparencyIcon} alt="" />
              <h6 className="text-xl text-[#2D3748]">Transparency</h6>
              <p className="text-[#646E73]">
                Upholding transparency and trust as core values in our ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

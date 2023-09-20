"use client";

import Image from "next/image";
import HeroImage from "../public/Home Page Hero.webp";
import SteveJobs from "../public/Steve Jobs.webp";
import DevolvedAIHeroLogo from "../public/Devolved AI Hero Logo.svg";

import MoneyBag from "../public/Money Bag.svg";
import TeamWork from "../public/Team Work.svg";
import Blockchain from "../public/Blockchain.svg";
import BlueTick from "../public/Blue Tick.svg";
import Community from "../public/Community and Outreach Logo.svg";
import Rewards from "../public/Rewarding Contributions Logo.svg";
import LinkIcon from "../public/Link Logo.svg";
import DemocraticGovIcon from "../public/Democratice Governace Logo.svg";
import InnovationIcon from "../public/User Centric Innovation Logo.svg";
import ProsperityIcon from "../public/Shared Prosperity Logo.svg";
import PrivacyIcon from "../public/Privacy and Security Logo.svg";
import TransparencyIcon from "../public/Transparency Icon.svg";

import Button from "@/components/Custom Components/Button";
import { useEffect } from "react";

export default function Home() {
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
    <main className="flex min-h-screen  flex-col items-center justify-between px-6 py-8 md:p-0">
      <section className="w-full md:bg-[#f5f5f5]" id="curved-rectangle">
        <div className="flex flex-col items-center md:flex-row md:justify-center md:p-12 md:pl-12 lg:px-16 lg:pl-[4rem] xl:pl-28 md:mt-[2.1rem]">
          <div className="flex flex-col gap-5 mb-10  md:me-[6rem] lg:me-[10.5rem] xl:me-[7.5rem]">
            <h1 className="font-bold text-[2rem] text-start md:text-[3rem] md:leading-[1.15] text-[#2D3748]">
              Empowering <span className="text-[#0074D9]">You</span> to Shape
              the Future of Artificial Intelligence
            </h1>
            <p className="font-normal text-[1rem] md:text-start md:text-xl text-[#646E73]">
              AI is transforming our world, and its impact will touch every life
              on Earth. This is your chance to not just witness, but to actively
              shape that transformation.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center md:justify-start gap-5">
              <Button
                title="Get Early Access"
                extraStyles=" bg-[#FF6F00] text-white w-full text-center md:w-[8.75rem] md:h-[2.625rem] font-bold"
              />
              <Button
                title="Whitepaper"
                extraStyles=" bg-white text-[#0074D9] border-[#0074D9] w-full text-center md:w-[8.75rem] md:h-[2.625rem]"
              />
            </div>
          </div>

          <div>
            <Image
              src={HeroImage}
              alt="Hero Image"
              className="xl:pl-[1rem]"
              width={700}
            />
          </div>
        </div>
      </section>

      <div className="w-full h-[0.0625rem] md:hidden"></div>

      <article className="flex flex-col mt-12 md:px-10 md:gap-5 lg:gap-[5rem] lg:w-full lg:px-[3.5rem] xl:px-28 md:flex-row lg:justify-center mb-[3.75rem]">
        <div className="flex flex-col items-center py-[1.18675rem] md:py-0 md:items-start gap-[0.81rem] md:gap-3 ">
          <Image src={MoneyBag} alt="" />
          <h1 className="text-xl md:text-[1.5rem] font-bold text-[#2D3748]">
            Contribute and Profit
          </h1>
          <p className="text-[1rem] md:text-[1rem] text-center md:text-start font-normal text-[#646E73]">
            Contribute your ideas, skills, or even simple feedback, and earn
            Argocoin as a reward. With our Proof of Value system, we make sure
            your contributions don't go unnoticed. It's more than
            participation—it's a stake in shaping tomorrow's technology.
          </p>
        </div>
        <div className="flex flex-col items-center py-[1.18675rem] md:py-0 md:items-start gap-3 ">
          <Image src={TeamWork} alt="" />
          <h1 className="text-xl md:text-[1.5rem] font-bold text-[#2D3748]">
            Community-Led Innovation
          </h1>
          <p className="text-[1rem] md:text-[1rem] text-center md:text-start font-normal text-[#646E73]">
            Have a say in shaping the future of technology with Devolved AI. By
            voting on key decisions, you help direct the development of our
            intelligent system. Our use of token-weighted voting ensures every
            voice is heard, magnified by the weight of Argocoin you hold.
          </p>
        </div>
        <div className="flex flex-col items-center py-[1.18675rem] md:py-0 md:items-start gap-3 ">
          <Image src={Blockchain} alt="" />
          <h1 className="text-xl md:text-[1.5rem] font-bold text-[#2D3748]">
            Trust Through Transparency
          </h1>
          <p className="text-[1rem] md:text-[1rem] text-center md:text-start font-normal text-[#646E73]">
            Your data is safe and our actions are open for you to see. Our
            custom blockchain technology makes our AI more transparent than any
            other platform on Earth, ensuring both security and absolute
            clarity. This unique blend offers peace of mind in the digital
            realm.
          </p>
        </div>
      </article>

      <section className="flex w-full min-h-screen justify-center items-center p-4 md:hidden">
        <div className="flex flex-col md:flex-row md:justify-center gap-x-32">
          <div className="mt-10 md:mt-24 flex-col space-y-8 md:space-y-4 md:text-start">
            <h1 className="font-bold text-[1.5625rem] md:text-3xl">
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
            <div className="flex flex-wrap justify-center gap-5 sm:gap-0 md:justify-start">
              <div className="flex my-2 w-full items-center justify-center gap-12">
                <div className="flex items-center space-x-2 me-[2rem]">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">Security</p>
                </div>
                <div className="flex items-center space-x-2">
                  <Image src={BlueTick} alt="Blue tick" />
                  <p className="text-[#2D3748] text-sm font-normal">
                    Governance
                  </p>
                </div>
              </div>
              <div className="flex my-2 w-full justify-center gap-12">
                <div className="flex items-center space-x-2 me-[1.1rem]">
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
              <div className="flex my-2 w-full justify-center gap-12">
                <div className="flex items-center space-x-2 me-[0.8rem]">
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

      <section className="w-full min-h-screen hidden md:flex lg:justify-center bg-[#F5F5F5]">
        <div className="flex flex-row xl:gap-5 md:p-10">
          <Image
            src={SteveJobs}
            alt="Steve Jobs"
            className="w-full md:w-1/2 lg:w-full mt-[2rem] ms-5 xl:ms-32 xl:h-[35rem] xl:w-[35rem]"
          />
          <div className="flex-col py-16 space-y-7 text-start mt-[3rem] w-[36.9375rem] h-[24.3125rem] ms-[2rem] xl:w-full xl:pl-[4.5rem]">
            <h1 className="font-bold text-[2rem]">
              Nurturing Faith in Innovation: Tools for
              <span className="text-[#0074D9]"> Excellence</span>
            </h1>
            <p className="md:break-words w-full md:w-3/4 text-[#646E73]">
              “Technology is nothing. What's important is that you have a faith
              in people, that they're basically good and smart, and if you give
              them tools, they'll do wonderful things with them.”
            </p>
            <p className="md:w-3/4 text-[#646E73] font-semibold">-Steve Jobs</p>
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

      <section className="w-full min-h-screen p-4 mb-20 md:hidden">
        <div className="flex flex-col items-center justify-center gap-y-10">
          <div>
            <h1 className="font-bold text-[1.5625rem] text-center text-[#2D3748]">
              <span className="text-[#0074D9]">Devolved AI: </span> A Communal
              Pathway to the Future of Artificial Intelligence
            </h1>
          </div>
          <div>
            <Image
              src={DevolvedAIHeroLogo}
              alt="Devolved AI Logo"
              className="w-[20.75rem] h-[14.8125rem]"
            />
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

      <section className="w-full px-5 lg:px-10 xl:px-20 mt-[4.25rem] mb-[4.5rem] hidden md:flex md:justify-center items-center gap-5">
        <div className="flex flex-col gap-y-8 p-10">
          <div className="flex flex-col gap-y-4">
            <h1 className="font-bold text-[2rem]">
              <span className="text-[#0074D9]">Devolved AI: </span> A Communal
              Pathway to the Future of Artificial Intelligence
            </h1>
            <p className="text-xl text-[#646E73]">
              We're crafting a shared journey in AI, ensuring transparency,
              inclusiveness, and rewarding your essential role with Argocoin
              (AGC). Embrace a future where artificial intelligence is
              democratized and accessible to all.
            </p>
          </div>

          <div className="flex flex-col gap-3 rounded-sm mt-12">
            <div className="flex items-center md:items-start gap-6">
              <Image src={Community} alt="" width={50} />
              <div className="flex flex-col gap-y-2">
                <h1 className="text-[1rem] font-regular text-[#2D3748]">
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
                <h1 className="text-lg font-regular text-[#2D3748]">
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
                <h1 className="text-lg font-regular text-[#2D3748]">
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

        <div className="md:px-10 lg:px-20">
          <Image
            src={DevolvedAIHeroLogo}
            alt="Devolved AI Hero Logo"
            width={700}
          />
        </div>
      </section>

      <section className="w-full p-4 md:p-0 md:mb-0 mb-20 bg-[#F5F5F5]">
        <div className="flex flex-col gap-5 text-center my-[3rem]">
          <h3 className="text-base font-normal text-[#0074D9] ">
            EMPOWERING THE FUTURE OF AI TOGETHER
          </h3>
          <h1 className="text-[2rem] font-bold text-[#2D3748]">
            Join a community-driven AI revolution with Devolved AI
          </h1>
          <p className="text-[1rem] leading-6 text-center md:px-10">
            Contribute to our mission, influence our growth through voting, and
            earn rewards with Argocoin (AGC) as you partake in a transparent and
            community guided AI ecosystem.
          </p>
          <div className="flex gap-x-2 md:px-72 justify-center">
            <Button
              title="Get Early Access"
              extraStyles=" bg-[#FF6F00] w-full md:w-[8.75rem] h-[2.625rem] text-white"
            />
            <Button
              title="Whitepaper"
              extraStyles=" w-full md:w-[8.75rem] h-[2.625rem] bg-white text-[#0074D9] border-[#0074D9] text-primary"
            />
          </div>
        </div>
      </section>

      <section className="w-full md:py-14">
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

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4 ">
              <Image src={PrivacyIcon} alt="" />
              <h6 className="text-xl text-[#2D3748]">Privacy and Security</h6>
              <p className="text-[#646E73]">
                Committed to safeguarding privacy and security in all
                operations.
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4 ">
              <Image src={Community} alt="" />
              <h6 className="text-xl text-[#2D3748]">Community and Outreach</h6>
              <p className="text-[#646E73]">
                Building a vibrant community through diverse engagement and
                support
              </p>
            </div>

            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md md:w-1/4 ">
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

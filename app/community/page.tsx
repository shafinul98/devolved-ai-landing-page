"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import CommunityHeroImage from "../../public/Community Page Hero Image.webp";

import Community from "../../public/Community and Outreach Logo.svg";
import Rewards from "../../public/Rewarding Contributions Logo.svg";
import TeamWork from "../../public/Team Work.svg";

import RightArrowIconBlue from "../../public/Right Arrow Blue.svg";

import {
  FaDiscord,
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Button from "@/components/Custom Components/Button";
import Carousel from "@/components/Custom Components/Carousel";
import { EarlyAccessForm } from "@/components/Custom Components/EarlyAccessForm";

const CommunityPage = () => {
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
            COMMUNITY
          </h1>
          <Image
            src={CommunityHeroImage}
            alt="Hero Image"
            className="w-full md:h-[30rem] object-cover"
          />
        </div>
      </section>

      <section className="w-full place-items-center md:my-20">
        <article className="flex flex-col items-center justify-center p-5 gap-3">
          <h1 className="text-[2rem] font-bold text-[#2D3748] text-center">
            Join the Devolved AI Community
          </h1>
          <p className="text-[1rem] text-[#646E73] text-center">
            Become a part of our vibrant, decentralized community shaping the
            future of AI. Your contribution matters here.
          </p>
        </article>
        <div className="flex flex-col items-center justify-center my-10 md:mt-5">
          <div className="flex gap-3 md:gap-10">
            <Link
              href={"https://facebook.com/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaFacebook size={30} />
            </Link>

            <Link
              href={"https://twitter.com/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter size={30} />
            </Link>

            <Link
              href={"https://www.reddit.com/user/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaReddit size={30} />
            </Link>

            <Link
              href={"https://discord.gg/Z2avfRQ4xc"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaDiscord size={30} />
            </Link>

            <Link
              href={"https://t.me/devolvedai"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTelegram size={30} />
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full place-items-center mb-20 md:hidden">
        <Carousel>
          <div className="flex flex-col py-10 px-10 rounded-sm">
            <div className="flex flex-col gap-10 rounded-sm mt-12 md:mt-6">
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Community} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Be a Game-Changer
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Turn your ideas into reality. Here, even the wildest
                    thoughts can become the next big thing.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Rewards} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Exclusive Perks
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Early access to updates, unique Argocoin rewards, and
                    community-only events.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={TeamWork} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Adventure Awaits
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Never a dull moment with challenges, hackathons, and
                    treasure hunts designed to entertain and educate.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-10 px-10 rounded-sm">
            <div className="flex flex-col gap-10 rounded-sm mt-12">
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Community} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Unleash Your Creativity
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Work with like-minded individuals who will appreciate and
                    elevate your artistic flair or coding genius.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Rewards} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Unlock Your Potential
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Join us and thrive in an environment that fosters growth,
                    innovation, and leadership.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={TeamWork} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    The Power of Community
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Be part of something bigger than yourself. Together, we're
                    not just shaping this platform; we're shaping the future of
                    AI.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col py-10 px-10 rounded-sm">
            <div className="flex flex-col gap-10 rounded-sm mt-12">
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Community} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Access to the Best Minds
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Learn from the experts. Regular AMAs, webinars, and panel
                    discussions with leaders in the tech industry.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={Rewards} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Friends Around the Globe
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Connect, collaborate, and build lasting friendships with
                    people from different cultures and disciplines.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-5">
                <Image src={TeamWork} alt="" width={50} />
                <div className="flex flex-col gap-y-2 ">
                  <h1 className="text-2xl font-bold text-[#2D3748] text-center">
                    Speak Your Mind
                  </h1>
                  <p className="text-[1rem] text-[#646E73] mt-2">
                    Transparency allows every voice to be heard. Your opinions
                    matter, and they can make a real impact.
                  </p>
                  <div className="flex gap-2 justify-start items-center">
                    <p className="text-[#0074D9]">Learn more</p>
                    <Image src={RightArrowIconBlue} alt="Right Arrow Icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="w-full justify-center px-9 mb-20 hidden md:flex 3xl:container">
        <div className="flex flex-col py-10 px-10 xl:px-24 rounded-sm">
          <div className="flex flex-col gap-10 rounded-sm mt-12">
            <div className="flex flex-col items-start justify-center gap-5">
              <Image src={Community} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748]">
                  Be a Game-Changer
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Turn your ideas into reality. Here, even the wildest thoughts
                  can become the next big thing.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <Image src={Community} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Unleash Your Creativity
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Work with like-minded individuals who will appreciate and
                  elevate your artistic flair or coding genius.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <Image src={Community} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Access to the Best Minds
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Learn from the experts. Regular AMAs, webinars, and panel
                  discussions with leaders in the tech industry.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-10 px-10 rounded-sm">
          <div className="flex flex-col gap-10 rounded-sm mt-12">
            <div className="flex flex-col items-start justify-center gap-5">
              <Image src={Rewards} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Exclusive Perks
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Early access to updates, unique Argocoin rewards, and
                  community-only events.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-5 xl:mt-7 2xl:mt-0">
              <Image src={Rewards} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Unlock Your Potential
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Join us and thrive in an environment that fosters growth,
                  innovation, and leadership.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-5 mt-5 lg:mt-0 xl:max-2xl-mt-0 2xl:mt-0">
              <Image src={Rewards} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Friends Around the Globe
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Connect, collaborate, and build lasting friendships with
                  people from different cultures and disciplines.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col py-10 px-10 rounded-sm">
          <div className="flex flex-col gap-10 xl:gap-8 2xl:gap-10 rounded-sm mt-12 xl:pr-10">
            <div className="flex flex-col items-start justify-center gap-5">
              <Image src={TeamWork} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Adventure Awaits
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Never a dull moment with challenges, hackathons, and treasure
                  hunts designed to entertain and educate.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center gap-5">
              <Image src={TeamWork} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  The Power of Community
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Be part of something bigger than yourself. Together, we're not
                  just shaping this platform; we're shaping the future of AI.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center gap-5">
              <Image src={TeamWork} alt="" width={50} />
              <div className="flex flex-col gap-y-2 ">
                <h1 className="text-2xl font-bold text-[#2D3748] ">
                  Speak Your Mind
                </h1>
                <p className="text-[1rem] text-[#646E73] mt-2">
                  Transparency allows every voice to be heard. Your opinions
                  matter, and they can make a real impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full p-7 md:p-20 mb-20 bg-[#F5F5F5]">
        <div className="flex flex-col gap-3 md:gap-6 text-center">
          <h3 className="text-[1.5625rem] md:text-3xl font-bold text-[#2D3748]">
            Why Devolved AI Community is Unique
          </h3>
          <p className="text-[1rem] md text-[#646E73] text-start lg:text-center lg:px-44 3xl:px-96">
            The Devolved AI community is not just a user base; it's a
            collaborative force propelling us toward AI's next frontier. Our
            innovative PoV protocol ensures that everyone's contributions are
            valued, creating a rewarding and dynamic ecosystem you'll want to be
            a part of.
          </p>
          <div className="flex justify-center mx-auto gap-x-2">
            <EarlyAccessForm>
              <Button
                title="Get Early Access"
                extraStyles=" bg-[#FF6F00] text-white font-bold rounded-[0.3125rem] w-full md:w-[8.75rem] md:h-[2.625rem]"
              />
            </EarlyAccessForm>
            <a
              target="_blank"
              href="https://devolved-ai.gitbook.io/devolved-ai-whitepaper/"
              rel="noopener noreferrer"
              className="w-full"
            >
              <Button
                title="Whitepaper"
                extraStyles=" bg-white text-[#0074D9] border-[#0074D9] w-full h-16 text-center md:w-[8.75rem] md:h-[2.625rem] font-light"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommunityPage;

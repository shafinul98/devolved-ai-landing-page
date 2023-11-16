"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import TrophyIcon from "../../public/TrophyIcon.svg";
import CalendarIcon from "../../public/CalendarIcon.svg";
import StayConnectedIcon from "../../public/StayConnectedIcon.svg";

import MissionImageNew from "../../public/MissionImageNew.png";
import CalendarImage from "../../public/CalendarImage.png";
import ConnectedWorldImage from "../../public/ConnectedWorldImage.png";

import {
  FaDiscord,
  FaFacebook,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import Link from "next/link";

const EarlyAccessSuccess = () => {
  const pathname = usePathname();

  const searchParams = useSearchParams();

  const isSignedUp = searchParams.get("isSignedUp");

  const router = useRouter();

  useEffect(() => {
    if (!isSignedUp) {
      router.push("/");
    }
  }, []);

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between p-0 3xl:container">
      <section className="w-full">
        <div className="mx-auto bg-[#F5F5F5] lg:w-full xl:w-full rounded-[0.9375rem] flex flex-col items-center pt-5">
          {/* Welcome Text */}
          <div className="mt-10 flex flex-col">
            <h1 className="text-[#2D3748] text-center text-[2rem] md:text-start md:text-[2.125rem] xl:text-[3.125rem] font-extrabold capitalize">
              Thank You for Joining Us!
            </h1>
            <p className="text-[#646E73] text-[1.5rem] md:text-[1.5rem] xl:text-[2rem] text-center md:px-0">
              🔥 You're In! But Act Fast!
            </p>
          </div>
          {/* Section Text and Icons */}
          <div className="flex flex-col mt-10 items-start lg:w-[50rem] gap-2.5 px-5 mx-auto xl:w-[72rem]">
            <p className="text-[#646E73] md:text-[1rem] xl:text-[1.5rem] text-start md:max-xl:pr-20">
              Congratulations, you've just taken the first step into a future of
              AI that belongs to the community. The next steps and{" "}
              <strong>exclusive rewards</strong> are waiting for you. But don't
              wait—<strong>spots are limited</strong>, and the early rewards are
              too good to miss!
            </p>
            <p className="text-[#646E73]  md:text-[1rem] xl:text-[1.5rem] text-start mt-2.5 ">
              📧 <strong>Check Your Email NOW!</strong> <br />
              Unlock your early access and rewards by following the simple
              instructions sent to your email.
            </p>
            <p className="text-[#646E73] md:text-[1rem] xl:text-[1.5rem] text-start mt-2.5 ">
              <strong>⚠️ Not Seeing It?</strong> <br /> Check your spam folder.
              Trust us, you won't want to miss this.
            </p>
            <p className="text-[#646E73] md:text-[1rem] xl:text-[1.5rem] text-start mt-2.5">
              Act fast, be part of the revolution.
            </p>
            <p className="text-[#646E73] md:text-[1rem] xl:text-[1.5rem] text-start mt-2.5">
              Best, <br />
              The Devolved AI Team
            </p>
          </div>
          {/* Main Section */}
          <div className="flex flex-col items-center mt-10 pb-10 bg-[#FFF] min-h-screen">
            {/* Mission Section */}
            <div className="flex flex-col lg:grid lg:grid-cols-2 mx-auto">
              {/* Mission Icon, Title and Sub Text */}
              <div className="flex flex-col justify-center gap-5 items-center lg:items-start">
                <div className="flex gap-2.5 lg:ms-20 mt-10 lg:mt-0">
                  <Image
                    src={TrophyIcon}
                    alt="Trophy Icon"
                    width={50}
                    height={50}
                    className="lg:max-xl:w-10 lg:max-xl:h-10"
                  />
                  <h1 className="text-[#2D3748] text-[2rem] lg:max-xl:text-[2.125rem] xl:text-[3.125rem] capitalize font-extrabold">
                    Our Mission
                  </h1>
                </div>
                <p className="text-[#646E73] text-[1rem] px-5 lg:max-xl:text-[1rem] md:max-xl:px-20 xl:text-[2rem] text-start xl:ms-20 xl:pr-44">
                  To pioneer an AI future that's shaped by the community. Be
                  part of the revolution.
                </p>
              </div>
              {/* Mission Image */}
              <div className="md:px-5 px-2.5 mt-12">
                <Image src={MissionImageNew} alt="Mission Image" />
              </div>
            </div>

            <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 mx-auto">
              {/* Calendar Image */}
              <div className="px-2.5 md:px-5 mt-6">
                <Image src={CalendarImage} alt="Calendar Image" />
              </div>
              {/* Calendar Icon and Title */}
              <div className="px-2.5 md:px-5 mt-8 flex flex-col justify-center items-center lg:items-start gap-2.5 lg:ms-20">
                <Image
                  src={CalendarIcon}
                  alt="Calendar Icon"
                  width={50}
                  height={50}
                  className="md:max-xl:w-10 md:max-xl:h-10"
                />
                <p className="text-[#646E73] text-[1rem] px-5 lg:max-xl:text-[1rem] lg:px-0 lg:pr-24 xl:text-[2rem] text-start xl:pr-64">
                  Mark your calendars! Our MVP is launching on Dec 5, 2023. Stay
                  tuned for exclusive updates.
                </p>
              </div>
            </div>

            <div className="flex flex-col lg:grid lg:grid-cols-2">
              {/* Stay Connected Icon and Title */}
              <div className="flex flex-col justify-center gap-4 mt-8">
                <div className="flex mx-auto lg:ms-20 gap-2.5">
                  <Image
                    src={StayConnectedIcon}
                    alt="Stay Connected Icon"
                    width={50}
                    height={50}
                    className="lg:max-xl:w-10 lg:max-xl:h-10"
                  />
                  <h1 className="text-[#2D3748] font-extrabold text-[2rem] lg:max-xl:text-[2.125rem] xl:text-[3.125rem] capitalize">
                    Stay Connected
                  </h1>
                </div>

                <p className="text-[1rem] lg:max-xl:text-[1rem] xl:text-[2rem] text-[#646E73] text-start mx-auto lg:ms-20 lg:pr-44">
                  Join our community and stay updated on our journey
                </p>
                {/* Social Icons */}
                <div className="flex flex-col mx-auto lg:items-start lg:ms-20 justify-center mt-10 px-5 md:px-0">
                  <div className="flex gap-5 md:gap-8">
                    <Link
                      href={"https://facebook.com/devolvedai"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaFacebook size={40} />
                    </Link>

                    <Link
                      href={"https://twitter.com/devolvedai"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaTwitter size={40} />
                    </Link>

                    <Link
                      href={"https://www.reddit.com/user/devolvedai"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaReddit size={40} />
                    </Link>

                    <Link
                      href={"https://discord.gg/Z2avfRQ4xc"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaDiscord size={40} />
                    </Link>

                    <Link
                      href={"https://t.me/devolvedai"}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FaTelegram size={40} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Partnership Image */}
              <div className="px-2.5 md:px-5 mt-12">
                <Image src={ConnectedWorldImage} alt="Partnership Image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EarlyAccessSuccess;

"use client"

import Image from "next/image";
import HeroImage from "../public/home/hero-image.webp"
import HomeImage1 from "../public/home/1.webp"
import HomeImage2 from "../public/home/2.webp"
import HomeImage3 from "../public/home/3.webp"
import HomeImage4 from "../public/home/4.webp"

import SectionBg from "../public/home/section-bg-1.webp"
import SectionBg2 from "../public/home/section-bg-2.webp"
import SectionBg3 from "../public/home/section-bg-3.webp"
import SectionBg4 from "../public/home/section-bg-4.webp"
import SectionBg5 from "../public/home/section-bg-5.webp"
import CommunityGovernedIcon from "../public/home/community_governed.svg"
import SharedProsperityIcon from "../public/home/shared_prosperity.svg"
import BlockchainBasedIcon from "../public/home/blockchain_based.svg"
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from "react";
import GetReferral from "@/components/customComponents/GetReferral";

export default function Home() {
  const [showSecondParagraph, setShowSecondParagraph] = useState(false);

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const validateEmail = (input: any) => {
    const isValid = /\S+@\S+\.\S+/.test(input);
    setIsEmailValid(isValid);
  };

  const submitHandler = async () => {
    const res = await fetch("/api/emailOctopus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: email,
        status: "PENDING",
      }),
    });

    const { error, status } = await res.json();

    if (status === 200) {
      window.location.href = `/earlyAccessSuccess?isSignedUp=true`;
    }

  };

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between p-0 md:p-0">
      {/* hero section */}
      <section className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})` }}>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
              <div className="text-center">
                  <h1 className="font-bold text-[2.8125rem] md:text-2xl lg:text-3xl xl:text-6xl leading-normal mb-5 text-[#192033] max-w-[82.78975rem]">
                    AI has evolved.<br />
                    So should its ownership.
                  </h1>
                  <p className="font-normal text-[1.275rem] md:text-2xl lg:text-3xl xl:text-3xl text-[#495167] m-5 xl:m-5 max-w-[71.375rem]">
                    Welcome to AI owned by you, the user. Built on blockchain
                    technology, Devolved AI embodies trust, transparency, and
                    community governance. Vote, earn rewards, and own a stake in
                    the future of AI—all powered by Argocoin.
                  </p>
                  <div className="justify-center hidden md:flex">
                      <GetReferral />
                  </div>
              </div>
          </div>
      </section>

      {/* What Drives Devolved AI? */}
      <section className="w-full my-10 items-center 3xl:container">
        <div className="flex flex-col items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <div className="m-5 xl:m-0">
            <Image
              priority
              src={HomeImage4}
              alt="What Drives Devolved AI Illustration"
              className="w-[50rem] h-auto md:w-[50rem] md:h-auto lg:w-[50rem] lg:h-auto xl:w-[50rem] xl:h-auto rounded-[1.25rem]"
            />
          </div>
          <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
            <div className="background-image" />
            <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
              What Drives Devolved AI?
            </p>
            <div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                className="text-[1rem] text-[#495167] leading-[1.875rem] font-light max-w-[45.25rem]"
              >
                We are more than just a platform; we are a movement aimed at redefining the relationship between AI and humanity. By using a decentralized approach, we ensure that our AI ecosystem is transparent, secure, and most importantly, governed by you.
              </motion.p>

              <AnimatePresence>
                {showSecondParagraph && (
                  <motion.p
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    className="text-[1rem] text-[#495167] leading-[1.875rem] font-light max-w-[45.25rem] mt-3"
                  >
                    Our mission is to create an AI that is powered by the people, for the people, ensuring shared prosperity and ethical development. Be a part of this revolutionary journey.
                  </motion.p>
                )}
              </AnimatePresence>
              <button className=" bg-[#A9A3B2] text-white font-medium leading-normal rounded-[0.3125rem] w-full md:w-[10rem] h-[3.125rem] mt-5"
                onClick={() => setShowSecondParagraph(true)}>
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .background-image {
              background-image: url(${SectionBg5.src});
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              opacity: 1;
              top: 0;
              left: 0;
              position: absolute;
              width: 170%;
              height: 100%;
              z-index: -1;
            }
          `}
        </style>
      </section>
      
      {/* Core Principles of Devolved AI */}
      <section className="flex flex-col my-10 m-5">
          <div className="flex flex-col rounded-[1rem] shadow-md gap-5 items-center justify-center"
              style={{
              backgroundImage: `url(${SectionBg4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
              }}>

              <div className="flex flex-col text-center max-w-xxl gap-5 m-5">
                  <p className="text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033] font-bold">
                    Core Principles of Devolved AI
                  </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:container p-5">
                  
                  {/* Community Governed */}
                  <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                      <Image priority className="w-[3.75rem] h-[3.75rem]" src={CommunityGovernedIcon} alt="IntegrityIcon"/>
                      <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                        Community Governed
                      </p>
                      <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                        Have a say in the evolution of Devolved AI. Use your Argocoin to vote on proposals 
                        and guide the trajectory of our decentralized ecosystem.
                      </p>
                  </div>

                  {/* Shared Prosperity */}
                  <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                      <Image priority className="w-[3.75rem] h-[3.75rem]" src={SharedProsperityIcon} alt="InnovationIcon" />
                      <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                        Shared Prosperity
                      </p>
                      <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                        Engage, contribute, and be rewarded. Our Proof of Value Protocol incentivizes your 
                        valuable input, offering Argocoin as a reward for active participation.
                      </p>
                  </div>

                  {/* Blockchain-based */}
                  <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                      <Image priority className="w-[3.75rem] h-[3.75rem]" src={BlockchainBasedIcon} alt="InclusivityIcon" />
                      <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                        Blockchain-based
                      </p>
                      <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                        Experience a new level of transparency and security with our layer 1 blockchain. 
                        Our decentralized foundation ensures the integrity and openness of all actions on 
                        the platform.
                      </p>
                  </div>

              </div>
          </div>
      </section>

      {/* Argocoin: The Essence of Community */}
      <section className="flex flex-col w-full my-10 items-center 3xl:container">
          <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
          style={{
              backgroundImage: `url(${SectionBg3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '300px',
          }}>
              <div className="background-image" />
              <div className="flex flex-col max-w-xxl gap-5 text-center">
                  <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
                    Argocoin: The Essence of Community
                  </p>
                  <p className="text-[0.90rem] md:text-xl lg:text-2xl xl:text-2xl text-[#495167] font-light max-w-[86.0625rem]">
                    Argocoin (AGC) is your digital passport to Devolved AI's ecosystem. 
                    It's not just a digital asset; <br/>
                    it's your voting ticket, your reward, and your stake in the community.
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="bg-[#A9A3B2] text-white font-medium text-base md:text-lg rounded-md w-full md:w-64 h-12">
                      LEARN MORE
                    </button>
                  </div>
              </div>
          </div>
      </section>

      {/* The Tech Behind the Vision */}
      <section className="w-full my-10 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
            <div className="background-image w-full h-64 md:h-auto" />
            <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
              The Tech Behind the Vision
            </p>
            <p className="text-[1rem] text-[#495167] leading-[1.875rem] font-light max-w-[45.25rem]">
              Starting with Natural Language Processing, we are setting the stage for future 
              innovations in Artificial General Intelligence, computer vision, predictive analytics, and more.
            </p>
            <div className="flex mt-4">
              <button className="bg-[#A9A3B2] text-white font-medium text-base md:text-lg rounded-md w-full md:w-64 h-12">
                EXPLORE TECHNOLOGY
              </button>
            </div>
          </div>
          <div className="m-5 xl:m-0">
            <Image
              priority
              src={HomeImage3}
              alt="Be an Early Governor Illustration"
              className="w-[50rem] h-auto md:w-[50rem] md:h-auto lg:w-[50rem] lg:h-auto xl:w-[50rem] xl:h-auto rounded-[1.25rem]"
            />
          </div>
        </div>
        <style jsx>
          {`
            .background-image {
              background-image: url(${SectionBg2.src});
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
              opacity: 1;
              bottom: 0;
              right: 0;
              position: absolute;
              width: 150%;
              height: 110%;
              z-index: -1;
            }
          `}
        </style>
      </section>

      {/* Be an Early Governor */}
      <section className="w-full my-10 items-center 3xl:container">
        <div className="flex flex-col items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <div className="m-5 xl:m-0">
            <Image
                priority
                src={HomeImage2}
                alt="Be an Early Governor Illustration"
                className="w-[50rem] h-auto md:w-[50rem] md:h-auto lg:w-[50rem] lg:h-auto xl:w-[50rem] xl:h-auto rounded-[1.25rem]"
              />
          </div>
          <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
              <div className="background-image" />
              <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
                Be an Early Governor
              </p>
              <p className="text-[1rem] text-[#495167] leading-[1.875rem] font-light max-w-[45.25rem]">
                As an early adopter, you have the unique opportunity to shape Devolved AI's 
                future. Your governance will directly impact our development roadmap and 
                platform features.
              </p>
              <div className="flex mt-4">
                <button className="bg-[#A9A3B2] text-white font-medium text-base md:text-lg rounded-md w-full md:w-64 h-12">
                  LEARN MORE
                </button>
              </div>
          </div>
        </div>
        <style jsx>{`
          .background-image {
            background-image: url(${SectionBg.src});
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 1;
            top: 0;
            left: 0;
            position: absolute;
            width: 160%;
            height: 110%;
            z-index: -1;
          }
  `}</style>
      </section>

      {/* Ready to be a part of AI */}
      <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5 3xl:container">
            <div className="flex flex-col gap-5 p-3 md:p-6 rounded-md shadow-md items-center justify-center w-[20.875rem] xl:w-[66.875rem] max-h-[30rem] xl:h-[45rem]"
                style={{
                    backgroundImage: `url(${HomeImage1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <p className="text-[#192033] text-[1.5rem] xl:text-[2.5rem] font-medium leading-normal text-center max-w-[50.75rem]">
                    Ready to be a part of AI's next (d)evolution?
                    <br />
                    Sign up now.
                </p>
                <div className="hidden md:flex">
                    <GetReferral />
                </div>
            </div>
        </section>


      {/* Referel Text */}
      <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5 3xl:container">
        <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
          <p className="text-sm xl:text-[1rem] md:text-base leading-[1.875rem] text-center md:text-left font-normal text-[#323131] max-w-[80.625rem]">
            ¹ Devolved AI invites new users to earn $50 in AGC upon successful verification, 
            plus an additional $50 for each active referral. The commencement of rewards is subject 
            to the market cap's ability to feasibly sustain disbursements. Devolved AI retains the 
            discretion to alter or discontinue the promotion in response to market and regulatory 
            conditions. Offer activation, modifications, and eligibility are contingent on user 
            engagement levels and market capitalization and are void where prohibited.
          </p>
        </div>
      </section>

      <div className="bg-[#E5E7EB] w-4/5 mx-auto border bottom-1" />
    </main>
  );
}

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
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
      {/* hero section */}
      <section className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})` }}>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
          <div className="text-center" style={{ maxWidth: '71.75rem' }}>
            <h1 className="font-bold text-4xl text-[#192033] md:text-3xl lg:text-4xl xl:text-5xl leading-normal mb-4 md:mb-6">
              AI has evolved.<br />
              So should its ownership.
            </h1>
            <p className="font-normal text-base md:text-lg lg:text-base xl:text-lg text-[#495167] leading-[2.375rem] mb-6 md:mb-0">
              Welcome to AI owned by you, the user. Built on blockchain <br/> 
              technology, Devolved AI embodies trust, transparency, and <br/>
              community governance. Vote, earn rewards, and own a stake in <br/>
              the future of AI—all powered by Argocoin.
            </p>
            <GetReferral/>
          </div>
        </div>
      </section>

      {/* What Drives Devolved AI? */}
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <Image
              src={HomeImage4}
              alt="What Drives Devolved AI Illustration"
              className="mt-5 w-[46.875rem] h-[44.42531rem] md:mt-0 md:w-[26.3125rem] md:h-[30rem] xl:w-[35rem]"
            />
          
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20" style={{ maxWidth: '45.25rem' }}>
              <div className="background-image" />
              <h1 className="text-[3.75rem] text-[#192033] font-bold font-weight-700">
                What Drives Devolved AI?
              </h1>
              <div>
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={variants}
                  className="text-[1.375rem] text-[#495167] font-light leading-[1.875rem]"
                >
                  We are more than just a platform; we are a movement aimed at redefining the 
                  relationship between AI and humanity. By using a decentralized approach, 
                  we ensure that our AI ecosystem is transparent, secure, and most importantly, 
                  governed by you.
                </motion.p>

                <AnimatePresence>
                  {showSecondParagraph && (
                    <motion.p
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={variants}
                      className="text-[1.375rem] text-[#495167] font-light leading-[1.875rem] mt-3"
                    >
                      Our mission is to create an AI that is powered by the people, for the people, 
                      ensuring shared prosperity and ethical development. Be a part of this revolutionary 
                      journey.
                    </motion.p>
                  )}
                </AnimatePresence>
                <button className="bg-[#A9A3B2] text-[#fff] font-medium leading-normal rounded-[0.3125rem] w-full md:w-[10rem] md:h-[3.125rem] mt-5"
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
            height: 120%;
            z-index: -1;
          }
        `}
        </style>
      </section>
      
      {/* Core Principles of Devolved AI */}
      <section className="flex flex-col rounded-[1rem] shadow-md m-10">
        <div className="gap-5 items-center justify-center"
          style={{
            backgroundImage: `url(${SectionBg4.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>

          <div className="flex flex-col text-center gap-3 mt-10">
            <h1 className="text-[3.75rem] text-[#192033] font-bold leading-normal">
              Core Principles of Devolved AI
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:container p-10">

            {/* Community Governed */}
            <div className="p-6 md:p-8 rounded-[1.24rem] bg-white hover:shadow-lg transition-all duration-300"
            style={{ maxWidth: '26.9375rem' }}>
              <Image className="w-[3.75rem] h-[3.75rem]" src={CommunityGovernedIcon} alt="community_governed_icon" />
              <h6 className="text-[1.875rem] text-[#29233B] font-medium leading-normal mt-3">
                Community Governed
              </h6>
              <p className="text-[1.125rem] text-[#495167] font-light leading-[1.875rem] mt-2">
                Have a say in the evolution of Devolved AI. Use your Argocoin to vote on proposals 
                and guide the trajectory of our decentralized ecosystem.
              </p>
            </div>

            {/* Shared Prosperity */}
            <div className="p-6 md:p-8 rounded-[1.24rem] bg-white hover:shadow-lg transition-all duration-300"
            style={{ maxWidth: '26.9375rem' }}>
              <Image className="w-[3.75rem] h-[3.75rem]" src={SharedProsperityIcon} alt="shared_prosperity_icon" />
              <h6 className="text-[1.875rem] text-[#29233B] font-medium leading-normal mt-3">
                Shared Prosperity
              </h6>
              <p className="text-[1.125rem] text-[#495167] font-light leading-[1.875rem] mt-2">
                Engage, contribute, and be rewarded. Our Proof of Value Protocol incentivizes your 
                valuable input, offering Argocoin as a reward for active participation.
              </p>
            </div>

            {/* Blockchain-based */}
            <div className="p-6 md:p-8 rounded-[1.24rem] bg-white hover:shadow-lg transition-all duration-300"
            style={{ maxWidth: '26.9375rem' }}>
              <Image className="w-[3.75rem] h-[3.75rem]" src={BlockchainBasedIcon} alt="blockchain_based_icon" />
              <h6 className="text-[1.875rem] text-[#29233B] font-medium leading-normal mt-3">
                Blockchain-based
              </h6>
              <p className="text-[1.125rem] text-[#495167] font-light leading-[1.875rem] mt-2">
                Experience a new level of transparency and security with our layer 1 blockchain. 
                Our decentralized foundation ensures the integrity and openness of all actions on 
                the platform.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Argocoin: The Essence of Community */}
      <section className="w-full my-10 md:mt-20 md:mb-0 3xl:container">
        <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
        style={{
          backgroundImage: `url(${SectionBg3.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '300px',
        }}>
          <div className="background-image" />
          <div className="w-full max-w-xl text-center" style={{ maxWidth: '67.8125rem' }}>
              <h1 className="text-[3.75rem] text-[#192033] font-bold leading-normal">
                Argocoin: The Essence of Community
              </h1>
              <p className="text-[1.375rem] text-[#495167] font-light leading-[1.875rem]">
                Argocoin (AGC) is your digital passport to Devolved AI's ecosystem. 
                It's not just a digital asset; <br/>
                it's your voting ticket, your reward, and your stake in the community.
              </p>
              <div className="flex justify-center">
                <button className="bg-[#A9A3B2] text-[#fff] font-medium leading-normal rounded-[0.3125rem] w-full md:w-[10rem] md:h-[3.125rem] mt-5">
                    LEARN MORE
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* The Tech Behind the Vision */}
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
              <div className="background-image" />
              <h1 className="text-[3.75rem] text-[#192033] font-bold leading-normal">
                The Tech Behind the Vision
              </h1>
              <p className="text-[1.375rem] text-[#495167] font-light leading-[1.875rem]">
                Starting with Natural Language Processing, we are setting the stage for 
                future innovations in Artificial General Intelligence, computer vision, 
                predictive analytics, and more.
              </p>
              <div className="justify-center">
                <button className="bg-[#A9A3B2] text-white font-medium text-[1rem] rounded-[0.3125rem] w-full md:w-[14.375rem] md:h-[3.125rem] mt-5">
                  EXPLORE TECHNOLOGY
                </button>
              </div>
          </div>
          <Image
              src={HomeImage3}
              alt="Be an Early Governor Illustration"
              className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[30rem] xl:w-[35rem]"
            />
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
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <Image
              src={HomeImage2}
              alt="Be an Early Governor Illustration"
              className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[30rem] xl:w-[35rem]"
            />
          
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
              <div className="background-image" />
              <h1 className="text-[3.75rem] text-[#192033] font-bold leading-normal">
                Be an Early Governor
              </h1>
              <p className="text-[1.375rem] text-[#495167] font-light leading-[1.875rem]">
                As an early adopter, you have the unique opportunity to shape Devolved AI's 
                future. Your governance will directly impact our development roadmap and 
                platform features.
              </p>
              <div className="justify-center">
                <button className="bg-[#A9A3B2] text-white font-medium text-[1rem] rounded-[0.3125rem] w-full md:w-[9.125rem] md:h-[3.125rem] mt-5">
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
      <section className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-10 gap-5">
          <div className="flex flex-col gap-10 p-10 items-center justify-center w-[66.875rem] h-[25.625rem]"
            style={{
              backgroundImage: `url(${HomeImage1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <h1 className="text-[#192033] text-[2.5rem] font-medium leading-normal text-center">
              Ready to be a part of AI's next (d)evolution?
            <br/>
              Sign up now.
            </h1>
            <GetReferral/>
          </div>
      </section>

      {/* Referel Text */}
      <section className="flex flex-col mt-12 md:px-10 md:gap-5 lg:gap-[5rem] lg:w-full lg:px-[3.5rem] xl:px-28 2xl:pl-[7.5rem] 3xl:container md:flex-row lg:justify-center mb-[3.75rem]">
        <div className="flex flex-col items-center py-[1.18675rem] md:py-0 md:items-start gap-[0.81rem] md:gap-3 ">
            <p className="text-[1rem] md:text-[1rem] leading-[1.25rem] text-center md:text-start font-normal text-[#323131]">
              ¹Devolved AI invites new users to earn $50 in AGC upon successful verification, 
              plus an additional $50 for each active referral. The commencement of rewards is subject 
              to the market cap's ability to feasibly sustain disbursements. Devolved AI retains the 
              discretion to alter or discontinue the promotion in response to market and regulatory 
              conditions. Offer activation, modifications, and eligibility are contingent on user 
              engagement levels and market capitalization and are void where prohibited.
            </p>
        </div>
      </section>

      <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
    </main>
  );
}

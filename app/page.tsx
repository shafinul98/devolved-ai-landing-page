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
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
          <div className="text-center" style={{ maxWidth: '71.75rem' }}>
            <h1 className="font-bold text-4xl text-[#192033] md:text-3xl lg:text-3xl xl:text-3xl leading-normal mb-4 md:mb-6">
              AI has evolved.<br />
              So should its ownership.
            </h1>
            <p className="font-normal text-[1.875rem;] md:text-[1.875rem;] lg:text-[1.875rem;] xl:text-[1.875rem;] text-[#495167] leading-[2.375rem] mb-6 md:mb-0">
              Welcome to AI owned by you, the user. Built on blockchain <br/> 
              technology, Devolved AI embodies trust, transparency, and <br/>
              community governance. Vote, earn rewards, and own a stake in <br/>
              the future of AI—all powered by Argocoin.
            </p>
            <div className="hidden md:block">
              <GetReferral />
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Devolved AI? */}
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center container mx-auto">
        <div className="flex flex-col items-center lg:flex-row justify-around lg:p-4 xl:p-8 md:p-8 md:mx-16 lg:mb-20 relative">
          <Image
            priority
            src={HomeImage4}
            alt="What Drives Devolved AI Illustration"
            className="mt-5 w-full md:w-[46.875rem] md:h-[44.42531rem;] xl:w-[46.875rem] max-w-full"
          />
          <div className="flex flex-col px-4 md:mt-16 md:max-w-[45.25rem] gap-5 xl:ms-4">
            <div className="background-image" />
            <p className="text-3xl text-[#192033] font-bold font-weight-700">
              What Drives Devolved AI?
            </p>
            <div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={variants}
                className="text-base text-gray-700 font-light leading-[1.875rem]"
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
                    className="text-base text-gray-700 font-light leading-[1.875rem] mt-3"
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
      <section className="flex flex-col rounded-[1rem] shadow-md m-4">
        <div className="items-center justify-center"
          style={{
            backgroundImage: `url(${SectionBg4.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>

          <div className="flex flex-col text-center gap-3 mt-10">
            <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#192033] font-bold leading-normal">
              Core Principles of Devolved AI
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:p-10">

            {/* Community Governed */}
            <div className="p-6 m-2 md:p-8 rounded-[1.24rem] bg-white hover:shadow-lg transition-all duration-300 max-w-[26.9375rem]">
              <Image 
              priority
              className="w-[3.75rem] h-[3.75rem]" 
              src={CommunityGovernedIcon} 
              alt="community_governed_icon" />
              <p className="text-[1.875rem] text-[#29233B] font-medium leading-normal mt-3">
                Community Governed
              </p>
              <p className="text-[1.125rem] text-[#495167] font-light leading-[1.875rem] mt-2">
                Have a say in the evolution of Devolved AI. Use your Argocoin to vote on proposals 
                and guide the trajectory of our decentralized ecosystem.
              </p>
            </div>

            {/* Shared Prosperity */}
            <div className="p-6 m-2 md:p-8 rounded-[1.24rem] bg-white hover:shadow-lg transition-all duration-300 max-w-[26.9375rem]">
              <Image
              priority
              className="w-[3.75rem] h-[3.75rem]" 
              src={SharedProsperityIcon} 
              alt="shared_prosperity_icon" />
              <p className="text-[1.875rem] text-[#29233B] font-medium leading-normal mt-3">
                Shared Prosperity
              </p>
              <p className="text-[1.125rem] text-[#495167] font-light leading-[1.875rem] mt-2">
                Engage, contribute, and be rewarded. Our Proof of Value Protocol incentivizes your 
                valuable input, offering Argocoin as a reward for active participation.
              </p>
            </div>

            {/* Blockchain-based */}
            <div className="p-6 m-2 md:p-8 rounded-[1.24rem] bg-white hover:shadow-lg transition-all duration-300 max-w-[26.9375rem]">
              <Image
              priority
              className="w-[3.75rem] h-[3.75rem]" 
              src={BlockchainBasedIcon} 
              alt="blockchain_based_icon" />
              <p className="text-[1.875rem] text-[#29233B] font-medium leading-normal mt-3">
                Blockchain-based
              </p>
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
      <section className="w-full my-10 md:mt-20 md:mb-0">
        <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
        style={{
          backgroundImage: `url(${SectionBg3.src})`,
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '450px',
        }}>
          
          <div className="w-full max-w-xl text-center">
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-normal">
                Argocoin: The Essence of Community
              </p>
              <p className="text-[1.375rem] text-[#495167] font-light leading-[1.875rem]">
                Argocoin (AGC) is your digital passport to Devolved AI's ecosystem. 
                It's not just a digital asset; <br/>
                it's your voting ticket, your reward, and your stake in the community.
              </p>
              <div className="flex mt-4">
                <button className="bg-[#A9A3B2] text-white font-medium text-base md:text-lg rounded-md w-full md:w-64 h-12">
                  LEARN MORE
                </button>
              </div>
          </div>
        </div>
      </section>

      {/* The Tech Behind the Vision */}
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center container mx-auto">
        <div className="flex flex-col items-center md:flex-row justify-around md:px-4 xl:px-8 md:mx-6 md:mb-10 relative">
          <div className="flex flex-col px-4 md:mt-10 gap-4 md:w-1/2 lg:w-2/3 md:ms-0">
            <div className="background-image w-full h-64 md:h-auto" />
            <p className="text-3xl md:text-4xl lg:text-5xl text-[#192033] font-bold leading-normal">
              The Tech Behind the Vision
            </p>
            <p className="text-base md:text-lg lg:text-base text-[#495167] font-light leading-7">
              Starting with Natural Language Processing, we are setting the stage for future 
              innovations in Artificial General Intelligence, computer vision, predictive analytics, and more.
            </p>
            <div className="flex mt-4">
              <button className="bg-[#A9A3B2] text-white font-medium text-base md:text-lg rounded-md w-full md:w-64 h-12">
                EXPLORE TECHNOLOGY
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              priority
              src={HomeImage3}
              alt="Be an Early Governor Illustration"
              className="w-full h-64 md:h-auto object-cover rounded-md m-3"
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
      <section className="w-full my-10 md:mt-20 md:mb-0 container items-center mx-auto">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <Image
              priority
              src={HomeImage2}
              alt="Be an Early Governor Illustration"
              className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[30rem] xl:w-[35rem]"
            />
          
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
              <div className="background-image" />
              <p className="text-3xl md:text-4xl lg:text-5xl text-[#192033] font-bold leading-normal">
                Be an Early Governor
              </p>
              <p className="text-base md:text-lg lg:text-base text-[#495167] font-light leading-7">
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
      <section className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5">
        <div className="flex flex-col gap-5 p-5 md:p-10 items-center justify-center w-full md:w-[66.875rem] max-h-[25.625rem] md:h-[30rem]"
        style={{
        backgroundImage: `url(${HomeImage1.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        }}>
          <p className="text-[#192033] text-[2.5rem] md:text-[2.5rem] font-medium leading-normal text-center">
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
      <section className="flex flex-col mt-8 md:px-4 lg:gap-5 lg:w-full lg:px-8 3xl:container md:flex-row lg:justify-center mb-4">
        <div className="flex flex-col items-center py-2 md:py-0 md:items-start gap-2 md:gap-3 ">
          <p className="text-sm md:text-base leading-[1.5rem] text-center md:text-left font-normal text-[#323131]">
            ¹ Devolved AI invites new users to earn $50 in AGC upon successful verification, 
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

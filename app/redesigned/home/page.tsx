"use client"

import Image from "next/image";
import HeroImage from "../../../public/home/hero-image.png"
import HomeImage1 from "../../../public/home/1.png" 
import HomeImage2 from "../../../public/home/2.png"
import HomeImage3 from "../../../public/home/3.png"
import HomeImage4 from "../../../public/home/4.png"
import SectionBg from "../../../public/home/section-bg.png"
import SectionBg2 from "../../../public/home/section-bg-2.png"
import SectionBg3 from "../../../public/home/section-bg-3.png"
import SectionBg4 from "../../../public/home/section-bg-4.png"
import SectionBg5 from "../../../public/home/section-bg-5.png"
import CommunityGovernedIcon from "../../../public/home/community_governed.svg"
import SharedProsperityIcon from "../../../public/home/shared_prosperity.svg"
import BlockchainBasedIcon from "../../../public/home/blockchain_based.svg"

import Button from "@/components/Custom Components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
      {/* hero section */}
      <section 
      className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
      style={{ backgroundImage: `url(${HeroImage.src})`}}>
        <div 
        className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 md:pl-12 lg:px-16 lg:pl-[4rem] xl:px-28 xl:pl-32 2xl:pl-[7.5rem] 3xl:container md:mt-[2.1rem] md:gap-5 mb-10 md:me-[6rem] lg:me-[10.5rem] xl:me-[7.5rem]">
          <div 
          className="text-center">
            <h1 
            className="font-bold text-[2.25rem] md:text-4rem leading-7 mb-3 text-[#192033]">
              AI has evolved.<br/><br/>
              So should its ownership.
            </h1>
            <p 
            className="font-normal text-xl mb-6 md:mb-0 md:text-xl text-[#495167] md:pr-36">
              Welcome to AI owned by you, the user. Built on blockchain technology, Devolved AI embodies trust, transparency, and community governance. Vote, earn rewards, and own a stake in the future of AI—all powered by Argocoin.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Devolved AI? */}
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <Image
              src={HomeImage4}
              alt="What Drives Devolved AI Illustration"
              className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
            />
          
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
              <div className="background-image" />
              <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                What Drives Devolved AI?
              </h1>
              <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
              We are more than just a platform; we are a movement aimed at redefining the 
              relationship between AI and humanity. By using a decentralized approach, 
              we ensure that our AI ecosystem is transparent, secure, and most importantly, 
              governed by you.
              </p>
              <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
              Our mission is to create an AI that is powered by the people, for the people, 
              ensuring shared prosperity and ethical development. Be a part of this revolutionary 
              journey.
              </p>
              <Button
                  title="LEARN MORE"
                  extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[12.75rem] md:h-[3.625rem] xl:me-16"
                />
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
      <section className="flex flex-col rounded-md shadow-lg m-20">
        <div className="gap-5 items-center justify-center"
          style={{
            backgroundImage: `url(${SectionBg4.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}>

          <div className="flex flex-col text-center gap-3 mt-10">
            <h1 
            className="text-[2rem] text-[#192033] font-bold font-ubuntu font-weight-700">
              Core Principles of Devolved AI
              </h1>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-[0.5rem] justify-center md:py-10 2xl:container">

          {/* Community Governed */}
            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/4">
              <Image src={CommunityGovernedIcon} alt="community_governed_icon" />
              <h6 
              className="text-[1.25rem] text-[#29233B]">
                Community Governed
              </h6>
              <p 
              className="text-[1rem] text-[#495167]">
              Have a say in the evolution of Devolved AI. Use your Argocoin to vote on proposals and 
              guide the trajectory of our decentralized ecosystem.
              </p>
            </div>

            {/* Shared Prosperity */}
            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/4">
              <Image src={SharedProsperityIcon} alt="shared_prosperity_icon" />
              <h6 className="text-[1.25rem] text-[#29233B]">
                Shared Prosperity
              </h6>
              <p className="text-[1rem] text-[#495167]">
              Engage, contribute, and be rewarded. Our Proof of Value Protocol incentivizes your 
              valuable input, offering Argocoin as a reward for active participation.
              </p>
            </div>

            {/* Blockchain-based */}
            <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/4">
              <Image src={BlockchainBasedIcon} alt="blockchain_based_icon" />
              <h6 className="text-[1.25rem] text-[#29233B]">
                Blockchain-based
              </h6>
              <p className="text-[1rem] text-[#495167]">
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
        <div 
        className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
        style={{
          backgroundImage: `url(${SectionBg3.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '300px',
        }}>
          <div className="background-image" />
          <div className="fw-full max-w-xl text-center">
              <h1 className="text-[2.15rem] text-[#192033] font-bold">
                Argocoin: The Essence of Community
              </h1>
              <p className="text-[1rem] text-[#495167]">
                Argocoin (AGC) is your digital passport to Devolved AI's ecosystem. 
                It's not just a digital asset; it's your voting ticket, your reward, 
                and your stake in the community.
              </p>
              <div className="flex justify-center">
                <Button
                    title="LEARN MORE"
                    extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[12.75rem] md:h-[3.625rem] xl:me-16 mt-5"
                  />
              </div>
          </div>
        </div>
      </section>

      {/* The Tech Behind the Vision */}
      <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
              <div className="background-image" />
              <h1 className="text-[2rem] text-[#192033] font-bold">
              The Tech Behind the Vision
              </h1>
              <p className="text-[1rem] text-[#495167]">
              Starting with Natural Language Processing, we are setting the stage for 
              future innovations in Artificial General Intelligence, computer vision, 
              predictive analytics, and more.
              </p>
              <Button
                  title="EXPLORE TECHNOLOGY"
                  extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[12.75rem] md:h-[3.625rem] xl:me-16 mt-5"
                />
          </div>

          <Image
              src={HomeImage3}
              alt="Be an Early Governor Illustration"
              className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
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
          width: 160%;
          height: 120%;
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
              className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
            />
          
          <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
              <div className="background-image" />
              <h1 className="text-[2rem] text-[#192033] font-bold">
                Be an Early Governor
              </h1>
              <p className="text-[1rem] text-[#495167]">
                As an early adopter, you have the unique opportunity to shape Devolved AI's 
                future. Your governance will directly impact our development roadmap and 
                platform features.
              </p>
              <Button
                  title="LEARN MORE"
                  extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[12.75rem] md:h-[3.625rem] xl:me-16 mt-5"
                />
          </div>
        </div>
        <style jsx>{`
    .background-image {
      background-image: url(${SectionBg.src});
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.4;
      top: 0;
      left: 0;
      position: absolute;
      width: 150%;
      height: 120%;
      z-index: -1;
    }
  `}</style>
      </section>

      {/* Ready to be a part of AI */}
      <section className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-10 gap-5">
          <div className="flex flex-col gap-10 p-10 items-center justify-center"
            style={{
              backgroundImage: `url(${HomeImage1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <h1 className="text-[#192033] text-start text-lg" 
            style={{ textAlign: 'center',
            fontSize: '2.5rem',
            fontStyle: 'normal',
            fontWeight: '500',
            lineHeight: 'norma'}}>
            Ready to be a part of AI's next (d)evolution?<br/>
            <br/>
            Sign up now.
            </h1>
            <Button
                title="JOIN THE REVOLUTION"
                extraStyles=" bg-[#FF6F00] text-white rounded-[0.3125rem] w-full md:w-[12.75rem] md:h-[3.625rem] xl:me-16"
              />
          </div>
      </section>

      {/* Referel Text */}
      <section className="flex flex-col mt-12 md:px-10 md:gap-5 lg:gap-[5rem] lg:w-full lg:px-[3.5rem] xl:px-28 2xl:pl-[7.5rem] 3xl:container md:flex-row lg:justify-center mb-[3.75rem]">
        <div className="flex flex-col items-center py-[1.18675rem] md:py-0 md:items-start gap-[0.81rem] md:gap-3 ">
            <p className="text-[1rem] md:text-[1rem] text-center md:text-start font-normal text-[#323131]">
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

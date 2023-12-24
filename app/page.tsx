"use client"

import Image from "next/image"
import HeroImage from "@/public/home/hero-image.webp"
import HomeImage2 from "@/public/home/2.webp"
import HomeImage3 from "@/public/home/3.webp"
import HomeImage4 from "@/public/home/4.webp"
import SectionBg from "@/public/home/section-bg-1.webp"
import SectionBg2 from "@/public/home/section-bg-2.webp"
import SectionBg3 from "@/public/home/section-bg-3.webp"
import SectionBg4 from "@/public/home/section-bg-4.webp"
import SectionBg5 from "@/public/home/section-bg-5.webp"
import CommunityGovernedIcon from "@/public/home/community_governed.svg"
import SharedProsperityIcon from "@/public/home/shared_prosperity.svg"
import BlockchainBasedIcon from "@/public/home/blockchain_based.svg"
import { useRouter } from 'next/navigation'
import DisCordImageNoHover from "@/public/Join_us_on_discord_button_no_hover.webp"
import DisCordImageHover from "@/public/Join_us_on_discord_button_hover.webp"
import { useState } from "react"
import JoinUsonDiscord from "@/components/customComponents/JoinUsonDiscord"
import SwapOnUniswap from "@/components/customComponents/SwapOnUniswap"
import NowListed from "@/components/customComponents/NowListed"

export default function Home() {
  const router = useRouter();

  const [discordImage, setDiscordImage] = useState(DisCordImageNoHover);

  const handleDiscordButtonClick = () => {
    setDiscordImage(DisCordImageHover);
    window.open('https://discord.com/invite/devolvedai', '_blank');
  };

  const handleMouseEnter = () => {
    setDiscordImage(DisCordImageHover);
  };

  const handleMouseLeave = () => {
    setDiscordImage(DisCordImageNoHover);
  };

  const handleArgoCoinClick = () => {
    router.push('/argoCoin');
  };

  const handleButtonClick = () => {
    router.push('/community');
  };

  const handleLearnMoreClick = () => {
    router.push('/about');
  };
  
  const handleExploreTechnologyClick = () => {
    router.push('/technology');
  };

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between p-0 md:p-0">
      {/* hero section */}
      <section className="w-full xl:h-screen h-[55rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})` }}>
          <NowListed/>
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 xl:mt-3 mt-[10rem]">
              <div className="text-center">
                  <h1 className="font-bold text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[4.8125rem] leading-[2.75rem] xl:leading-[5.50rem] xl:mb-5 text-[#192033] xl:max-w-[82.78975rem]">
                    AI has evolved.<br />
                    So should its ownership.
                  </h1>
                  <p className="font-normal text-[1.25rem] md:text-[1.375rem] lg:text-[1.5rem] xl:text-[1.875rem] leading-[1.875rem] xl:leading-[2.375rem] text-[#495167] m-5 xl:m-5 max-w-[24rem] md:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[71.375rem]">
                    Welcome to AI owned by you, the user. Built on blockchain
                    technology, Devolved AI embodies trust, transparency, and
                    community governance. Vote, earn rewards, and own a stake in
                    the future of AI—all powered by Argocoin.
                  </p>
                  <div className="justify-center pt-2 xl:pt-3">
                    {/* <GetReferral /> */}
                      <p className="font-normal text-[1.125rem] md:text-[1.375rem] lg:text-[1.5rem] xl:text-[1.275rem] leading-[1.875rem] xl:leading-[2.375rem] text-[#495167] m-5 xl:m-3 max-w-[24rem] md:max-w-[32rem] lg:max-w-[40rem] xl:max-w-[71.375rem]">
                          Be Part of the Genesis: Join our Discord to shape the future of Devolved AI. 
                          Engage, contribute, and grow with our community from the ground up.
                      </p>
                      <button className="button w-[15.4675rem] h-auto"
                      onClick={handleDiscordButtonClick}
                      onMouseEnter={handleMouseEnter} 
                      onMouseLeave={handleMouseLeave}>
                        <Image priority src={discordImage} alt="Discord Image" />
                      </button>
                  </div>
              </div>
          </div>
      </section>

      {/* What Drives Devolved AI? */}
      <section className="my-10 items-center 3xl:container">
        <div className="flex flex-col items-center lg:flex-row justify-around lg:px-5 xl:px-20 lg:mb-20 relative">
          <div className="m-5 xl:m-0">
            <Image
              priority
              src={HomeImage4}
              alt="What Drives Devolved AI Illustration"
              className="inset-0 w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto"
            />
          </div>
          <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-0">
            <div className="background-image" />
            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
              What Drives Devolved AI?
            </p>
            <div className="mt-2 mb-2">
              <p className="text-[1.125rem] xl:text-[1.375rem] text-[#495167] leading-[1.875rem] font-light max-w-[45.25rem]">
                We are more than just a platform; we are a movement aimed at redefining the relationship between AI 
                and humanity. By using a decentralized approach, we ensure that our AI ecosystem is transparent, 
                secure, and most importantly, governed by you.
              </p>
              <p className="text-[1.125rem] xl:text-[1.375rem] text-[#495167] leading-[1.875rem] font-light max-w-[45.25rem] mt-3">
                Our mission is to create an AI that is powered by the people, for the people, 
                ensuring shared prosperity and ethical development. Be a part of this revolutionary journey.
              </p>
              <button className="uppercase bg-[#A9A3B2] text-white font-medium text-[1rem] leading-normal rounded-[0.3125rem] w-[10rem] h-[3.125rem] mt-5"
                onClick={() => handleLearnMoreClick()}>
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
              width: 155%;
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

              <div className="flex flex-col text-center max-w-xxl mt-10 xl:mt-10">
                  <p className="text-[1.75rem] xl:text-[3.75rem] leading-normal text-[#192033] font-bold">
                    Core Principles of Devolved AI
                  </p>
              </div>
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 p-2 mb-10 xl:mb-10">
                  
                  {/* Community Governed */}
                  <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                      <Image priority className="inset-0 w-[3.75rem] h-auto" src={CommunityGovernedIcon} alt="IntegrityIcon"/>
                      <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-3">
                        Community Governed
                      </p>
                      <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-2">
                        Have a say in the evolution of Devolved AI. Use your Argocoin to vote on proposals 
                        and guide the trajectory of our decentralized ecosystem.
                      </p>
                  </div>

                  {/* Shared Prosperity */}
                  <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                      <Image priority className="inset-0 w-[3.75rem] h-auto" src={SharedProsperityIcon} alt="InnovationIcon" />
                      <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-3">
                        Shared Prosperity
                      </p>
                      <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-2">
                        Engage, contribute, and be rewarded. Our Proof of Value Protocol incentivizes your 
                        valuable input, offering Argocoin as a reward for active participation.
                      </p>
                  </div>

                  {/* Blockchain-based */}
                  <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                      <Image priority className="w-[3.75rem] h-auto" src={BlockchainBasedIcon} alt="InclusivityIcon" />
                      <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-3">
                        Blockchain-based
                      </p>
                      <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-2">
                        Experience a new level of transparency and security with our layer 1 blockchain. 
                        Our decentralized foundation ensures the integrity and openness of all actions on 
                        the platform.
                      </p>
                  </div>

              </div>
          </div>
      </section>

      {/* Argocoin: The Essence of Community */}
      <section className="flex flex-col my-10 items-center 3xl:container">
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
                  <p className="font-bold text-[1.75rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                    Argocoin: The Essence of Community
                  </p>
                  <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[67.8125rem]">
                    Argocoin (AGC) is your digital passport to Devolved AI's ecosystem. 
                    It's not just a digital asset;
                    it's your voting ticket, your reward, and your stake in the community.
                  </p>
                  <div className="flex justify-center mt-4">
                    <button onClick={handleArgoCoinClick} className="uppercase bg-[#A9A3B2] text-white font-medium text-[1rem] rounded-[0.3125rem] w-[10rem] h-[3.125rem]">
                      LEARN MORE
                    </button>
                  </div>
              </div>
          </div>
      </section>

      {/* The Tech Behind the Vision */}
      <section className="w-full my-10 items-center 3xl:container">
        <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 xl:mx-16 lg:mb-20 relative">
          
          <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-0">
            <div className="background-image w-full h-64 md:h-auto" />
            <p className="font-bold text-[1.75rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033] max-w-[31.625rem]">
              The Tech Behind the Vision
            </p>
            <p className="text-[1rem] xl:text-[1.375rem] text-[#495167] leading-[1.875rem] font-light max-w-[44.125rem]">
              Starting with Natural Language Processing, we are setting the stage for future 
              innovations in Artificial General Intelligence, computer vision, predictive analytics, and more.
            </p>
            <div className="flex mt-4">
              <button className="uppercase bg-[#A9A3B2] text-white font-medium text-[1rem] rounded-[0.3125rem] w-[14.375rem] h-[3.125rem]"
              onClick={() => handleExploreTechnologyClick()}>
                EXPLORE TECHNOLOGY
              </button>
            </div>
          </div>

          <div className="m-5 xl:m-0">
            <Image
              priority
              src={HomeImage3}
              alt="Be an Early Governor Illustration"
              className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
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
              width: 140%;
              height: 90%;
              z-index: -1;
            }
          `}
        </style>
      </section>

      {/* Be an Early Governor */}
      <section className="w-full my-10 items-center 3xl:container">
        <div className="flex flex-col items-center xl:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
          <div className="m-5 xl:m-0">
            <Image
                priority
                src={HomeImage2}
                alt="Be an Early Governor Illustration"
                className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
              />
          </div>
          <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
              <div className="background-image" />
              <p className="font-bold text-[1.75rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                Be an Early Governor
              </p>
              <p className="text-[1rem] xl:text-[1.375rem] text-[#495167] leading-[1.875rem] font-light max-w-[44.125rem]">
                As an early adopter, you have the unique opportunity to shape Devolved AI's 
                future. Your governance will directly impact our development roadmap and 
                platform features.
              </p>
              <div className="flex mt-4">
                <button className="uppercase bg-[#A9A3B2] text-white font-medium text-[1rem] rounded-[0.3125rem] w-[9.125rem] h-[3.125rem]"
                onClick={handleButtonClick}>
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
            width: 140%;
            height: 70%;
            z-index: -1;
          }
  `}</style>
      </section>

      {/* Ready to be a part of AI */}
      <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5 3xl:container">
        <JoinUsonDiscord/>
      </section>

      <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
    </main>
  );
}

"use client"

import React from 'react';
import Image from "next/image";
import HeroImage from "@/public/argoCoin/hero-image.webp"
import Image1 from "@/public/argoCoin/image1.webp"
import TextBG from "@/public/argoCoin/text-bg.webp"
import Image2 from "@/public/argoCoin/image2.webp"
import Background1 from "@/public/argoCoin/bg1.webp"
import Image3 from "@/public/argoCoin/image3.webp"
import Image4 from "@/public/argoCoin/image4.webp"
import Image5 from "@/public/argoCoin/image5.webp"
import Image6 from "@/public/argoCoin/image6.webp"
import Image7 from "@/public/argoCoin/image7.webp"
import SectionBg3 from "@/public/home/section-bg-3.webp"
import GetReferral from "@/components/customComponents/GetReferral/ViralLoopsForm"
import { EarlyAccessForm } from "@/components/customComponents/EarlyAccessForm"
import SignUpNow from '@/components/customComponents/SignUpNow'

export default function ArgoCoin() {
    const handleButtonClick = () => {
        window.open('https://devolved-ai.gitbook.io/devolved-ai-whitepaper/', '_blank');
    };
    return (
        <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
            {/* hero section */}
            <section className="w-full xl:h-screen h-[67rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${HeroImage.src})`}}>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-3">
                    <div className="text-center">
                        <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal xl:mb-5 text-[#192033] xl:max-w-[82.78975rem]">
                            Argocoin:<br/>
                            Fueling the AI Revolution
                        </h1>
                        <p className="font-normal text-[1.25rem] xl:text-[1.875rem] leading-[1.875rem] xl:leading-[2.375rem] text-[#495167] m-5 xl:m-5 max-w-[24rem] xl:max-w-[71.375rem]">
                            Step into the future with Argocoin:  The Cornerstone of Devolved AI. Anchored as
                            the native token on our Layer 1 blockchain, AGC isn’t just a digital currency – it's the
                            driving force behind a new era of AI-powered breakthroughs.
                        </p>
                        <div className="justify-center">
                            <GetReferral />
                        </div>
                    </div>
                </div>
            </section>

            {/* A Revolutionary Native Cryptocurrency */}
            <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
                <div className="flex flex-col items-center justify-around xl:flex-row xl:px-20 relative">
                    <div className="m-5 xl:m-0">
                        <Image
                        priority
                        className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                            src={Image1}
                            alt="A Revolutionary Native Cryptocurrency Illustration"
                            />
                    </div>
                    
                    <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-10">
                        <div className="background-image" />
                        <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                            Argocoin Unveiled
                        </p>
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                            A Revolutionary Native <br />
                            Cryptocurrency
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            Argocoin (AGC) is not just a cryptocurrency; it's the linchpin of Devolved 
                            AI's mission to decentralize the future of Artificial Intelligence. 
                            As the proprietary digital currency on our layer 1 blockchain
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            AGC stands at the forefront of a new digital economy - set for launch to empower 
                            community-driven innovation and governance.
                        </p>
                        <button onClick={handleButtonClick}
                            className=" uppercase bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full h-[3.125rem] xl:w-[10rem] xl:h-[3.125rem] mt-5">
                            WHITEPAPER
                        </button>
                    </div>
                </div>
                <style jsx>
                {`
                    .background-image {
                        background-image: url(${TextBG.src});
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: 1;
                        top: 0;
                        left: 0;
                        position: absolute;
                        width: 150%;
                        height: 110%;
                        z-index: -1;
                    }
                `}
                </style>
            </section>

            {/* Forge Value, Earn AGC */}
            <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center xl:flex-row xl:px-20 relative">
                    <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-10">
                        <div className="background-image" />
                        <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                            Earning Mechanisms of Argocoin
                        </p>
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                            Forge Value, Earn AGC
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            Though AGC is yet to be released, the anticipation is high for the multitude of 
                            ways users will be able to earn AGC. From validating network transactions to 
                            contributing valuable data for AI training, our Proof of Value (PoV) protocol 
                            is designed to reward every valuable action within the ecosystem.
                        </p>
                    </div>
                    <div className="m-5 xl:m-0">
                        <Image
                            priority
                            src={Image2}
                            alt="Forge Value, Earn AGC Illustration"
                            className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                        />
                    </div>
                </div>
                <style jsx>
                    {`
                        .background-image {
                            background-image: url(${Background1.src});
                            background-size: contain;
                            background-position: center;
                            background-repeat: no-repeat;
                            opacity: 1;
                            bottom: 0;
                            right: 0;
                            position: absolute;
                            width: 140%;
                            height: 120%;
                            z-index: -1;
                        }
                    `}
                </style>
            </section>

            {/* Your Stake, Your Voice */}
            <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
                <div className="flex flex-col items-center justify-around xl:flex-row xl:px-20 relative">
                    <div className="m-5 xl:m-0">
                        <Image
                        priority
                        className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                            src={Image3}
                            alt="Your Stake, Your Voice Illustration"
                            />
                    </div>
                    <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-10">
                        <div className="background-image" />
                        <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                            Argocoin and Its Role in Governance
                        </p>
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                            Your Stake, Your Voice
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            Argocoin is not just currency; it's a stake in the future of AI. 
                            Upon release, AGC holders will exercise their governance rights, 
                            shaping the ecosystem's policies, and making decisions that will 
                            direct the platform's evolution - all through a transparent, 
                            democratic voting process powered by blockchain.
                        </p>
                    </div>
                </div>
                <style jsx>
                {`
                    .background-image {
                        background-image: url(${TextBG.src});
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: 1;
                        top: 0;
                        left: 0;
                        position: absolute;
                        width: 150%;
                        height: 120%;
                        z-index: -1;
                    }
                `}
                </style>
            </section>

            {/* Designed for Sustainability and Growth */}
            <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center justify-around xl:flex-row xl:px-20 relative">
                    <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-10">
                        <div className="background-image" />
                        <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                            Tokenomics and Utility
                        </p>
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                            Designed for <br/> Sustainability and Growth
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            The economic model behind AGC balances new token creation with a deflationary 
                            mechanism to ensure a stable and growing ecosystem. The utility of AGC will go 
                            beyond transactional use; it's the key to accessing enhanced AI services, 
                            participating in the ecosystem, and incentivizing growth and innovation.
                        </p>
                    </div>
                    <div className="m-5 xl:m-0">
                        <Image
                            priority
                            src={Image4}
                            alt="Designed for Sustainability and Growth Illustration"
                            className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                        />
                    </div>
                </div>
                <style jsx>
                    {`
                        .background-image {
                            background-image: url(${TextBG.src});
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

            {/* Joining the Argocoin Ecosystem */}
            <section className="flex flex-col w-full my-20 items-center 3xl:container">
                <div className="lg:px-4 xl:px-8 md:mx-16 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
                style={{
                    backgroundImage: `url(${SectionBg3.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}>
                    <div className="background-image" />
                    <div className="flex flex-col max-w-xxl gap-5 text-center">
                        <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                            Joining the Argocoin Ecosystem
                        </p>
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                            Joining the Argocoin Ecosystem
                        </p>
                        <p className="text-[1.25rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[86.0625rem]">
                            Join us on the ground floor of this revolutionary project. 
                            By becoming an early AGC holder, you not only stand to benefit from 
                            the ecosystem's growth but also become part of a movement to democratize AI, 
                            contributing to a platform that is truly community-driven and transparent.
                        </p>
                        <div className="hidden xl:flex justify-center">
                            <EarlyAccessForm>
                            <button className="uppercase bg-[#A9A3B2] font-bold leading-normal text-white text-[1rem] rounded-[0.625rem] xl:w-[14.5625rem] xl:h-[3.125rem] mt-5">
                                JOIN THE REVOLUTION
                            </button>
                            </EarlyAccessForm>
                        </div>
                    </div>
                </div>
            </section>

            <div className="bg-gradient-to-t from-[#F1F2F5] via-transparent to-[#fff] my-20">
                
                {/* Future Vision and Expansion */}
                <section className="flex flex-col w-full my-10 items-center 3xl:container">
                    <div className="flex flex-col items-center justify-around xl:flex-row xl:px-20 relative">
                        <div className="m-5 xl:m-0">
                            <Image
                            priority
                            className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                                src={Image5}
                                alt="Future Vision and Expansion Illustration"
                                />
                        </div>
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-10">
                            <div className="background-image" />
                            <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                                Future Vision and Expansion
                            </p>
                            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                                Future Vision and <br/>  Expansion
                            </p>
                            <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                                The journey doesn't end with the release of AGC. We have a roadmap that 
                                includes expanding into modules like computer vision and predictive analytics, 
                                creating a comprehensive suite of AI tools governed by AGC holders - ensuring 
                                a continuously evolving and advancing ecosystem.
                            </p>
                        </div>
                    </div>
                    <style jsx>
                    {`
                        .background-image {
                            background-image: url(${TextBG.src});
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

                {/* Security and Stability Measures */}
                <section className="flex flex-col w-full my-20 items-center 3xl:container">
                    <div className="flex flex-col-reverse items-center justify-around xl:flex-row xl:px-20 relative">
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-10">
                            <div className="background-image" />
                            <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                                Security and Stability Measures
                            </p>
                            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                                Security and <br/>Stability Measures
                            </p>
                            <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                                We commit to the highest standards of security and economic resilience. 
                                The launch will be accompanied by strategies to prevent market manipulation and ensure a fair distribution, while also prioritizing the stability and long-term viability of AGC.
                            </p>
                        </div>
                        <div className="m-5 xl:m-0">
                            <Image
                            priority
                            src={Image6}
                            alt="Security and Stability Measures Illustration"
                            className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                            />
                        </div>
                    </div>
                    <style jsx>
                    {`
                        .background-image {
                            background-image: url(${TextBG.src});
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

                {/* Your Pathway to Being a Part of the AI Evolution */}
                <section className="flex flex-col w-full my-20 items-center 3xl:container">
                    <div className="flex flex-col items-center justify-around xl:flex-row xl:px-20 relative">
                        <div className="m-5 xl:m-0">
                            <Image 
                            priority
                            className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                            src={Image7}
                            alt="Your Pathway to Being a Part of the AI Evolution Illustration"
                            />
                        </div>
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-10">
                            <div className="background-image" />
                            <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                                Take Action
                            </p>
                            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                                Your Pathway to Being a <br/> Part of the AI Evolution
                            </p>
                            <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                                Argocoin is not just currency; it's a stake in the future of AI. 
                                Upon release, AGC holders will exercise their governance rights, 
                                shaping the ecosystem's policies, and making decisions that will direct 
                                the platform's evolution - all through a transparent, democratic voting 
                                process powered by blockchain.
                            </p>
                        </div>
                    </div>
                    <style jsx>
                    {`
                        .background-image {
                            background-image: url(${TextBG.src});
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
            </div>

            {/* Ready to be a part of AI */}
            <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5">
                <SignUpNow/>
            </section>

            <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
        </main>
    );
}

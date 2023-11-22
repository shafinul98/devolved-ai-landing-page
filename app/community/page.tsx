"use client"

import Image from "next/image";
import HeroImage from "../../public/technology/hero-image.webp"

import Image1 from "../../public/community/image1.webp"
import Background1 from "../../public/technology/bg1.webp"
import Image2 from "../../public/community/image2.webp"
import Background2 from "../../public/technology/bg2.webp"
import Background3 from "../../public/technology/bg3.webp"
import BackgroundUseCase from "../../public/about/bg3.webp"
import Image3 from "../../public/technology/image3.webp"
import Background4 from "../../public/technology/bg4.webp"
import TextBg from "../../public/about/text-bg.webp"
import Button from "@/components/customComponents/Button";

import DiverseLeadershipIcon from "../../public/community/diverse_leadership_opportunities_icon.svg"
import AGCGrantsIcon from "../../public/community/agc_grants_for_value_adding_communities_icon.svg"
import AutonomyIcon from "../../public/community/autonomy_in_governance_icon.svg"
import EarnIcon from "../../public/community/earn_and_influence_across_fields_icon.svg"

import EstablishIcon from "../../public/community/establish_your_community.svg"
import DesignIcon from "../../public/community/design_your_governance.svg"
import EarningIcon from "../../public/community/earning_and_utilizing_AGC.svg"

import Steps from "../../public/community/steps.svg"
import CoreDetailsCard from "@/components/customComponents/CoreDetailsCard";
import { useState } from "react";
import GetReferral from "@/components/customComponents/GetReferral";


export default function Community() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
      {/* community hero section */}
        <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
                <div className="text-center">
                    <h1 className="font-bold text-[2.75rem] md:text-2xl lg:text-3xl xl:text-6xl leading-normal mb-5 text-[#192033] max-w-[82.78975rem]">
                        Introduction to CommUnity
                    </h1>
                </div>
            </div>
        </section>

        {/* Welcome to CommUnity */}
        <section className="w-full my-10 items-center 3xl:container">
            <div className="flex flex-col items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <div className="m-5 xl:m-0">
                    <Image
                        priority
                        src={Image1}
                        alt="Proof of Value (PoV) Protocol Illustration"
                        className="w-[50rem] h-auto md:w-[50rem] md:h-auto lg:w-[50rem] lg:h-auto xl:w-[50rem] xl:h-auto rounded-[1.25rem]"
                    />
                </div>
                <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
                        Welcome to CommUnity
                    </p>
                    <p className="text-[1rem] text-[#495167] font-light max-w-[45.25rem]">
                        a vibrant and diverse feature of the Devolved AI platform. 
                        CommUnity is a realm of collaboration, innovation, and self-governance, 
                        where users from various fields can create, lead, and grow their own communities.
                    </p>
                    <p className="text-[1rem] text-[#495167] font-light max-w-[45.25rem]">
                        It's not just about AI; whether your passion lies in blockchain, 
                        UI/UX design, or any other tech-centric area, CommUnity is your space to 
                        flourish within the Devolved AI ecosystem.
                    </p>
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

        {/* What is CommUnity? */}
        <section className="w-full my-10 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
                        What is CommUnity?
                    </p>
                    <p className="text-[1rem] text-[#495167] font-light max-w-[45.25rem]">
                        CommUnity is a unique aspect of the Devolved AI platform, 
                        offering users the freedom to establish and manage communities 
                        in a wide array of tech-related fields. From blockchain enthusiasts 
                        to UI/UX designers, each CommUnity is a hub for like-minded individuals 
                        to collaborate, innovate, and influence their respective domains.
                    </p>
                    <Button title="LEARN MORE"
                    extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[9.75rem] md:h-[2.625rem] mt-5 xl:me-16"
                    />
                </div>
                <div className="m-5 xl:m-0">
                    <Image
                    priority
                    src={Image2}
                    alt="Layer 1 Blockchain Illustration"
                    className="w-[50rem] h-auto md:w-[50rem] md:h-auto lg:w-[50rem] lg:h-auto xl:w-[50rem] xl:h-auto rounded-[1.25rem]"
                    />
                </div>
            </div>
            <style jsx>
                {`
                .background-image {
                    background-image: url(${Background2.src});
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: 1;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    width: 170%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* Why Join CommUnity? */}
        <section className="flex flex-col my-10 m-5">
            <div className="flex flex-col rounded-[1rem] shadow-md gap-5 items-center justify-center"
                style={{
                backgroundImage: `url(${Background3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}>

                <div className="flex flex-col text-center max-w-xxl gap-5 m-5">
                    <p className="text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033] font-bold">
                        Why Join CommUnity?
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 3xl:container p-5">
                    
                    {/* Diverse Leadership Opportunities */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={DiverseLeadershipIcon} alt="Diverse"/>
                        <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                            Diverse Leadership Opportunities
                        </p>
                        <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            Create and lead a community in your area of expertise, 
                            be it blockchain, UI/UX, AI, or any tech-related field.
                        </p>
                    </div>

                    {/* AGC Grants for Value-Adding Communities */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={AGCGrantsIcon} alt="AGC" />
                        <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                            AGC Grants for Value-Adding Communities
                        </p>
                        <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            Exceptional communities that significantly 
                            contribute to their fields can earn AGC grants for further development and impact.
                        </p>
                    </div>

                    {/* Autonomy in Governance */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={AutonomyIcon} alt="Autonomy" />
                        <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                            Autonomy in Governance
                        </p>
                        <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            Establish your community's governance, guiding 
                            its growth and direction within the Devolved AI platform.
                        </p>
                    </div>

                    {/* Autonomy in Governance */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={EarnIcon} alt="blockchain_based_icon" />
                        <p className="text-[1.25rem] text-[#29233B] font-medium mt-3">
                            Earn and Influence Across Fields
                        </p>
                        <p className="text-[1.125rem] md:text-xl lg:text-xl xl:text-xl leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            Engage in meaningful contributions, share expertise, 
                            and earn AGC rewards for your community’s positive impact.
                        </p>
                    </div>

                </div>
            </div>
            <style jsx>
                {`
                .background-image {
                    background-image: url(${Background2.src});
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: 1;
                    top: 0;
                    bottom: 0;
                    position: absolute;
                    width: 170%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* User Case Examples */}
        
        <section className="flex flex-col w-full h-auto my-10 m-5 items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${BackgroundUseCase.src})` 
            }}>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center">
                    <div className="flex flex-col text-center max-w-xxl m-5">
                        <p className="text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#fff] font-bold">
                            User Case Examples
                        </p>
                    </div>

                    <div className="flex justify-center text-white xl:ml-0 xl:mr-10">
                        <div className="flex items-center justify-center mb-10">
                            <Image src={Steps} alt={"steps"} className="w-[5rem] h-[25rem]" />
                        </div>
                        <ol className="relative text-gray-500 dark:text-gray-400">
                            <li className="mb-4 md:mb-6 lg:mb-8 xl:mb-10">
                                <div className="w-[25rem] h-[10rem] gap2 p-5 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <p className="text-[0.80rem] leading-normal text-[#fff] font-bold">
                                        Case 1
                                    </p>
                                    <p className="text-[0.80rem] text-[#fff] leading-normal font-medium">
                                        Blockchain Expert Ben
                                    </p>
                                    <p className="text-[0.70rem] text-[#E0E0E0] font-light leading-normal max-w-[60.625rem]">
                                        Ben starts a blockchain-focused CommUnity.
                                        His group’s innovative ideas and projects
                                        in blockchain technology earn it an AGC grant,
                                        enhancing its role within the Devolved AI ecosystem.
                                    </p>
                                </div>
                            </li>

                            <li className="mb-5">
                                <div className="w-[25rem] h-[10rem] gap-2 p-5 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <p className="text-white font-bold font-ubuntu font-weight-700 text-[1rem] mb-1">
                                        Case 2
                                    </p>
                                    <p className="text-white font-normal font-ubuntu font-weight-500 text-[0.80rem] mb-1">
                                        UI/UX Designer Uma
                                    </p>
                                    <p className="text-[#E0E0E0] font-light font-ubuntu font-weight-300 text-[0.70rem] leading-relaxed">
                                        Uma creates a CommUnity dedicated to exploring the latest trends in UI/UX design. 
                                        She leads the community in workshops and collaborative projects,
                                        earning recognition and AGC grants for their contributions to the field.
                                    </p>
                                </div>
                            </li>

                            <li className="mb-10">
                                <div className="w-[25rem] h-[10rem] gap-2 p-5 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <p className="text-white font-bold font-ubuntu font-weight-700 text-[1rem] mb-1">
                                        Case 3
                                    </p>
                                    <p className="text-white font-normal font-ubuntu font-weight-500 text-[0.80rem] mb-1">
                                        Coding Enthusiast Carlos
                                    </p>
                                    <p className="text-[#E0E0E0] font-light font-ubuntu font-weight-300 text-[0.70rem] leading-relaxed">
                                        Carlos forms a CommUnity for coding enthusiasts, offering a space for learning, discussion,
                                        and project collaboration. The community becomes a valuable resource for coding knowledge and practice within Devolved AI, earning AGC grants for its educational impact.
                                    </p>
                                </div>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>
        </section>

        {/* Building and Governing Your CommUnity */}
        <section className="flex flex-col w-full my-10 items-center 3xl:container">
            <div className="flex flex-col text-center m-5">
                <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-normal text-[#192033] font-bold">
                Building and Governing Your CommUnity
                </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
                <CoreDetailsCard
                title="Establish Your Community"
                description="Within Devolved AI, create a CommUnity in your area of interest, be it tech, design, development, or any other field."
                image={EstablishIcon}
                />
                <CoreDetailsCard
                title="Design Your Governance"
                description="You hold the reins to define your community's governance, ensuring alignment with your goals and vision."
                image={DesignIcon}
                />
                <CoreDetailsCard
                title="Earning and Utilizing AGC"
                description="Guide your community to add value within the Devolved AI ecosystem and receive AGC grants to fuel your initiatives."
                image={EarningIcon}
                />
            </div>
        </section>


        {/* Why Create Your CommUnity? */}
        <section className="flex flex-col w-full my-10 items-center 3xl:container">
                <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
                style={{
                    backgroundImage: `url(${Background4.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}>
                    <div className="background-image" />
                    <div className="flex flex-col max-w-xxl gap-5 text-center">
                        <p className="font-bold text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033]">
                            Why Create Your CommUnity?
                        </p>
                        <p className="text-[0.90rem] md:text-xl lg:text-2xl xl:text-2xl text-[#495167] font-light max-w-[86.0625rem]">
                            By creating a CommUnity within the Devolved AI platform, 
                            you position yourself at the forefront of your chosen field. 
                            It’s an opportunity to lead, to innovate, and to make a significant 
                            impact in your area of expertise. Your community can shape discussions, 
                            drive advancements, and be rewarded for its contributions to the broader 
                            tech landscape.
                        </p>
                    </div>
                </div>
        </section>

        {/* Ready to be a part of AI */}
        <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5 3xl:container">
            <div className="flex flex-col gap-5 p-3 md:p-6 rounded-md shadow-md items-center justify-center w-[20.875rem] xl:w-[66.875rem] max-h-[30rem] xl:h-[45rem]"
                style={{
                    backgroundImage: `url(${Image3.src})`,
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

        <div className="bg-[#E5E7EB] w-4/5 mx-auto border bottom-1" />

    </main>
  );
}

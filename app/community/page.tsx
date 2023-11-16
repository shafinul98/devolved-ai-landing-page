"use client"

import Image from "next/image";
import HeroImage from "../../public/technology/hero-image.png"

import Image1 from "../../public/community/image1.png"
import Background1 from "../../public/technology/bg1.png"
import Image2 from "../../public/community/image2.png"
import Background2 from "../../public/technology/bg2.png"
import Background3 from "../../public/technology/bg3.png"
import BackgroundUseCase from "../../public/about/bg3.webp"
import Image3 from "../../public/technology/image3.png"
import Background4 from "../../public/technology/bg4.png"
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


export default function Community() {

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
      {/* community hero section */}
        <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
            <div className="text-center">
            <h1 
            className="font-black text-[2.75rem] md:text-[3.75rem] leading-11 mb-5 text-[#192033]">
                Introduction to CommUnity
            </h1>
            </div>
        </div>
        </section>

        {/* Welcome to CommUnity */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <Image
                    src={Image1}
                    alt="Proof of Value (PoV) Protocol Illustration"
                    className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[38rem] xl:w-[37rem]"
                />

                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.30rem] text-[#192033] font-ubuntu font-black font-weight-700">
                        Welcome to CommUnity
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300">
                        a vibrant and diverse feature of the Devolved AI platform. 
                        CommUnity is a realm of collaboration, innovation, and self-governance, 
                        where users from various fields can create, lead, and grow their own communities.
                    </p>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300">
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
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.50rem] text-[#192033] font-ubuntu font-black font-weight-700">
                        What is CommUnity?
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300">
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

                <Image
                    src={Image2}
                    alt="Layer 1 Blockchain Illustration"
                    className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[38rem] xl:w-[37rem]"
                />
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
                    width: 190%;
                    height: 130%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* Why Join CommUnity? */}
        <section className="flex flex-col rounded-md m-20">
            
            <div className="gap-5 items-center justify-center"
                style={{
                backgroundImage: `url(${Background3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}>
                <div className="flex flex-col text-center gap-3 mt-10">
                    <h1 className="text-[3rem] text-[#192033] font-bold font-ubuntu font-weight-700">
                        Why Join CommUnity?
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 3xl:container p-10">
                    
                    {/* Diverse Leadership Opportunities */}
                    <div className="p-6 md:p-8 shadow-lg rounded-md bg-white">
                        <Image className="w-10 h-10" src={DiverseLeadershipIcon} alt="Diverse"/>
                        <h6 className="text-[1.25rem] text-[#29233B] font-normal font-ubuntu font-weight-500 mt-5">
                            Diverse Leadership Opportunities
                        </h6>
                        <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300 mt-5">
                            Create and lead a community in your area of expertise, 
                            be it blockchain, UI/UX, AI, or any tech-related field.
                        </p>
                    </div>

                    {/* AGC Grants for Value-Adding Communities */}
                    <div className="p-6 md:p-8 shadow-lg rounded-md bg-white">
                        <Image className="w-10 h-10" src={AGCGrantsIcon} alt="AGC" />
                        <h6 className="text-[1.25rem] text-[#29233B] font-normal font-ubuntu font-weight-500 mt-5">
                            AGC Grants for Value-Adding Communities
                        </h6>
                        <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300 mt-5">
                            Exceptional communities that significantly 
                            contribute to their fields can earn AGC grants for further development and impact.
                        </p>
                    </div>

                    {/* Autonomy in Governance */}
                    <div className="p-6 md:p-8 shadow-lg rounded-md bg-white">
                        <Image className="w-10 h-10" src={AutonomyIcon} alt="Autonomy" />
                        <h6 className="text-[1.25rem] text-[#29233B] font-normal font-ubuntu font-weight-500 mt-5">
                            Autonomy in Governance
                        </h6>
                        <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300 mt-5">
                            Establish your community's governance, guiding 
                            its growth and direction within the Devolved AI platform.
                        </p>
                    </div>

                    {/* Autonomy in Governance */}
                    <div className="p-6 md:p-8 shadow-lg rounded-md bg-white">
                        <Image className="w-10 h-10" src={EarnIcon} alt="blockchain_based_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B] font-normal font-ubuntu font-weight-500 mt-5">
                            Earn and Influence Across Fields
                        </h6>
                        <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300 mt-5">
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
        <section className="flex w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${BackgroundUseCase.src})` 
            }}>
            <div className="w-full">
                <div className="flex flex-col items-center">
                    <div className="text-center gap-3 heading text-white font-bold text-[2.75rem] font-ubuntu font-weight-700 mb-10 mt-10">
                        <h1>User Case Examples</h1>
                    </div>

                    <div className="flex text-white ml-10 mr-20">
                        <div className="flex items-center justify-center mb-10">
                            <Image src={Steps} alt={"steps"} className="w-[5rem] h-[25rem]" />
                        </div>
                        <ol className="relative text-gray-500 dark:text-gray-400">
                            <li className="mb-5">
                                <div className="w-[25rem] h-[10rem] gap-2 p-5 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h1 className="text-white font-bold font-ubuntu font-weight-700 text-[1rem] mb-1">
                                        Case 1
                                    </h1>
                                    <h5 className="text-white font-normal font-ubuntu font-weight-500 text-[0.80rem] mb-1">
                                        Blockchain Expert Ben
                                    </h5>
                                    <p className="text-[#E0E0E0] font-light font-ubuntu font-weight-300 text-[0.70rem] leading-relaxed">
                                        Ben starts a blockchain-focused CommUnity.
                                        His group’s innovative ideas and projects
                                        in blockchain technology earn it an AGC grant,
                                        enhancing its role within the Devolved AI ecosystem.
                                    </p>
                                </div>
                            </li>

                            <li className="mb-5">
                                <div className="w-[25rem] h-[10rem] gap-2 p-5 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h1 className="text-white font-bold font-ubuntu font-weight-700 text-[1rem] mb-1">
                                        Case 2
                                    </h1>
                                    <h5 className="text-white font-normal font-ubuntu font-weight-500 text-[0.80rem] mb-1">
                                        UI/UX Designer Uma
                                    </h5>
                                    <p className="text-[#E0E0E0] font-light font-ubuntu font-weight-300 text-[0.70rem] leading-relaxed">
                                        Uma creates a CommUnity dedicated to exploring the latest trends in UI/UX design. 
                                        She leads the community in workshops and collaborative projects,
                                        earning recognition and AGC grants for their contributions to the field.
                                    </p>
                                </div>
                            </li>

                            <li className="mb-10">
                                <div className="w-[25rem] h-[10rem] gap-2 p-5 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h1 className="text-white font-bold font-ubuntu font-weight-700 text-[1rem] mb-1">
                                        Case 3
                                    </h1>
                                    <h5 className="text-white font-normal font-ubuntu font-weight-500 text-[0.80rem] mb-1">
                                        Coding Enthusiast Carlos
                                    </h5>
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
        <section className="flex flex-col items-center justify-center m-20">
                <div className="text-center mb-5">
                    <h1 className="text-[2.50rem] text-[#192033] font-black font-ubuntu font-weight-700">
                        Building and Governing Your CommUnity
                    </h1>
                </div>

                <div className="flex gap-6 justify-center">
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
        <section className="w-full my-10 md:mt-20 md:mb-0 3xl:container">
            <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
            style={{
            backgroundImage: `url(${Background4.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            }}>
            <div className="background-image" />
            <div className="fw-full max-w-xl text-center">
                <h1 className="text-[2.50rem] text-[#192033] font-black font-ubuntu">
                    Why Create Your CommUnity?
                </h1>
                <p className="text-[1rem] text-[#495167] font-light font-ubuntu">
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
      <section className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-10 gap-5">
          <div className="flex flex-col gap-10 p-10 items-center justify-center w-[50rem]"
            style={{
              backgroundImage: `url(${Image3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}>
            <h1 className="text-[#192033] text-start text-lg" 
            style={{ textAlign: 'center',
            fontSize: '2rem',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '1.15rem'}}>
              Ready to be a part of AI's next (d)evolution?<br/>
            <br/>
              Sign up now.
            </h1>
            <div className="text-center mt-10 bg-white/30 backdrop-blur-md p-5 rounded-[1rem]">
              <p className="font-ubuntu font-normal font-weight-400 text-[#192033] text-[1rem] mb-4">
                Get $50 in crypto for signing up, Plus $50 per referral¹
              </p>
              <div className="flex items-center justify-center">
                <input
                type="email"
                placeholder="Your email address*"
                className="w-64 h-12 px-4 mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
                />
                <Button
                title="JOIN THE REVOLUTION"
                extraStyles=" bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full md:w-[15rem] md:h-[3rem]"
                />
              </div>
            </div>
          </div>
      </section>

      <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
      
    </main>
  );
}

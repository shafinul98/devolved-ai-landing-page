"use client"

import Image from "next/image";
import HeroImage from "../../public/technology/hero-image.png"

import Image1 from "../../public/community/image1.png"
import Background1 from "../../public/technology/bg1.png"
import Image2 from "../../public/community/image2.png"
import Background2 from "../../public/technology/bg2.png"
import Background3 from "../../public/technology/bg3.png"
import BackgroundUseCase from "../../public/about/bg3.png"
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

import Step1Icon from "../../public/community/step1.svg"
import Step2Icon from "../../public/community/step2.svg"
import Step3Icon from "../../public/community/step3.svg"
import CoreDetailsCard from "@/components/customComponents/CoreDetailsCard";

export default function Community() {
    const steps = [
        {
            color: 'green-200',
            icon: Step1Icon,
            title: 'Case 1',
            subTitle: 'Blockchain Expert Ben',
            description: 'Ben starts a blockchain-focused CommUnity. His group’s innovative ideas and projects in blockchain technology earn it an AGC grant, enhancing its role within the Devolved AI ecosystem.',
        },
        {
            color: 'green-200',
            icon: Step2Icon,
            title: 'Case 2',
            subTitle: 'UI/UX Designer Uma',
            description: 'Uma creates a CommUnity dedicated to exploring the latest trends in UI/UX design. She leads the community in workshops and collaborative projects, earning recognition and AGC grants for their contributions to the field.',
        },
        {
            color: 'green-200',
            icon: Step3Icon,
            title: 'Case 3',
            subTitle: 'Coding Enthusiast Carlos',
            description: 'Carlos forms a CommUnity for coding enthusiasts, offering a space for learning, discussion, and project collaboration. The community becomes a valuable resource for coding knowledge and practice within Devolved AI, earning AGC grants for its educational impact.',
        }
    ];
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
      {/* community hero section */}
        <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
            <div className="text-center">
            <h1 
            className="font-bold text-[2.75rem] md:text-[2.75rem] leading-11 mb-5 text-[#192033]">
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
                    className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                />

                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                        Welcome to CommUnity
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
                        a vibrant and diverse feature of the Devolved AI platform. 
                        CommUnity is a realm of collaboration, innovation, and self-governance, 
                        where users from various fields can create, lead, and grow their own communities.
                    </p>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
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
                    <h1 className="text-[2rem] text-[#192033] font-bold">
                        What is CommUnity?
                    </h1>
                    <p className="text-[1rem] text-[#495167]">
                        CommUnity is a unique aspect of the Devolved AI platform, 
                        offering users the freedom to establish and manage communities 
                        in a wide array of tech-related fields. From blockchain enthusiasts 
                        to UI/UX designers, each CommUnity is a hub for like-minded individuals 
                        to collaborate, innovate, and influence their respective domains.
                    </p>
                    <Button title="LEARN MORE"
                    extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[12.75rem] md:h-[3.625rem] xl:me-16"
                    />
                </div>

                <Image
                    src={Image2}
                    alt="Layer 1 Blockchain Illustration"
                    className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
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
                    width: 160%;
                    height: 120%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* Why Join CommUnity? */}
        <section className="flex flex-col rounded-md shadow-lg m-20">
            <div className="gap-5 items-center justify-center"
                style={{
                backgroundImage: `url(${Background3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}>

                <div className="flex flex-col text-center gap-3 mt-10">
                    <h1 className="text-[2rem] text-[#192033] font-bold font-ubuntu font-weight-700">
                        Why Join CommUnity?
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row md:flex-wrap gap-[2rem] justify-center md:py-10 2xl:container">
                    
                    {/* Diverse Leadership Opportunities */}
                    <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/3">
                        <Image src={DiverseLeadershipIcon} alt="community_governed_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B]">
                            Diverse Leadership Opportunities
                        </h6>
                        <p className="text-[1rem] text-[#495167]">
                            Create and lead a community in your area of expertise, 
                            be it blockchain, UI/UX, AI, or any tech-related field.
                        </p>
                    </div>

                    {/* AGC Grants for Value-Adding Communities */}
                    <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/3">
                        <Image src={AGCGrantsIcon} alt="blockchain_based_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B]">
                            AGC Grants for Value-Adding Communities
                        </h6>
                        <p className="text-[1rem] text-[#495167]">
                            Exceptional communities that significantly 
                            contribute to their fields can earn AGC grants for further development and impact.
                        </p>
                    </div>

                    {/* Autonomy in Governance */}
                    <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/3">
                        <Image src={AutonomyIcon} alt="blockchain_based_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B]">
                            Autonomy in Governance
                        </h6>
                        <p className="text-[1rem] text-[#495167]">
                            Establish your community's governance, guiding 
                            its growth and direction within the Devolved AI platform.
                        </p>
                    </div>

                    {/* Autonomy in Governance */}
                    <div className="flex flex-col p-5 shadow-lg gap-3 rounded-md bg-white md:w-1/3">
                        <Image src={EarnIcon} alt="blockchain_based_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B]">
                            Earn and Influence Across Fields
                        </h6>
                        <p className="text-[1rem] text-[#495167]">
                            Engage in meaningful contributions, share expertise, 
                            and earn AGC rewards for your community’s positive impact.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* User Case Examples */}
        <section className="flex w-full h-[30rem] items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{ 
                backgroundImage: `url(${BackgroundUseCase.src})` 
            }}>
            <div className="w-full">
                <div className="flex flex-col items-center">
                    <div className="text-center gap-3 heading text-white font-semibold text-[2rem] font-ubuntu font-weight-700 mb-10">
                        <h1>User Case Examples</h1>
                    </div>

                    <div className="buttons flex text-white pr-20 pl-20">
                        <ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400">
                        {steps.map((step, index) => (
                            <li key={index} className="mb-10 ms-6">
                                <span className={`absolute flex items-center justify-center w-8 h-8 bg-${step.color} rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-${step.color}`}>
                                    <Image 
                                    src={step.icon} 
                                    alt={`Step ${index + 1}`} 
                                    width={30} height={14} /> {/* Adjust width and height accordingly */}
                                </span>
                                <h3 className="font-medium leading-tight">
                                    {step.title}
                                </h3>
                                <h5 className="leading-tight">
                                    {step.subTitle}
                                </h5>
                                <p className="text-sm">
                                    {step.description}
                                </p>
                            </li>
                        ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>

        {/* Building and Governing Your CommUnity */}
        <section className="flex flex-col items-center justify-center m-20">
                <div className="text-center mb-10">
                    <h1 className="text-black font-semibold text-2xl font-ubuntu font-weight-700">
                        Building and Governing Your CommUnity
                    </h1>
                </div>

                <div className="flex gap-6 justify-center">
                    <CoreDetailsCard
                    title="Establish Your Community"
                    description="Within Devolved AI, create a CommUnity in your area of interest, be it tech, design, development, or any other field."
                    image={EstablishIcon}
                    imageStyles="object-cover w-full h-32 md:h-40"
                    />
                    <CoreDetailsCard
                    title="Design Your Governance"
                    description="You hold the reins to define your community's governance, ensuring alignment with your goals and vision."
                    image={DesignIcon}
                    imageStyles="object-cover w-full h-32 md:h-40"
                    />
                    <CoreDetailsCard
                    title="Earning and Utilizing AGC"
                    description="Guide your community to add value within the Devolved AI ecosystem and receive AGC grants to fuel your initiatives."
                    image={EarningIcon}
                    imageStyles="object-cover w-full h-32 md:h-40"
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
                <h1 className="text-[2.15rem] text-[#192033] font-bold">
                    Why Create Your CommUnity?
                </h1>
                <p className="text-[1rem] text-[#495167]">
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
          <div className="flex flex-col gap-10 p-10 items-center justify-center"
            style={{
              backgroundImage: `url(${Image3.src})`,
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

      <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
      
    </main>
  );
}

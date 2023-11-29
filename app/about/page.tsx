"use client"

import Image from "next/image";
import HeroImage from "../../public/about/hero-image.webp"
import Image1 from "../../public/about/image1.webp"
import Background1 from "../../public/about/bg1.webp"
import Image2 from "../../public/about/image2.webp"
import Background2 from "../../public/about/bg2.webp"
import Background3 from "../../public/about/bg3.webp"
import IntegrityIcon from "../../public/about/integrity_icon.svg"
import InnovationIcon from "../../public/about/innovation_icon.svg"
import InclusivityIcon from "../../public/about/inclusivity_icon.svg"
import SectionBg1 from "../../public/about/section-bg-1.webp"
import SectionBg2 from "../../public/about/section-bg-2.webp"
import TeamMemberCard from "@/components/customComponents/TeamMemberCard";
import HorizontalStepper from "../../public/about/h-steeper.webp"
import Nathan from "../../public/about/team/nathan.webp";
import Nazmul from "../../public/about/team/nazmul.webp";
import Justin from "../../public/about/team/justin.webp";
import { useEffect, useState } from "react";
import { motion, useAnimation } from 'framer-motion';
import SignUpNow from '@/components/customComponents/SignUpNow';

export default function About() {
    const teamMembers = [
        {
            cardImage: Nathan,
            cardDescription: "CEO & Founder",
            cardFooter: [
                "#",
                "#",
                "https://www.linkedin.com/in/nathan-lee-peterson/",
            ],
            cardTitle: "Nathan Peterson",
            hasFacebook: false,
            hasTwitter: false,
            hasLinkedIn: true,
        },
        {
            cardImage: Nazmul,
            cardDescription: "COO",
            cardFooter: [
                "#",
                "#",
                "https://www.linkedin.com/in/md-nazmul-hossain/",
            ],
            cardTitle: "Md. Nazmul Hossain",
            hasFacebook: false,
            hasTwitter: false,
            hasLinkedIn: true,
        },
        {
            cardImage: Justin,
            cardDescription: "Board Member",
            cardFooter: [
                "#",
                "#",
                "https://www.linkedin.com/in/justin-seyl-c-d-s-csp-cas-b76b4912",
            ],
            cardTitle: "Justin Seyl",
            hasFacebook: false,
            hasTwitter: false,
            hasLinkedIn: true,
        },
    ];
    const totalCards = 3;
    const cardsPerPage = 3;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    // Function to handle pagination
    const handlePagination = (direction: string) => {
        setCurrentPage((prevPage) => {
        if (direction === 'next' && prevPage < totalPages) {
            return prevPage + 1;
        } else if (direction === 'prev' && prevPage > 1) {
            return prevPage - 1;
        }
        return prevPage;
        });
    };

    
    const controls = useAnimation();
    const moveLeft = () => {
        controls.start({ x: 600 }); // Adjust the distance as needed
    };
    const moveRight = () => {
        controls.start({ x: -600 }); // Adjust the distance as needed
    };
    // Call the fetchData function inside getInitialProps
    
    useEffect(() => {
        controls.start({ x: 600 });
    }, []);

    return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
        {/* About hero section */}
        <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
                <div className="text-center">
                    <h1 className="font-bold text-[2.75rem] md:text-2xl lg:text-3xl xl:text-6xl leading-normal mb-5 text-[#192033] max-w-[82.78975rem]">
                        About
                    </h1>
                </div>
            </div>
        </section>

        {/* Empowering Community, Democratizing AI */}
        <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
            <div className="flex flex-col items-center justify-around xl:flex-row xl:px-20 relative">
                <div className="m-5 xl:m-0">
                    <Image
                    priority
                    className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                        src={Image1}
                        alt="Empowering Community, Democratizing AI"
                        />
                </div>
                <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-10">
                    <div className="background-image" />
                    <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                        Our Mission
                    </p>
                    <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                        Empowering Community, <br/> Democratizing AI
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[45.25rem]">
                        We stand at the forefront of a revolution. Devolved AI is not merely a 
                        tech entity; it is a beacon for a future where Artificial Intelligence 
                        is democratically powered by a diverse, global community. Our mission is 
                        to dismantle the centralization of AI technology, ensuring it serves the 
                        many instead of the few.
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[45.25rem]">
                        With our innovative Proof of Value (PoV) protocol, we encourage and reward 
                        each member's contributions, creating a thriving ecosystem where every voice 
                        can be heard, and every effort is acknowledged. Our platform is a testament to 
                        the philosophy that everyone should have a stake in the AI that shapes our 
                        world.
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
                    width: 150%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* Shaping a Decentralized Future */}
        <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center xl:flex-row xl:px-20 justify-around relative">
                <div className="flex flex-col px-5 mt-10 md:mt-10 gap-5 xl:ms-10">
                    <div className="background-image" />
                    <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                        Our Vision
                    </p>
                    <p className="font-bold text-[1.625rem] xl:text-[3.75rem] text-[#192033]">
                        Shaping a Decentralized <br/> Future
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[45.25rem]">
                        Imagine an age where Artificial General Intelligence (AGI) is as widespread 
                        and participatory as the internet itself. This is the future Devolved AI is 
                        committed to creating. A horizon where AGI is a community-managed resource, 
                        offering unparalleled accessibility and collaborative growth.
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[45.25rem]">
                        We are expanding the boundaries of what's possible, moving from NLP to the 
                        vast potential of computer vision and predictive analytics. Our vision 
                        encapsulates an AGI ecosystem that is as inclusive as it is intelligent, 
                        fostering innovation that mirrors the rich tapestry of its contributors.
                    </p>
                </div>
                <div className="m-5 xl:m-0">
                    <Image
                        src={Image2}
                        alt="Shaping a Decentralized Future Illustration"
                        className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
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
                        width: 130%;
                        height: 100%;
                        z-index: -1;
                    }
                `}
            </style>
        </section>

        {/* Our values guide every decision, every development, and every interaction */}
        <section className="flex flex-col my-10 m-3">
            <div className="flex flex-col rounded-[1rem] shadow-md gap-5 items-center justify-center"
                style={{
                backgroundImage: `url(${SectionBg1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}>

                <div className="flex flex-col text-center max-w-xxl gap-2 mt-10">
                    <p className="text-[0.875rem] xl:text-[1.25rem] font-bold text-[#204FA2]">
                        Our Values
                    </p>
                    <p className="text-[1.625rem] xl:text-[1.75rem] leading-normal text-[#192033] font-bold">
                        Our values guide every decision, <br/>
                        every development, and every interaction
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:container p-5 mb-10">
                    
                    {/* Integrity */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={IntegrityIcon} alt="IntegrityIcon"/>
                        <p className="text-[1.875rem] xl:text-[1.25rem] text-[#29233B] font-medium mt-3">
                            Integrity
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            We pledge unwavering commitment to transparency and honesty, 
                            anchored by our custom layer 1 blockchain.
                        </p>
                    </div>

                    {/* Innovation */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={InnovationIcon} alt="InnovationIcon" />
                        <p className="text-[1.875rem] xl:text-[1.25rem] text-[#29233B] font-medium mt-3">
                            Innovation
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            We believe in pushing boundaries, challenging the status quo, and embracing the 
                            journey to AGI.
                        </p>
                    </div>

                    {/* Inclusivity */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[3.75rem] h-[3.75rem]" src={InclusivityIcon} alt="InclusivityIcon" />
                        <p className="text-[1.875rem] xl:text-[1.25rem] text-[#29233B] font-medium mt-3">
                            Inclusivity
                        </p>
                        <p className="ttext-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[73.5625rem] mt-2">
                            Our ecosystem thrives on diverse perspectives, 
                            ensuring everyone has the opportunity to shape the future of AI.
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

        {/* Collaborative, Transparent, Rewarding */}
        <section className="flex flex-col w-full my-20 items-center 3xl:container">
                <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
                style={{
                    backgroundImage: `url(${SectionBg2.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}>
                    <div className="background-image" />
                    <div className="flex flex-col max-w-xxl gap-5 text-center">
                        <p className="text-[0.875rem] xl:text-[1.25rem] text-[#204FA2] font-bold leading-normal">
                            Our Approach
                        </p>
                        <p className="font-bold xl:text-[3.75rem] text-[1.625rem] leading-normal text-[#192033]">
                            Collaborative, Transparent, Rewarding
                        </p>
                        <p className="xl:text-[1.375rem] text-[1.125rem] text-[#495167] font-light max-w-[86.0625rem]">
                            Our approach is rooted in the belief that the best AI should be forged in the 
                            fires of diverse global intellect. We leverage blockchain to ensure transparency 
                            and instill trust, while our PoV protocol rewards every user for their invaluable 
                            contributions to our collective intelligence.
                        </p>
                    </div>
                </div>
        </section>

        {/* Roadmap At A Glance */}
        <section className="flex w-full min-h-screen/2 my-20 items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${Background3.src})`,
            }}>
            <div className="w-full">
                <div className="flex flex-row items-center justify-start xl:p-10 m-10 p-5">
                    {/* Heading on the left */}
                    <div className="text-[#fff] font-bold text-[1.46rem] xl:text-[3.75rem] leading-normal">
                        <h1>Roadmap At A Glance</h1>
                    </div>

                    {/* Buttons on the right */}
                    <div className="hidden xl:flex text-[#fff] ml-auto">
                        <button className="w-10 h-10 border-2 border-[#fff] rounded-l-lg p-1 cursor-pointer border-r-0"
                        onClick={moveLeft}>
                            <svg
                                className="w-7 rounded-l-lg p-1 cursor-pointer border-r-0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                                />
                            </svg>
                        </button>

                        <button className="w-10 h-10 border-2 border-[#fff] rounded-r-lg p-1 cursor-pointer"
                        onClick={moveRight}>
                            <svg
                                className="w-7 rounded-r-lg p-1 cursor-pointer border-r-0"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* scroll div  */}
                <div className="stepper flex flex-col items-center text-white mt-10 mb-20"
                    style={{
                        overflowX: 'scroll',
                        scrollbarWidth: 'none',  // For Firefox
                        msOverflowStyle: 'none',  // For Internet Explorer
                        WebkitOverflowScrolling: 'touch',  // For iOS
                    }}>
                    <motion.div
                        animate={controls}
                        transition={{ type: 'tween', duration: 0.5 }}>
                        <div className="lg:order-1 flex flex-col xl:ml-10 space-y-5">
                            <div className="flex space-x-[15rem] xl:space-x-[20rem]">
                                {/* Phase 1 content */}
                                <div className="w-[17rem] xl:w-[30rem] h-[14rem] xl:h-auto gap-2 p-5 xl:p-10 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h1 className="text-[0.90rem] xl:text-[1.875rem] text-white font-bold mb-1">
                                        Phase 1
                                    </h1>
                                    <h5 className="text-[0.80rem] xl:text-[1.5rem] text-white font-normal mb-1">
                                        Foundation and MVP Development <br/> (Q3 2023 - Q1 2024)
                                    </h5>
                                    <p className="text-[0.60rem] xl:text-[1.125rem] leading-[1.2rem] xl:leading-[1.875rem] text-[#E0E0E0] font-light">
                                        We've laid the cornerstone by inaugurating our office and assembling a 
                                        dynamic team of visionaries. Currently, we're channeling our efforts 
                                        into the MVP, set to unveil in Q4 2023, establishing our commitment to 
                                        innovation and community involvement.
                                    </p>
                                </div>

                                {/* Phase 3 content */}
                                <div className="w-[17rem] xl:w-[30rem] h-[14rem] xl:h-auto gap-2 p-5 xl:p-10 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h3 className="text-[0.90rem] xl:text-[1.875rem] text-white font-bold mb-1">
                                        Phase 3
                                    </h3>
                                    <h5 className="text-[0.80rem] xl:text-[1.5rem] text-white font-normal mb-1">
                                        AI and Protocol Enhancement <br/> (By Q3 2024)
                                    </h5>
                                    <p className="text-[0.60rem] xl:text-[1.125rem] leading-[1.2rem] xl:leading-[1.875rem] text-[#E0E0E0] font-light">
                                        As Luna 2 enters the AI arena, we'll be bolstering our systems with
                                        enhanced federated learning and a fortified PoV Protocol, all
                                        while integrating substantial GPU support from our engaged
                                        and growing community.
                                    </p>
                                </div>

                                {/* Phase 5 content */}
                                <div className="w-[17rem] xl:w-[30rem] h-[14rem] xl:h-auto gap-2 p-5 xl:p-10 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h3 className="text-[0.90rem] xl:text-[1.875rem] text-white font-bold mb-1">
                                        Phase 5
                                    </h3>
                                    <h5 className="text-[0.80rem] xl:text-[1.5rem] text-white font-normal mb-1">
                                        Research and Specialized Modules <br/> (By Q4 2025)
                                    </h5>
                                    <p className="text-[0.60rem] xl:text-[1.125rem] leading-[1.2rem] xl:leading-[1.875rem] text-[#E0E0E0] font-light">
                                        The introduction of specialized AI modules marks a significant leap in our capabilities, 
                                        complemented by advanced ML research and a community expected to reach 100,000 
                                        members.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center mb-0 mr-2">
                                <Image src={HorizontalStepper} alt={"steps"}/>
                            </div>

                            <div className="flex space-x-[20rem] ml-[18rem] xl:space-x-[25rem] xl:ml-[30rem]">
                                {/* Phase 2 content */}
                                <div className="w-[17rem] xl:w-[30rem] h-[14rem] xl:h-auto gap-2 p-5 xl:p-10 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h3 className="text-[0.90rem] xl:text-[1.875rem] text-white font-bold mb-1">
                                        Phase 2
                                    </h3>
                                    <h5 className="text-[0.80rem] xl:text-[1.5rem] text-white font-normal font-ubuntu mb-1">
                                        Team and Infrastructure <br/> (By Q2 2024)
                                    </h5>
                                    <p className="text-[0.60rem] xl:text-[1.125rem] leading-[1.2rem] xl:leading-[1.875rem] text-[#E0E0E0] font-light">
                                        With our MVP propelling us forward, the next milestone involves
                                        expanding our talent pool and strengthening our infrastructure.
                                        This sets the stage for both technological advancement and a
                                        growth surge in our community, aiming to reach 25,000 members.
                                    </p>
                                </div>

                                {/* Phase 4 content */}
                                <div className="w-[17rem] xl:w-[30rem] h-[14rem] xl:h-auto gap-2 p-5 xl:p-10 border border-gray-500 dark:border-gray-700 rounded-md bg-transparent">
                                    <h3 className="text-[0.90rem] xl:text-[1.875rem] text-white font-bold">
                                        Phase 4
                                    </h3>
                                    <h5 className="text-[0.80rem] xl:text-[1.5rem] text-white font-normal">
                                        Data and Expansion <br/> (By Q1 2025)
                                    </h5>
                                    <p className="text-[0.60rem] xl:text-[1.125rem] leading-[1.2rem] xl:leading-[1.875rem] text-[#E0E0E0] font-light">
                                        Optimizing our data management and expanding our GPU
                                        network will be our focus, as we strive for superior efficiency
                                        and prepare our platform for more complex AI tasks.
                                    </p>
                                </div>
                            </div>
                        </div>
                        </motion.div>
                </div>
            </div>
        </section>

        {/* OUR TEAM */}
        <section className="flex flex-col w-full my-10 items-center 3xl:container">
            <div className="flex flex-col md:flex-row items-center md:px-8 lg:px-16 xl:px-20">
                {/* Left Section */}
                <div className="m-5">
                    <p className="xl:text-[1.25rem] text-[0.875rem] font-bold text-[#204FA2]">
                        OUR TEAM
                    </p>
                    <h1 className="font-bold xl:text-[3.75rem] text-[1.625rem] leading-normal text-[#192033]">
                        Meet the Pioneers
                    </h1>
                    <p className="text-[1.125rem] xl:text-[1.375rem] text-[#495167] font-light leading-[1.875rem] mb-5 max-w-[30rem]">
                        Welcome to our skilled ensemble of innovators and thinkers. 
                        Driven by passion and expertise, 
                        each member contributes to a collaborative vision.
                    </p>
                    {/* flex instead of hidden */}
                    <div className="text-black hidden">
                        <button
                            className="w-10 h-10 border-2 border-black rounded-l-lg p-1 cursor-pointer border-r-0"
                            onClick={() => handlePagination('prev')}>
                            <svg className="w-7 rounded-l-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        </button>
                        <button
                            className="w-10 h-10 border-2 border-black rounded-r-lg p-1 cursor-pointer"
                            onClick={() => handlePagination('next')}
                        >
                            <svg className="w-7 rounded-r-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="w-full md:w-auto md:overflow-x-auto md:flex-grow">
                    <div className="teammembercard md:flex md:gap-x-4 xl:px-10 overflow-x-auto"
                    style={{
                        scrollbarWidth: 'none',  // For Firefox
                        msOverflowStyle: 'none',  // For Internet Explorer
                        WebkitOverflowScrolling: 'touch',  // For iOS
                    }}>
                        {teamMembers
                            .slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage)
                            .map((member, index) => (
                                <TeamMemberCard key={index} {...member} />
                            ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Ready to be a part of AI */}
        <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5">
            <SignUpNow/>
        </section>
        <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
    </main>
    );
}

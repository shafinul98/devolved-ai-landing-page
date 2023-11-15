"use client"

import Image from "next/image";
import HeroImage from "../../public/about/hero-image.png"
import HomeImage1 from "../../public/home/1.png" 
import Image1 from "../../public/about/image1.png"
import Background1 from "../../public/about/bg1.png"
import Image2 from "../../public/about/image2.png"
import Background2 from "../../public/about/bg2.png"
import Background3 from "../../public/about/bg3.png"
import IntegrityIcon from "../../public/about/integrity_icon.svg"
import InnovationIcon from "../../public/about/innovation_icon.svg"
import InclusivityIcon from "../../public/about/inclusivity_icon.svg"
import SectionBg1 from "../../public/about/section-bg-1.png"
import SectionBg2 from "../../public/about/section-bg-2.png"
import TeamMemberCard from "@/components/customComponents/TeamMemberCard";
import Nathan from "../../public/Nathan.jpeg";
import Nazmul from "../../public/Nazmul.jpg";
import { useRef, useState } from "react";
import Button from "@/components/customComponents/Button";

export default function About() {
    const teamMembers = [
        {
            cardImage: Nathan,
            cardDescription: "CEO & Founder",
            cardFooter: [
                "",
                "https://www.linkedin.com/in/nathan-lee-peterson",
                "https://twitter.com/TahlilBsse0803",
                "",
            ],
            cardTitle: "Nathan Peterson",
            hasGitHub: true,
            hasTwitter: true,
            hasLinkedIn: true,
        },
        {
            cardImage: Nazmul,
            cardDescription: "COO",
            cardFooter: [
                "",
                "https://www.linkedin.com/in/nathan-lee-peterson",
                "https://twitter.com/TahlilBsse0803",
                "",
            ],
            cardTitle: "Md. Nazmul Hossain",
            hasGitHub: true,
            hasTwitter: true,
            hasLinkedIn: true,
        },
        {
            cardImage: Nazmul,
            cardDescription: "COO",
            cardFooter: [
                "",
                "https://www.linkedin.com/in/nathan-lee-peterson",
                "https://twitter.com/TahlilBsse0803",
                "",
            ],
            cardTitle: "Md. Nazmul Hossain",
            hasGitHub: true,
            hasTwitter: true,
            hasLinkedIn: true,
        },
        {
            cardImage: Nathan,
            cardDescription: "CEO & Founder",
            cardFooter: [
                "",
                "https://www.linkedin.com/in/nathan-lee-peterson",
                "https://twitter.com/TahlilBsse0803",
                "",
            ],
            cardTitle: "Nathan Peterson",
            hasGitHub: true,
            hasTwitter: true,
            hasLinkedIn: true,
        },
    ];
    const totalCards = 4;
    const cardsPerPage = 2;
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

    return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
        {/* About hero section */}
        <section className="w-full h-[20rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
                <div className="text-center">
                    <h1 className="text-[3rem] md:text-[3rem] leading-11 mb-5 text-[#192033] font-black">
                        About Us
                    </h1>
                </div>
            </div>
        </section>

        {/* Empowering Community, Democratizing AI */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[38rem] xl:w-[37rem]"
                    src={Image1}
                    alt="What Drives Devolved AI Illustration"
                    />
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-black font-weight-700">
                        <p className="text-[1rem] text-[#204FA2]">
                            Our Mission
                        </p>
                        Empowering Community, Democratizing AI
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-400">
                        We stand at the forefront of a revolution. Devolved AI is not merely a 
                        tech entity; it is a beacon for a future where Artificial Intelligence 
                        is democratically powered by a diverse, global community. Our mission is 
                        to dismantle the centralization of AI technology, ensuring it serves the 
                        many instead of the few.
                    </p>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-400">
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
                    width: 170%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* Shaping a Decentralized Future */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.15rem] text-[#192033] font-ubuntu font-bold font-weight-700">
                        <p className="text-[1rem] text-[#204FA2]">
                            Our Vision
                        </p>
                        Shaping a Decentralized Future
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-400">
                        Imagine an age where Artificial General Intelligence (AGI) is as widespread 
                        and participatory as the internet itself. This is the future Devolved AI is 
                        committed to creating. A horizon where AGI is a community-managed resource, 
                        offering unparalleled accessibility and collaborative growth.
                    </p>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-400">
                        We are expanding the boundaries of what's possible, moving from NLP to the 
                        vast potential of computer vision and predictive analytics. Our vision 
                        encapsulates an AGI ecosystem that is as inclusive as it is intelligent, 
                        fostering innovation that mirrors the rich tapestry of its contributors.
                    </p>
                </div>
                <Image
                    src={Image2}
                    alt="Forge Value, Earn AGC Illustration"
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
                        width: 180%;
                        height: 120%;
                        z-index: -1;
                    }
                `}
            </style>
        </section>

        {/* Our values guide every decision, every development, and every interaction */}
        <section className="flex flex-col rounded-[1rem] shadow-lg m-20">
            <div className="gap-5 items-center justify-center"
                style={{
                    backgroundImage: `url(${SectionBg1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>

            <div className="flex flex-col text-center gap-3 mt-10">
                <h1 className="text-[2.50rem] text-[#192033] font-ubuntu font-bold font-weight-700">
                    <p className="text-[1rem] text-[#204FA2]">
                        Our Values
                    </p>
                    Our values guide every decision, <br/>
                    every development, and every interaction
                </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 3xl:container p-10">

                {/* Integrity */}
                <div className="p-6 md:p-8 shadow-md rounded-md bg-white">
                    <Image className="w-10 h-10" src={IntegrityIcon} alt="community_governed_icon" />
                    <h6 className="text-lg text-[#29233B] font-bold font-ubuntu font-weight-500 mt-3">
                        Integrity
                    </h6>
                    <p className="text-sm text-[#495167] font-normal font-ubuntu font-weight-300 mt-2">
                        We pledge unwavering commitment to transparency and honesty, 
                        anchored by our custom layer 1 blockchain.
                    </p>
                </div>

                {/* Innovation */}
                <div className="p-6 md:p-8 shadow-md rounded-md bg-white">
                    <Image className="w-10 h-10" src={InnovationIcon} alt="shared_prosperity_icon" />
                    <h6 className="text-lg text-[#29233B] font-bold font-ubuntu font-weight-500 mt-3">
                        Innovation
                    </h6>
                    <p className="text-sm text-[#495167] font-normal font-ubuntu font-weight-300 mt-2">
                        We believe in pushing boundaries, challenging the status quo, and embracing the 
                        journey to AGI.
                    </p>
                </div>

                {/* Inclusivity */}
                <div className="p-6 md:p-8 shadow-md rounded-md bg-white">
                    <Image className="w-10 h-10" src={InclusivityIcon} alt="blockchain_based_icon" />
                    <h6 className="text-lg text-[#29233B] font-bold font-ubuntu font-weight-500 mt-3">
                        Inclusivity
                    </h6>
                    <p className="text-sm text-[#495167] font-normal font-ubuntu font-weight-300 mt-2">
                        Our ecosystem thrives on diverse perspectives, 
                        ensuring everyone has the opportunity to shape the future of AI.
                    </p>
                </div>

            </div>
            </div>
        </section>

        {/* Collaborative, Transparent, Rewarding */}
        <section className="w-full my-10 md:mt-20 md:mb-0 3xl:container">
            <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
            style={{
            backgroundImage: `url(${SectionBg2.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            }}>
                <div className="background-image" />
                <div className="fw-full max-w-xl text-center">
                    <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                        Our Approach
                    </p>
                    <h1 className="text-[2rem] text-[#192033] font-bold">
                        Collaborative, Transparent, Rewarding
                    </h1>
                    <p className="text-[1rem] text-[#495167]">
                        Our approach is rooted in the belief that the best AI should be forged in the 
                        fires of diverse global intellect. We leverage blockchain to ensure transparency 
                        and instill trust, while our PoV protocol rewards every user for their invaluable 
                        contributions to our collective intelligence.
                    </p>
                </div>
            </div>
        </section>

        {/* Roadmap At A Glance */}
        <section className="flex w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${Background3.src})`}}>
            <div className="text-white font-bold text-[2.75rem] font-ubuntu font-weight-700 mb-10 mt-10 ml-10 mr-10">
                Roadmap At A Glance
            </div>

            <div className="flex text-white ml-20">
                <button
                className="w-10 h-10 border-2 border-white rounded-l-lg p-1 cursor-pointer border-r-0"
                onClick={() => alert('hi')}
                >
                <svg className="w-7 rounded-l-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                </button>
                <button
                className="w-10 h-10 border-2 border-white rounded-r-lg p-1 cursor-pointer"
                onClick={() => alert('hi')}
                >
                <svg className="w-7 rounded-r-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
            </div>

            <div className="steeper overflow-hidden">
            </div>
        </section>




        {/* OUR TEAM */}
        <section className="w-full my-10 md:mt-20 lg:mb-0 overflow-x-auto 3xl:container">
            <div className="flex flex-col md:flex-row items-center md:px-8 lg:px-16 xl:px-20">
                {/* Left Section */}
                <div className="md:mr-8 mb-8 md:mb-0">
                    <h1 className="text-[3rem] text-[#192033] font-ubuntu font-black font-weight-700 mb-4">
                        <p className="text-[1rem] text-[#204FA2]">
                            OUR TEAM
                        </p>
                        Meet <br/> the Pioneers
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300 mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit consequat <br/>
                        eget morbi arcu convallis venenatis tellus neque faucibus auctor.
                    </p>
                    <div className="flex text-black">
                        <button
                            className="w-10 h-10 border-2 border-black rounded-l-lg p-1 cursor-pointer border-r-0"
                            onClick={() => handlePagination('prev')}
                        >
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
                    <div className="md:flex md:gap-x-4 xl:px-10 overflow-x-auto">
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
      <section className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-10 gap-5">
          <div className="flex flex-col gap-10 p-10 items-center justify-center w-[50rem]"
            style={{
              backgroundImage: `url(${HomeImage1.src})`,
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

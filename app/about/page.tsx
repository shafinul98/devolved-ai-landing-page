"use client"

import Image from "next/image";
import HeroImage from "../../public/about/hero-image.png"
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

export default function About() {
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
                <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                    src={Image1}
                    alt="What Drives Devolved AI Illustration"
                    />
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                        Our Mission
                    </p>
                    <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                        Empowering Community, Democratizing AI
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
                        We stand at the forefront of a revolution. Devolved AI is not merely a 
                        tech entity; it is a beacon for a future where Artificial Intelligence 
                        is democratically powered by a diverse, global community. Our mission is 
                        to dismantle the centralization of AI technology, ensuring it serves the 
                        many instead of the few.
                    </p>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
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
                    height: 120%;
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
                    <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                        Our Vision
                    </p>
                    <h1 className="text-[2rem] text-[#192033] font-bold">
                        Shaping a Decentralized Future
                    </h1>
                    <p className="text-[1rem] text-[#495167]">
                        Imagine an age where Artificial General Intelligence (AGI) is as widespread 
                        and participatory as the internet itself. This is the future Devolved AI is 
                        committed to creating. A horizon where AGI is a community-managed resource, 
                        offering unparalleled accessibility and collaborative growth.
                    </p>
                    <p className="text-[1rem] text-[#495167]">
                        We are expanding the boundaries of what's possible, moving from NLP to the 
                        vast potential of computer vision and predictive analytics. Our vision 
                        encapsulates an AGI ecosystem that is as inclusive as it is intelligent, 
                        fostering innovation that mirrors the rich tapestry of its contributors.
                    </p>
                </div>
                <Image
                    src={Image2}
                    alt="Forge Value, Earn AGC Illustration"
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
                <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                    Our Vision
                </p>
                <h1 className="text-[2rem] text-[#192033] font-bold font-ubuntu font-weight-700">
                Our values guide every decision, every development, and every interaction
                </h1>
            </div>

            <div className="flex flex-col md:flex-row md:flex-wrap gap-[0.5rem] justify-center md:py-10 2xl:container">

                {/* Integrity */}
                <div className="flex flex-col p-5 shadow-lg gap-3 rounded-[1rem] bg-white md:w-1/4">
                    <Image src={IntegrityIcon} alt="community_governed_icon" />
                    <h6 className="text-[1.25rem] text-[#29233B]">
                        Integrity
                    </h6>
                    <p className="text-[1rem] text-[#495167]">
                        We pledge unwavering commitment to transparency and honesty, 
                        anchored by our custom layer 1 blockchain.
                    </p>
                </div>

                {/* Innovation */}
                <div className="flex flex-col p-5 shadow-lg gap-3 rounded-[1rem] bg-white md:w-1/4">
                    <Image src={InnovationIcon} alt="shared_prosperity_icon" />
                    <h6 className="text-[1.25rem] text-[#29233B]">
                        Innovation
                    </h6>
                    <p className="text-[1rem] text-[#495167]">
                        We believe in pushing boundaries, challenging the status quo, and embracing the 
                        journey to AGI.
                    </p>
                </div>

                {/* Inclusivity */}
                <div className="flex flex-col p-5 shadow-lg gap-3 rounded-[1rem] bg-white md:w-1/4">
                    <Image src={InclusivityIcon} alt="blockchain_based_icon" />
                    <h6 className="text-[1.25rem] text-[#29233B]">
                        Inclusivity
                    </h6>
                    <p className="text-[1rem] text-[#495167]">
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
        <section className="w-full h-[30rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${Background3.src})`}}>
            <div className="w-full m-3">
                <div className="flex select-none">
                <div className="heading text-white font-semibold">Roadmap At A Glance</div>
                <div className="buttons ml-auto flex text-white mr-1">
                    <svg className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    <svg className="w-7 border-2 rounded-r-lg p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
                </div>
            </div>
        </section>

        {/* OUR TEAM */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20">
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                        OUR TEAM
                    </p>
                    <h1 className="text-[2rem] text-[#192033] font-bold">
                        Meet the Pioneers
                    </h1>
                    <p className="text-[1rem] text-[#495167]">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit consequat
                        eget morbi arcu convallis venenatis
                        tellus neque faucibus auctor.
                    </p>
                    <div className="buttons flex text-black mr-1">
                        <svg className="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        <svg className="w-7 border-2 rounded-r-lg p-1 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </div>
                </div>
                <div className="mt-5 w-full md:w-[22.5rem] h-[20.25rem] md:mt-0 md:h-[24.25rem] xl:w-[35rem]">
                    <div className="md:flex md:flex-wrap md:justify-evenly md:my-10 md:px-10 md:gap-x-10 lg:px-18 xl:px-24 2xl:px-14 3xl:container">
                        <TeamMemberCard
                        cardImage={Nathan}
                        cardDescription="CEO & Founder"
                        cardFooter={[
                            "",
                            "https://www.linkedin.com/in/nathan-lee-peterson",
                            "https://twitter.com/TahlilBsse0803",
                            "",
                        ]}
                        cardTitle="Nathan Peterson"
                        hasGitHub={true}
                        hasTwitter={true}
                        hasLinkedIn={true}
                        />
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
    </main>
    );
}

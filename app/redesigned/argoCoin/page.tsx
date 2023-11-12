"use client"

import Image from "next/image";
import HeroImage from "../../../public/argoCoin/hero-image.png"
import Image1 from "../../../public/argoCoin/image1.png"
import TextBG from "../../../public/argoCoin/text-bg.png"
import Image2 from "../../../public/argoCoin/image2.png"
import Background1 from "../../../public/argoCoin/bg1.png"
import Image3 from "../../../public/argoCoin/image3.png"
import Image4 from "../../../public/argoCoin/image4.png"
import Image5 from "../../../public/argoCoin/image5.png"
import Image6 from "../../../public/argoCoin/image6.png"
import Image7 from "../../../public/argoCoin/image7.png"

import HomeImage1 from "../../../public/home/1.png"
import SectionBg3 from "../../../public/home/section-bg-3.png"

import Button from "@/components/Custom Components/Button";

export default function ArgoCoin() {
    return (
        <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
            {/* hero section */}
            <section className="w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${HeroImage.src})`}}>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
                    <div className="text-center">
                        <h1 className="font-bold text-[3rem] md:text-[3rem] leading-11 mb-5 text-[#192033]">
                            Welcome to Argocoin (AGC) <br/> 
                            The Currency of AI Democratization
                        </h1>
                        <p className="font-normal text-[1rem] mb-6 md:mb-0 md:text-[1rem] text-[#495167] md:pr-30">
                            Join the revolution with Devolved AI’s native token. Embrace a future where Artificial 
                            Intelligence is governed by the wisdom of the community, not the few.
                        </p>
                    </div>
                </div>
            </section>

            {/* A Revolutionary Native Cryptocurrency */}
            <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                    <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                        src={Image1}
                        alt="What Drives Devolved AI Illustration"
                        />
                    <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                        <div className="background-image" />
                        <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                            Argocoin Unveiled
                        </p>
                        <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                            A Revolutionary Native <br />
                            Cryptocurrency
                        </h1>
                        <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
                            Argocoin (AGC) is not just a cryptocurrency; it's the linchpin of Devolved 
                            AI's mission to decentralize the future of Artificial Intelligence. 
                            As the proprietary digital currency on our layer 1 blockchain
                        </p>
                        <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
                            AGC stands at the forefront of a new digital economy - set for launch to empower 
                            community-driven innovation and governance.
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

            {/* Forge Value, Earn AGC */}
            <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                    <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                        <div className="background-image" />
                        <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                            Earning Mechanisms of Argocoin
                        </p>
                        <h1 className="text-[2rem] text-[#192033] font-bold">
                            Forge Value, Earn AGC
                        </h1>
                        <p className="text-[1rem] text-[#495167]">
                            Though AGC is yet to be released, the anticipation is high for the multitude of 
                            ways users will be able to earn AGC. From validating network transactions to 
                            contributing valuable data for AI training, our Proof of Value (PoV) protocol 
                            is designed to reward every valuable action within the ecosystem.
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
                            background-image: url(${Background1.src});
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

            {/* Your Stake, Your Voice */}
            <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                    <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                        src={Image3}
                        alt="What Drives Devolved AI Illustration"
                        />
                    <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                        <div className="background-image" />
                        <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                            Argocoin and Its Role in Governance
                        </p>
                        <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                            Your Stake, Your Voice
                        </h1>
                        <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
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
                        width: 170%;
                        height: 120%;
                        z-index: -1;
                    }
                `}
                </style>
            </section>

            {/* Designed for Sustainability and Growth */}
            <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                    <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                        <div className="background-image" />
                        <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                            Tokenomics and Utility
                        </p>
                        <h1 className="text-[2rem] text-[#192033] font-bold">
                            Designed for Sustainability and Growth
                        </h1>
                        <p className="text-[1rem] text-[#495167]">
                            The economic model behind AGC balances new token creation with a deflationary 
                            mechanism to ensure a stable and growing ecosystem. The utility of AGC will go 
                            beyond transactional use; it's the key to accessing enhanced AI services, 
                            participating in the ecosystem, and incentivizing growth and innovation.
                        </p>
                    </div>

                    <Image
                        src={Image4}
                        alt="Forge Value, Earn AGC Illustration"
                        className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                    />
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
            <section className="w-full my-10 md:mt-20 md:mb-0 3xl:container">
                <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
                style={{
                    backgroundImage: `url(${SectionBg3.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}>
                    <div className="background-image" />
                    <div className="fw-full max-w-xl text-center">
                        <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                            Joining the Argocoin Ecosystem
                        </p>
                        <h1 className="text-[2.15rem] text-[#192033] font-bold">
                            Joining the Argocoin Ecosystem
                        </h1>
                        <p className="text-[1rem] text-[#495167]">
                            Join us on the ground floor of this revolutionary project. 
                            By becoming an early AGC holder, you not only stand to benefit from 
                            the ecosystem's growth but also become part of a movement to democratize AI, 
                            contributing to a platform that is truly community-driven and transparent.
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

            <div className="h-50 bg-gradient-to-r from-gray-300 via-transparent to-gray-100">
                {/* Future Vision and Expansion */}
                <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                    <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                        <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                            src={Image5}
                            alt="What Drives Devolved AI Illustration"
                            />
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                            <div className="background-image" />
                            <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                                Future Vision and Expansion
                            </p>
                            <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                                Future Vision and Expansion
                            </h1>
                            <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
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
                <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                    <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                            <div className="background-image" />
                            <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                                Security and Stability Measures
                            </p>
                            <h1 className="text-[2rem] text-[#192033] font-bold">
                                Security and Stability Measures
                            </h1>
                            <p className="text-[1rem] text-[#495167]">
                                We commit to the highest standards of security and economic resilience. 
                                The launch will be accompanied by strategies to prevent market manipulation 
                                and ensure a fair distribution, while also prioritizing the stability and 
                                long-term viability of AGC.
                            </p>
                        </div>
                        <Image
                            src={Image6}
                            alt="Forge Value, Earn AGC Illustration"
                            className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                        />
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
                <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                    <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                        <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[24.25rem] xl:w-[35rem]"
                            src={Image7}
                            alt="What Drives Devolved AI Illustration"
                            />
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                            <p className="text-[1rem] text-[#204FA2] font-ubuntu font-bold font-weight-700">
                                Take Action
                            </p>
                            <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-bold font-weight-400">
                                Your Pathway to Being a Part of the AI Evolution
                            </h1>
                            <p className="text-[1rem] text-[#495167] font-ubuntu font-normal font-weight-400">
                                Argocoin is not just currency; it's a stake in the future of AI. Upon release, 
                                AGC holders will exercise their governance rights, shaping the ecosystem's 
                                policies, and making decisions that will direct the platform's evolution - 
                                all through a transparent, democratic voting process powered by blockchain.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

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

            <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
        </main>
    );
}

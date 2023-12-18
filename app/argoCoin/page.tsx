"use client"

import React from 'react'
import Image from "next/image"
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
import RoadMap from "@/public/argoCoin/roadmap.svg"
import DisCordImageNoHover from "@/public/Join_us_on_discord_button_no_hover.webp"
import DisCordImageHover from "@/public/Join_us_on_discord_button_hover.webp"
import { useState } from "react"
import JoinUsonDiscord from '@/components/customComponents/JoinUsonDiscord'
import DevolvedAILogo from '@/public/logo_white.svg'
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import ArrowUpRight2 from '@/public/argoCoin/arrow_up_right_2.svg'
import AGCMATIC from '@/public/argoCoin/agc_matic.svg'
import AGCBNB from '@/public/argoCoin/agc_bnb.svg'
import AGCETH from '@/public/argoCoin/agc_eth.svg'
import LiveOnUniswap from '@/public/argoCoin/bg_uniswap.svg'
import CopyCode from "@/public/argoCoin/copy_button.svg"
import InfoButton from "@/public/argoCoin/info_button.svg"
import Million200AGC from "@/public/argoCoin/200_million_agc.svg"
import Million100AGC from "@/public/argoCoin/100_million_agc.svg"
import Million80AGC from "@/public/argoCoin/80_million_agc.svg"
import Million20AGC from "@/public/argoCoin/20_million_agc.svg"
import Link from 'next/link'
import { Tooltip } from "@nextui-org/react";

export default function ArgoCoin() {
    const [discordImage, setDiscordImage] = useState(DisCordImageNoHover);
    const [polygonCopyToClipBoard, setPolygonCopyToClipBoard] = useState(false);
    const [bSCCopyToClipBoard, setBSCCopyToClipBoard] = useState(false);
    const [eTHCopyToClipBoard, setETHCopyToClipBoard] = useState(false);

    const handleDiscordButtonClick = () => {
        setDiscordImage(DisCordImageHover);
        window.open('https://discord.com/invite/devolvedai', '_blank');
    };
    const handleDiscordJoinUsButtonClick = () => {
        window.open('https://discord.com/invite/devolvedai', '_blank');
    };
    

    const handleMouseEnter = () => {
        setDiscordImage(DisCordImageHover);
    };

    const handleMouseLeave = () => {
        setDiscordImage(DisCordImageNoHover);
    };

    const handleButtonClick = () => {
        window.open('https://devolved-ai.gitbook.io/devolved-ai-whitepaper/', '_blank');
    };

    // Shareable link copy handler from sharing widget
    const handlePolygonCopyToClipboard = async () => {
        try {
        await navigator.clipboard.writeText(
            `AGC (Polygon) 10269a5452e57029305BdBFB773949340F703A32`
        );
        setPolygonCopyToClipBoard(true);
        } catch (error) {
        console.error("Failed to copy text: ", error);
        }
    };

    const handleBSCCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(
            `AGC (BSC) 10269a5452e57029305BdBFB773949340F703A32`
          );
          setBSCCopyToClipBoard(true);
        } catch (error) {
          console.error("Failed to copy text: ", error);
        }
    };

    const handleETHCopyToClipboard = async () => {
        try {
          await navigator.clipboard.writeText(
            `AGC (ETH) 10269a5452e57029305BdBFB773949340F703A32`
          );
          setETHCopyToClipBoard(true);
        } catch (error) {
          console.error("Failed to copy text: ", error);
        }
    };

    return (
        <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
            {/* hero section */}
            <section className="w-full xl:h-screen h-[55rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
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
                        <div className="justify-center pt-2 xl:pt-2">
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

            {/* live on uniswap  */}
            <section className="flex flex-col items-center justify-center my-10 xl:my-20 gap-3 3xl:container">
                <div className="flex flex-col rounded-xl items-center justify-center xl:justify-between w-[20rem] h-auto xl:w-[90rem] xl:px-20"
                    style={{
                        backgroundImage: `url(${LiveOnUniswap.src})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div className='flex flex-col items-center justify-center xl:text-start text-center m-10'>
                            <p className='text-[1.625rem] xl:text-[3.75rem] font-bold leading-normal text-[#192033]'>
                                Argocoin (AGC) Now Live on Uniswap: Trade AGC BNB, and ETH Pairs!
                            </p>
                        </div>

                        {/* Contracts  */}
                        <div className='flex flex-col gap-5 items-start justify-around m-5 xl:mr-[28rem]'>
                            <p className='text-[1.25rem] xl:text-[2.1875rem] font-medium text-[#192033] leading-[2.375rem]'>
                                Contracts
                            </p>

                            <div className='flex flex-col mb-5 mt-3 gap-3'>

                                {/* AGC (Polygon) */}
                                <div className='flex flex-row xl:gap-3'>
                                    <Tooltip
                                    content={polygonCopyToClipBoard ? "Contract copied" : "Copy Contract"}
                                    placement="top">
                                        <button className='copyButton' onClick={handlePolygonCopyToClipboard}>
                                            <Image src={CopyCode} alt='CopyCode' className="w-[1.125rem] h-[1.125rem] xl:w-[1.6875rem] xl:h-[1.875rem]"/>
                                        </button>
                                    </Tooltip>
                                    <p className='text-[0.90rem] xl:text-[1.5rem] font-normal text-[#495167] leading-[1.25rem] xl:leading-[2.375rem]'>
                                        AGC (Polygon) 10269a5452e57029305BdBFB773949340F703A32
                                    </p>
                                </div>

                                {/* AGC (BSC)  */}
                                <div className='flex flex-row xl:gap-3'>
                                    <Tooltip
                                    content={bSCCopyToClipBoard ? "BSC copied" : "Copy BSC"}
                                    placement="top">
                                        <button className='copyButton' onClick={handleBSCCopyToClipboard}>
                                            <Image src={CopyCode} alt='CopyCode' className="w-[1.125rem] h-[1.125rem] xl:w-[1.6875rem] xl:h-[1.875rem]"/>
                                        </button>
                                    </Tooltip>
                                    <p className='text-[0.90rem] xl:text-[1.5rem] font-normal text-[#495167] leading-[1.25rem] xl:leading-[2.375rem]'>
                                        AGC (BSC) 10269a5452e57029305BdBFB773949340F703A32
                                    </p>
                                </div>

                                {/* AGC (ETH) */}
                                <div className='flex flex-row xl:gap-3'>
                                    <Tooltip
                                    content={eTHCopyToClipBoard ? "ETH copied" : "Copy ETH"}
                                    placement="top">
                                        <button className='copyButton' onClick={handleETHCopyToClipboard}>
                                            <Image src={CopyCode} alt='CopyCode' className="w-[1.125rem] h-[1.125rem] xl:w-[1.6875rem] xl:h-[1.875rem]"/>
                                        </button>
                                    </Tooltip>
                                    <p className='text-[0.90rem] xl:text-[1.5rem] font-normal text-[#495167] leading-[1.25rem] xl:leading-[2.375rem]'>
                                        AGC (ETH) 10269a5452e57029305BdBFB773949340F703A32
                                    </p>
                                </div>
                            </div>
                        </div>


                        {/* Quick Links  */}
                        <div className='flex flex-col mt-3'>
                            <p className="text-[1.25rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                                Quick Links
                            </p>

                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 mb-10 mt-3">
                                {/* Doxxed / KYC */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                                        Doxxed / KYC
                                    </p>
                                    <div className='flex flex-row gap-3 mt-5'>
                                        <div className="flex flex-row">
                                            <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                                <Link href={"#"}>Watch Video</Link>
                                            </span>
                                            <span>
                                                <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-1 mt-1.5 xl:ml-2' />
                                            </span>
                                        </div> 
                                        
                                        <div className="flex flex-row">
                                            <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                                <Link href={"/notarized-identity-statement.pdf"}>View Document</Link>
                                            </span>
                                            <span>
                                                <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-1 mt-1.5 xl:ml-2' />
                                            </span>
                                        </div> 
                                    </div>
                                </div>

                                {/* Track AGC on Dextools */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                                        Track AGC on Dextools
                                    </p>
                                    <div className='flex flex-row gap-3 mt-5'>
                                        <div className="flex flex-row">
                                            <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                                <Link href={"#"}>Visit Dextools</Link>
                                            </span>
                                            <span>
                                                <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-2 mt-1.5' />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* AGC Charts on Poocoin */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                                        AGC Charts on Poocoin
                                    </p>
                                    <div className='flex flex-row gap-3 mt-5'>
                                        <div className="flex flex-row">
                                            <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                                <Link href={"#"}>Visit Poocoin</Link>
                                            </span>
                                            <span>
                                                <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-2 mt-1.5' />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Tokenomics  */}
                        <div className='flex flex-col'>
                            <p className="text-[1.25rem] xl:text-[1.875rem] text-[#29233B] font-medium xl:ml-3">
                                Tokenomics
                            </p>

                            <div className="grid grid-cols-1 xl:grid-cols-4 gap-3 p-2 mt-3 mb-10">
                                {/* 200 million agc */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                <Tooltip
                                    content={"Help?"}
                                    placement="top"
                                    >
                                        <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                                    </Tooltip>
                                    <Image priority className="w-[3.75rem] h-auto" src={Million200AGC} alt="Million200AGC"/>
                                    <p className="text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
                                    >
                                        Max Supply
                                    </p>
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-2">
                                        200 Million AGC
                                    </p>
                                </div>

                                {/* 100 million agc */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                <Tooltip
                                    content={"Help?"}
                                    placement="top"
                                    >
                                        <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                                    </Tooltip>
                                    <Image priority className="w-[3.75rem] h-auto" src={Million100AGC} alt="Million100AGC"/>
                                    <p className="text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
                                    >
                                        Liquidity Allocation
                                    </p>
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-2">
                                        100 Million AGC
                                    </p>
                                </div>

                                {/* 80 million agc */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                <Tooltip
                                    content={"Help?"}
                                    placement="top"
                                    >
                                        <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                                    </Tooltip>
                                    <Image priority className="w-[3.75rem] h-auto" src={Million80AGC} alt="Million80AGC"/>
                                    <p className="text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
                                    >
                                        Locked for Devolved AI Rewards
                                    </p>
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-2">
                                        80 Million AGC
                                    </p>
                                </div>

                                {/* 20 million agc */}
                                <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                                <Tooltip
                                    content={"Help?"}
                                    placement="top"
                                    >
                                        <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                                    </Tooltip>
                                    <Image priority className="w-[3.75rem] h-auto" src={Million20AGC} alt="Million20AGC"/>
                                    <p className="text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
                                    >
                                        Locked in DAO
                                    </p>
                                    <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-2">
                                        20 Million AGC
                                    </p>
                                </div>

                            </div>
                        </div>
                        
                        {/* Smart Contract Audit Report */}
                        <div className='flex flex-col m-5 xl:mr-[25rem] mb-10'>
                            <p className='text-[1.625rem] xl:text-[3.75rem] font-bold leading-normal text-[#192033]'>
                                Smart Contract Audit Report
                            </p>
                            <button className="uppercase bg-[#FF6F00] text-white rounded-[0.3125rem] w-[10.625rem] h-[3.125rem] mt-5">
                                <div className="flex">
                                    <span className='text-[#fff] uppercase text-[1rem] leading-normal ml-5'>
                                        Read Report
                                    </span>
                                    <span>
                                        <Image src={ArrowUpRight} alt='ArrowUpRight' className='ml-3 mt-1.5' />
                                    </span>
                                </div>    
                            </button>
                        </div>
                </div>
            </section>

            {/* uniswap  */}
            <section className="flex flex-col items-center justify-center my-10 xl:my-20 gap-3 3xl:container">
                <div className="flex xl:flex-row flex-col rounded-xl shadow-md items-center justify-between w-[20rem] h-auto xl:w-[90rem] xl:h-[10rem] px-20"
                    style={{
                    backgroundImage: `url(${RoadMap.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    }}>
                    <div className='logo flex xl:flex-row flex-col items-center mt-5 mb-3'>
                        <Image src={DevolvedAILogo} alt='DevolvedAILogo' className='w-[11.25rem] h-[1.51444rem]' />
                        <p className="text-[#FFF] text-[1.10rem] xl:text-[1.625rem] font-bold leading-normal text-center xl:ml-10 mt-2 xl:mt-0">
                            Swap Argocoin (AGC) on Uniswap
                        </p>
                    </div>

                    <div className='xl:m-5 mt-2 mb-5 flex xl:flex-row flex-col xl:gap-2 gap-3'>
                        {/* AGC/MATIC  */}
                        <div className="w-[15.625rem] h-[7.8125rem] backdrop-filter backdrop-blur-2xl flex flex-col items-center justify-center"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                borderRadius: '0.625rem',
                                border: '1px solid #d7d7d7'
                            }}>
                            <Image src={AGCMATIC} alt='AGCMATIC' className="mb-2 mt-5 w-[3.75rem] h-[3.75rem]" />
                            <Link href={"#"}>
                                <div className="flex mb-5">
                                    <span className='underline text-[#fff] text-[1.25rem] leading-normal font-medium ml-5'>
                                        AGC/MATIC
                                    </span>
                                    <span>
                                        <Image src={ArrowUpRight} alt='ArrowUpRight' className='ml-3 mt-2.5 w-[0.625rem] h-[0.625rem]' />
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* AGC/BNB */}
                        <div className="w-[15.625rem] h-[7.8125rem] backdrop-filter backdrop-blur-2xl flex flex-col items-center justify-center"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                borderRadius: '0.625rem',
                                border: '1px solid #d7d7d7'
                            }}>
                            <Image src={AGCBNB} alt='AGCBNB' className="mb-2 mt-5 w-[3.75rem] h-[3.75rem]" />
                            <Link href={"#"}>
                                <div className="flex mb-5">
                                    <span className='underline text-[#fff] text-[1.25rem] leading-normal font-medium ml-5'>
                                        AGC/BNB
                                    </span>
                                    <span>
                                        <Image src={ArrowUpRight} alt='ArrowUpRight' className='ml-3 mt-2.5 w-[0.625rem] h-[0.625rem]' />
                                    </span>
                                </div>
                            </Link>
                        </div>

                        {/* AGC/ETH */}
                        <div className="w-[15.625rem] h-[7.8125rem] backdrop-filter backdrop-blur-2xl flex flex-col items-center justify-center"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                                borderRadius: '0.625rem',
                                border: '1px solid #d7d7d7'
                            }}>
                            <Image src={AGCETH} alt='AGCETH' className="mb-2 mt-5 w-[3.75rem] h-[3.75rem]" />
                            <Link href={"#"}>
                                <div className="flex mb-5">
                                    <span className='underline text-[#fff] text-[1.25rem] leading-normal font-medium ml-5'>
                                        AGC/ETH
                                    </span>
                                    <span>
                                        <Image src={ArrowUpRight} alt='ArrowUpRight' className='ml-3 mt-2.5 w-[0.625rem] h-[0.625rem]' />
                                    </span>
                                </div>
                            </Link>
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
                            As the proprietary digital currency on our layer 1 blockchain AGC stands at the forefront of a 
                            new digital economy - set for launch to empower community-driven innovation and governance.
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
                            <button onClick={handleDiscordJoinUsButtonClick}
                            className="uppercase bg-[#A9A3B2] font-bold leading-normal text-white text-[1rem] rounded-[0.625rem] xl:w-[14.5625rem] xl:h-[3.125rem] mt-5">
                                join us on discord
                            </button>
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
                <JoinUsonDiscord/>
            </section>

            <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
        </main>
    );
}

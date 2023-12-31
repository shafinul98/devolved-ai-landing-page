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
import DisCordImageNoHover from "@/public/Join_us_on_discord_button_no_hover.webp"
import DisCordImageHover from "@/public/Join_us_on_discord_button_hover.webp"
import { useState } from "react"
import JoinUsonDiscord from '@/components/customComponents/JoinUsonDiscord'
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import ArrowUpRight2 from '@/public/argoCoin/arrow_up_right_2.svg'
import LiveOnUniswap from '@/public/argoCoin/bg_uniswap.svg'
import CopyCode from "@/public/argoCoin/copy_button.svg"
import InfoButton from "@/public/argoCoin/info_button.svg"
import Million200AGC from "@/public/argoCoin/200_million_agc.svg"
import Million100AGC from "@/public/argoCoin/100_million_agc.svg"
import Million80AGC from "@/public/argoCoin/80_million_agc.svg"
import Million20AGC from "@/public/argoCoin/20_million_agc.svg"
import Link from 'next/link'
import { Tooltip } from "@nextui-org/react"
import NowListed from '@/components/customComponents/NowListed'

export default function ArgoCoin() {
    const [discordImage, setDiscordImage] = useState(DisCordImageNoHover);
    const [polygonCopyToClipBoard, setPolygonCopyToClipBoard] = useState(false);

    const handleDiscordButtonClick = () => {
        setDiscordImage(DisCordImageHover);
        window.open('https://discord.com/invite/devolvedai', '_blank');
    };
    
    const handleReadReportButtonClick = () => {
        window.open('https://github.com/freshcoins/Smart-Contract-Audits/blob/main/Argocoin_0x2Ad2934d5BFB7912304754479Dd1f096D5C807Da.pdf', '_blank');
      };

    const handleMouseEnter = () => {
        setDiscordImage(DisCordImageHover);
    };

    const handleMouseLeave = () => {
        setDiscordImage(DisCordImageNoHover);
    };

    const handleWhitepaperButtonClick = () => {
        window.open('https://devolved-ai.gitbook.io/devolved-ai-whitepaper/', '_blank');
    };

    const handleVoteUsingDaoButtonClick = () => {
        window.open('https://app.aragon.org/#/daos/polygon/0x443f4ffa82e0b26a3855e75651a10a7f3fcff116', '_blank');
    };

    const handleBuyAgcNowButtonClick = () => {
        window.open('https://kyberswap.com/partner-swap?chainId=137&inputCurrency=MATIC&outputCurrency=0x2Ad2934d5BFB7912304754479Dd1f096D5C807Da&clientId=dexscreener&feeReceiver=0x0DA2a82ED2c387d1751ccbAf999A80b65bdb269E&enableTip=true&feeAmount=0&chargeFeeBy=currency_in&tab=swap', '_blank');
    };

    // Shareable link copy handler from sharing widget
    const handlePolygonCopyToClipboard = async () => {
        try {
        await navigator.clipboard.writeText(
            `0x2Ad2934d5BFB7912304754479Dd1f096D5C807Da`
        );
        setPolygonCopyToClipBoard(true);
        } catch (error) {
        console.error("Failed to copy text: ", error);
        }
    };

    return (
        <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
            {/* hero section */}
            <section className="w-full xl:h-screen h-[55rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${HeroImage.src})`}}>
                    <NowListed/>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-3">
                    <div className="text-center">
                        <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-[2.75rem] xl:leading-[5.50rem] xl:mb-5 text-[#192033] xl:max-w-[82.78975rem]">
                            Argocoin: <br/>
                            Fueling the AI Revolution
                        </h1>
                        <p className="font-normal text-[1.25rem] xl:text-[1.875rem] leading-[1.875rem] xl:leading-[2.375rem] text-[#495167] m-5 xl:m-5 max-w-[24rem] xl:max-w-[71.375rem]">
                            Step into the future with Argocoin:  The Cornerstone of Devolved AI. Anchored as the native token on our upcoming Layer 1 blockchain, AGC isn’t just a digital currency – it's the driving force behind a new era of AI-powered breakthroughs.
                        </p>
                        <div className="justify-center pt-2 xl:pt-2">
                            <button onClick={handleBuyAgcNowButtonClick}
                            className="uppercase bg-[#FF6F00] hover:bg-[#EB6904] text-[1.25rem] text-[#fff] leading-normal rounded-[0.3125rem] w-[13.125rem] h-[4.125rem] mt-5">
                                BUY $AGC NOW 
                            </button>
                        </div>
                        <div className='underline uppercase text-[#000] text-[1rem] font-medium leading-normal justify-center mt-3 xl:mt-3'>
                            <Link href={"https://dexscreener.com/polygon/0x8837a61644d523cbe5216dde226f8f85e3aa9be3"} target='_blank'>Or view chart on dexscreener
                            </Link>
                        </div>
                        
                        
                        {/* <div className="justify-center pt-2 xl:pt-2">
                            <button className="button w-[15.4675rem] h-auto"
                            onClick={handleDiscordButtonClick}
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}>
                                <Image priority src={discordImage} alt="Discord Image" />
                            </button>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* live on uniswap  */}
            <section className="flex flex-col rounded-xl items-center justify-center xl:justify-between h-auto xl:px-20 my-10 xl:my-20 3xl:container"
                style={{
                    backgroundImage: `url(${LiveOnUniswap.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}>
                {/* title  */}
                <div className='flex flex-col items-start justify-center xl:text-start text-center 3xl:container m-5'>
                    <p className='text-[1.625rem] xl:text-[3.75rem] font-bold leading-normal text-[#192033]'>
                        Argocoin (AGC) Now Live on Uniswap: Trade AGC with MATIC!
                    </p>
                </div>

                {/* Contracts  */}
                <div className='flex flex-col gap-5 items-start md:container m-3'>
                    <div className='flex flex-col mb-5 mt-3 gap-3'>
                        <p className='text-[1rem] md:text-xl xl:text-[2.1875rem] font-medium text-[#192033] leading-normal'>
                            Argocoin (AGC) - Polygon Network
                        </p>
                        {/* AGC (Polygon) */}
                        <div className='flex flex-row md:flex-row gap-3 xl:mt-5'>
                            <Tooltip
                                content={polygonCopyToClipBoard ? "Contract copied" : "Copy Contract"}
                                placement="bottom">
                                <button onClick={handlePolygonCopyToClipboard}>
                                    <Image src={CopyCode} alt='CopyCode' className="w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10"/>
                                </button>
                            </Tooltip>
                            <p className='hidden xl:flex text-sm md:text-base xl:text-lg font-normal text-[#495167] leading-[1.25rem] md:leading-[2.375rem] xl:leading-[2.375rem] xl:max-w-[37.1875rem]'>
                                0x2Ad2934d5BFB7912304754479Dd1f096D5C807Da
                            </p>
                            <p className='flex xl:hidden text-sm md:text-base xl:text-lg font-normal text-[#495167] leading-[1.25rem] md:leading-[2.375rem] xl:leading-[2.375rem] xl:max-w-[37.1875rem]'>
                                0x2Ad2934d5BFB7912304<br/>
                                754479Dd1f096D5C807Da
                            </p>
                        </div>
                    </div>
                </div>


                {/* Quick Links  */}
                <div className='flex flex-col items-start md:container m-3'>
                    <p className="text-[1.25rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                        Quick Links
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-5 mt-3 mb-5">

                        {/* Doxxed / KYC */}
                        <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                            <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                                Doxxed / KYC
                            </p>

                            <div className='flex flex-col xl:flex-row gap-3 mt-3'>
                                <Link className="flex flex-row items-center" href={"https://youtu.be/1uwwsx5wV2Y"} target="_blank">
                                    <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                            Watch Video
                                    </span>
                                    <span>
                                        <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-1 mt-1.5 xl:ml-2' />
                                    </span>
                                </Link> 
                                
                                <Link className="flex flex-row items-center" href={"/notarized-identity-statement.pdf"} target='_blank'>
                                    <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                        {/* <Link href={"/notarized-identity-statement.pdf"}>View Document</Link> */}
                                        View Document
                                    </span>
                                    <span>
                                        <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-1 mt-1.5 xl:ml-2' />
                                    </span>
                                </Link> 
                            </div>
                        </div>

                        {/* Track AGC on Dextools */}
                        <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                            <p className="text-[1.5rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                                Track AGC on DEX Screener
                            </p>
                            <Link className="flex flex-row gap-3 mt-3" href={"https://dexscreener.com/polygon/0x8837a61644d523cbe5216dde226f8f85e3aa9be3"} target='_blank'>
                                <span className='text-[#FF6F00] text-[1rem] underline uppercase leading-normal'>
                                    Visit DEXSCREENER
                                </span>
                                <span>
                                    <Image src={ArrowUpRight2} alt='ArrowUpRight2' className='ml-2 mt-1.5' />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Tokenomics  */}
                <div className='flex flex-col items-start md:container m-3'>
                    <p className="text-[1.25rem] xl:text-[1.875rem] text-[#29233B] font-medium">
                        Tokenomics
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 mt-3 mb-10">
                        {/* 200 million agc */}
                        <div className="p-4 xl:p-8 rounded-[1.25rem] bg-white hover:shadow-xl transition-all duration-300">
                        <Tooltip
                            content={
                                <div style={{ width: '250px', wordWrap: 'break-word', backgroundColor: "#090421", color:"#ffffff", padding: "10px" }}>
                                  {/* Use a multiline string for better readability */}
                                  This is the total amount of AGC that can ever be minted. Note that once
                                  we transition to our Layer 1 blockchain, we will do a DAO vote to update
                                  our tokenomics to better reflect the update.
                                </div>
                              }
                            placement="top"
                            >
                                <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                            </Tooltip>
                            <Image priority className="w-[3.75rem] h-auto" src={Million200AGC} alt="Million200AGC"/>
                            <p className="uppercase text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
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
                            content={
                                <div style={{ width: '250px', wordWrap: 'break-word', backgroundColor: "#090421", color:"#ffffff", padding: "10px" }}>
                                33,333,333 AGC has been used to provide liquidity to AGC/MATIC on Uniswap, the remaining 66,666,667 is locked in our DAO and will be used as liquidity for AGC/BNB AND AGC/ETH when we add those wrapped tokens.
                                </div>
                                }
                            placement="top"
                            >
                                <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                            </Tooltip>
                            <Image priority className="w-[3.75rem] h-auto" src={Million100AGC} alt="Million100AGC"/>
                            <p className="uppercase text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
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
                            content={
                                <div style={{ width: '250px', wordWrap: 'break-word', backgroundColor: "#090421", color:"#ffffff", padding: "10px" }}>
                                    These tokens will be locked into our rewards contract to dispense to Devolved AI users for providing value to the ecosystem. As of right now, these are also locked in our DAO until we add them to the rewards contract.
                                </div>
                                }
                            placement="top"
                            >
                                <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                            </Tooltip>
                            <Image priority className="w-[3.75rem] h-auto" src={Million80AGC} alt="Million80AGC"/>
                            <p className="uppercase text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
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
                            content={
                                <div style={{ width: '250px', wordWrap: 'break-word', backgroundColor: "#090421", color:"#ffffff", padding: "10px" }}>
                                20M AGC will stay in our DAO and be voted out when needed to pay for operational expenses and marketing.
                                </div>}
                            placement="top"
                            >
                                <Image priority className="w-[1rem] h-auto float-right" src={InfoButton} alt="InfoButton"/>
                            </Tooltip>
                            <Image priority className="w-[3.75rem] h-auto" src={Million20AGC} alt="Million20AGC"/>
                            <p className="uppercase text-[1.125rem] xl:text-[1rem] leading-[1.875rem] text-[#495167] font-light max-w-[26.75rem] mt-3"
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
                <div className='flex flex-col mt-5 mb-10 ml-5 mr-5items-start md:container'>
                    <p className='text-[1.625rem] xl:text-[3.75rem] font-bold leading-normal text-[#192033]'>
                        Smart Contract Audit Report
                    </p>
                    <button onClick={handleReadReportButtonClick}
                    className="uppercase bg-[#FF6F00] text-white rounded-[0.3125rem] w-[10.625rem] h-[3.125rem] mt-5">
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
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                            A Revolutionary Native <br />
                            Cryptocurrency
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                        Argocoin (AGC) isn’t just a cryptocurrency; it's the linchpin of Devolved AI's mission to decentralize the future of Artificial Intelligence. 
                        As the proprietary digital currency on our upcoming layer 1 blockchain, AGC stands at the forefront of a new digital economy - set for launch to empower 
                        community-driven innovation and governance.
                        </p>
                        <button onClick={handleWhitepaperButtonClick}
                            className="uppercase bg-[#A9A3B2] font-medium text-white rounded-[0.3125rem] w-full h-[3.125rem] xl:w-[10rem] xl:h-[3.125rem] mt-5">
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
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                            Forge Value, Earn AGC
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            AGC has now launched, transforming anticipation into active engagement. Users will soon be earning AGC through diverse activities, from validating 
                            transactions to aiding AI training. Our Proof of Value (PoV) protocol rewards these contributions, showcasing the growing impact of our ecosystem.
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
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                            Your Stake, Your Voice
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                        Argocoin has evolved beyond a mere currency; it's now a tangible stake in AI's future. 
                        AGC holders are actively exercising governance rights, shaping policies, 
                        and guiding the platform's evolution through a democratic, blockchain-powered voting process.
                        </p>

                        <div className="flex justify-start">
                            <button onClick={handleVoteUsingDaoButtonClick}
                            className="uppercase bg-[#A9A3B2] font-medium text-white rounded-[0.3125rem] w-full h-[3.125rem] xl:w-[14.4375rem] xl:h-[3.125rem] mt-5">
                                Vote using our dao
                            </button>
                        </div>
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
                        <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                            Designed for <br/> Sustainability and Growth
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                        Our current tokenomics for AGC are straightforward and effective: 100 million AGC tokens are available for liquidity, with 80 million dedicated 
                        to rewards through our Proof of Value (PoV) Protocol, and 20 million locked for operational costs in our DAO. This model fosters a stable and progressively growing ecosystem, 
                        where AGC's utility extends beyond mere transactions, unlocking advanced AI services and fostering participation, growth, and innovation within our community.
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
            <section className="flex flex-col w-full my-20 xl:my-10 items-center 3xl:container">
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
                        Join us on the ground floor of this revolutionary project. By becoming an early AGC holder, 
                        you not only stand to benefit from the ecosystem's growth but also become part of a movement to democratize AI, 
                        contributing to a platform that is truly community-driven and transparent.
                        </p>
                    </div>
                </div>
            </section>


            <section className="bg-gradient-to-t from-[#F1F2F5] via-transparent to-[#fff] my-10">
                {/* Future Vision and Expansion */}
                <div className="flex flex-col w-full my-10 items-center 3xl:container">
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
                            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                                Future Vision and <br/>  Expansion
                            </p>
                            <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            The journey doesn't end with the release of AGC. We have a roadmap that includes expanding into modules like computer vision and predictive 
                            analytics, creating a comprehensive suite of AI tools governed by AGC holders - ensuring a continuously evolving and advancing ecosystem.
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
                </div>

                {/* Security and Stability Measures */}
                <div className="flex flex-col w-full my-20 items-center 3xl:container">
                    <div className="flex flex-col-reverse items-center justify-around xl:flex-row xl:px-20 relative">
                        <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-10">
                            <div className="background-image" />
                            <p className="font-bold text-[0.875rem] xl:text-[1.25rem] leading-normal text-[#204FA2]">
                                Security and Stability Measures
                            </p>
                            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                                Security and <br/>Stability Measures
                            </p>
                            <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            We uphold the highest standards of security and economic resilience, which are evident now that AGC has launched. 
                            Our current strategies are effectively preventing market manipulation and ensuring a fair distribution of AGC, all 
                            while prioritizing its stability and long-term viability.
                            </p>
                            <div className="flex justify-start">
                                <button onClick={handleReadReportButtonClick}
                                className="uppercase bg-[#A9A3B2] font-medium text-white rounded-[0.3125rem] w-full h-[3.125rem] xl:w-[12.375rem] xl:h-[3.125rem] mt-5">
                                    Read our Audit
                                </button>
                            </div>
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
                </div>

                {/* Your Pathway to Being a Part of the AI Evolution */}
                <div className="flex flex-col w-full my-20 items-center 3xl:container">
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
                            <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                                Your Pathway to Being a <br/> Part of the AI Evolution
                            </p>
                            <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                            Argocoin is more than just a currency; it represents a stake in the future of AI. AGC holders are now exercising their governance rights, 
                            actively shaping the ecosystem's policies and making decisions that guide the platform's evolution. This is all happening through a transparent, 
                            democratic voting process, empowered by blockchain technology.
                            </p>
                            <div className="flex justify-start">
                                <button onClick={handleVoteUsingDaoButtonClick}
                                className="uppercase bg-[#A9A3B2] font-medium text-white rounded-[0.3125rem] w-full h-[3.125rem] xl:w-[14.4375rem] xl:h-[3.125rem] mt-5">
                                    submit a proposal
                                </button>
                            </div>
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
                </div>
            </section>

            {/* Ready to be a part of AI */}
            <section className="flex flex-col items-center justify-center my-6 md:my-10 gap-3 md:gap-5">
                <JoinUsonDiscord/>
            </section>

            <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
        </main>
    );
}

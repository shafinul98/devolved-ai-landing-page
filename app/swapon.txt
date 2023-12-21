"use client"

import React from 'react'
import Image from "next/image"
import RoadMap from "@/public/argoCoin/roadmap.svg"
import DevolvedAILogo from '@/public/logo_white.svg'
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import AGCMATIC from '@/public/argoCoin/agc_matic.svg'
import AGCBNB from '@/public/argoCoin/agc_bnb.svg'
import AGCETH from '@/public/argoCoin/agc_eth.svg'
import Link from 'next/link'

export default function SwapOnUniswap () {
    return (
        <div className="flex xl:flex-row flex-col rounded-xl shadow-md items-center justify-between w-[20rem] h-auto xl:w-[100rem] xl:h-[10rem] px-20"
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
    );
}
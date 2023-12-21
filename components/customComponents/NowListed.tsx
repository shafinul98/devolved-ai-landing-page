"use client"

import React from 'react'
import Image from "next/image"
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import Link from 'next/link'

export default function NowListed () {
    return (
        <Link href={"https://app.uniswap.org/swap?chain=polygon"} target='_blank'
        className="fixed w-full bg-[#FF6F00] top-16 xl:top-28 flex items-center justify-center p-4 xl:z-50 z-10 m-5 xl:m-0">
            <span className="text-[#ffffff] text-[1rem] xl:text-[1.5rem] uppercase leading-normal">
                Argocoin now listed on Uniswap. Trade now!
            </span>
            <span>
                <Image src={ArrowUpRight} alt="ArrowUpRight2" className='ml-3' />
            </span>
        </Link>
    );
}
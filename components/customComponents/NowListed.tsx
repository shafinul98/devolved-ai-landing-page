"use client"

import React from 'react'
import Image from "next/image"
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import Link from 'next/link'

export default function NowListed () {
    return (
        <Link href={"#"}
        className="fixed bg-[#090421] top-24 xl:top-28 flex items-center justify-between p-4 xl:z-50 m-5 xl:m-0">
            <span className="text-[#ffffff] text-[1rem] xl:text-[1.5rem] uppercase leading-normal">
                Argocoin now listed on Uniswap. Trade now!
            </span>
            <span>
                <Image src={ArrowUpRight} alt="ArrowUpRight2" className='ml-3' />
            </span>
        </Link>
    );
}
"use client"

import React, { useState } from 'react'
import Image from "next/image"
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import CloseIcon from '@/public/argoCoin/close-icon-white.svg'
import Link from 'next/link'

export default function NowListed () {
    const [isLinkVisible, setLinkVisibility] = useState(true);
    const handleCloseLink = () => {
        setLinkVisibility(false);
    };
    return (
        <Link href={"https://app.uniswap.org/swap?chain=polygon"} target='_blank'
        className="fixed w-full xl:h-[2rem] bg-[#FF6F00] top-16 xl:top-28 flex items-center justify-center p-2 xl:z-50 z-10 m-5 xl:m-0">
            <span className="text-[#ffffff] text-[0.70rem] xl:text-sm uppercase leading-normal">
                Argocoin now listed on Uniswap. Trade now!
            </span>
            <span>
                <Image src={ArrowUpRight} alt="ArrowUpRight2" className='xl:ml-3 ml-2' />
            </span>
            <span>
                <button onClick={handleCloseLink} className="focus:outline-none">
                    <Image src={CloseIcon} alt="CrossIcon" className="w-5 h-5" />
                </button>
            </span>
        </Link>
    );
}

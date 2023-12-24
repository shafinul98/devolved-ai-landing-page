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
        <>
            {isLinkVisible && (
                <div className="fixed w-full xl:h-[2rem] bg-[#FF6F00] top-16 xl:top-28 flex justify-between p-2 xl:z-50 z-10 m-5 xl:m-0">
                    <Link href={'https://app.uniswap.org/swap?chain=polygon'} target="_blank" className="flex items-center justify-center xl:w-full">
                        <span className="text-[#ffffff] text-[0.70rem] xl:text-sm uppercase leading-normal">
                        Argocoin now listed on Uniswap. Trade now!
                        </span>
                        <span>
                        <Image src={ArrowUpRight} alt="ArrowUpRight2" className="xl:ml-3 ml-2" />
                        </span>
                    </Link>
      
                <div className="xl:w-[2rem]">
                  <button onClick={handleCloseLink} className="focus:outline-none float-right">
                    <Image src={CloseIcon} alt="CloseIcon" className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
        </>
    );
}

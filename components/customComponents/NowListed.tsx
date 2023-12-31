"use client"

import React, { useEffect, useState } from 'react'
import Image from "next/image"
import ArrowUpRight from '@/public/argoCoin/arrow-up-right.svg'
import CloseIcon from '@/public/argoCoin/close-icon-white.svg'
import Link from 'next/link'

export default function NowListed () {
    const [showSticky, setShowSticky] = useState(typeof window !== 'undefined'
    ? window.localStorage.getItem('sticky') !== "0"
    : true);

    const handleCloseLink = () => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('sticky', "0");
            setShowSticky(false);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const sticky = window.localStorage.getItem('sticky');
            setShowSticky(sticky !== '0');
        }
    }, [showSticky]);

    return (
        <>
            {showSticky && (
                <div className="fixed w-full xl:h-[2rem] bg-[#FF6F00] top-16 xl:top-28 flex justify-between p-2 xl:z-50 z-10 m-5 xl:m-0">
                    <Link href={'https://kyberswap.com/partner-swap?chainId=137&inputCurrency=MATIC&outputCurrency=0x2Ad2934d5BFB7912304754479Dd1f096D5C807Da&clientId=dexscreener&feeReceiver=0x0DA2a82ED2c387d1751ccbAf999A80b65bdb269E&enableTip=true&feeAmount=0&chargeFeeBy=currency_in&tab=swap'} target="_blank" className="flex items-center justify-center xl:w-full">
                        <span className="text-[#ffffff] text-[0.70rem] xl:text-sm uppercase leading-normal">
                        $AGC NOW LISTED ON UNISWAP. TRADE NOW!
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

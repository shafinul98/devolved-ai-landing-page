"use client";

import HeroImage from "@/public/contact/hero-image.webp"
import AgcLogo from "@/public/agcLogo/agc-logo-32.png"
import Image from "next/image"

export default function AGCLOGO() {

    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between">
            <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HeroImage.src})` }}>
                <div className="flex flex-col items-center justify-center text-center md:flex-row md:justify-center md:p-12 mt-5">
                    <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033]">
                        AGC LOGO
                    </h1>
                </div>
            </section>

            <section className="flex flex-col justify-center items-center bg-gray-100">
                <Image priority className="w-auto h-auto" src={AgcLogo} alt="AgcLogo"/>
            </section>

            <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
        </main>
    );
}

"use client"

import Image from "next/image"
import HeroImage from "@/public/contact/hero-image.webp"
import Image1 from "@/public/contact/image1.webp"
import Background2 from "@/public/contact/bg2.webp"
import Link from "next/link"
import { FaDiscord, FaFacebook, FaReddit, FaTelegram, FaTwitter } from "react-icons/fa"
import ContactUsForm from "@/components/customComponents/ContactUsForm"

export default function Contact() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between p-0 md:p-0">

            {/* Contact hero section */}
            <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${HeroImage.src})`}}>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
                    <div className="text-center">
                        <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033]">
                            Contact
                        </h1>
                    </div>
                </div>
            </section>

            {/* Contact form */}
            <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                    {/* form  */}
                    <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-5 w-full md:w-1/2 lg:w-auto text-start">
                        <div className="background-image-text" />
                        <p className="text-[1.625rem] xl:text-[3.75rem] text-[#192033] font-bold leading-normal">
                            We'd love to hear your <br />
                            Feedback
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.375rem] text-[#495167] font-light leading-[1.875rem] max-w-[24.0625rem] xl:max-w-[36.125rem]">
                            Need to get in touch? You can reach us at all our socials below, or using the contact form on this page.
                        </p>
                        <div className="flex md:justify-start xl:justify-start">
                            <div className="flex gap-4">
                                <Link href={"https://facebook.com/devolvedai"} rel="noopener noreferrer" target="_blank">
                                <FaFacebook size={30} />
                                </Link>
                                <Link href={"https://twitter.com/devolvedai"} rel="noopener noreferrer" target="_blank">
                                <FaTwitter size={30} />
                                </Link>
                                <Link href={"https://www.reddit.com/user/devolvedai"} rel="noopener noreferrer" target="_blank">
                                <FaReddit size={30} />
                                </Link>
                                <Link href={"https://discord.com/invite/devolvedai"} rel="noopener noreferrer" target="_blank">
                                <FaDiscord size={30} />
                                </Link>
                                <Link href={"https://t.me/devolvedai"} rel="noopener noreferrer" target="_blank">
                                <FaTelegram size={30} />
                                </Link>
                            </div>
                        </div>
                        <div>
                            <ContactUsForm />
                        </div>
                    </div>

                    {/* image  */}
                    <div className="hidden xl:flex m-5 xl:m-2">
                        <Image
                            src={Image1}
                            alt="Contact form image"
                            className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                            priority
                        />
                    </div>
                </div>
                <style jsx>
                {`
                    .background-image-text {
                        background-image: url(${Background2.src});
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                        opacity: 1;
                        bottom: 0;
                        right: 0;
                        position: absolute;
                        width: 190%;
                        height: 80%;
                        z-index: -1;
                    }
                `}
                </style>
            </section>

            <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
        </main>
    );
}

"use client"

import Image from "next/image";
import HeroImage from "../../public/contact/hero-image.webp"
import Image1 from "../../public/contact/image1.webp"
import Background2 from "../../public/contact/bg2.webp"
import Link from "next/link";
import { FaDiscord, FaFacebook, FaReddit, FaTelegram, FaTwitter } from "react-icons/fa";
import ContactUsForm from "@/components/customComponents/ContactUsForm";

export default function Contact() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between p-0 md:p-0">

            {/* Contact hero section */}
            <section className="flex w-full md:h-[20rem] lg:h-[20rem] xl:h-[20rem] 2xl:h-[30rem] 3xl-[30rem] items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${HeroImage.src})` }}>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-center text-center">
                    <h1 className="text-[2rem] 3xl:text-5xl leading-normal m-10 text-[#192033] font-bold">
                        Contact Us
                    </h1>
                </div>
            </section>

            {/* Contact form */}
            <section className="w-full my-10 md:mt-20 md:mb-0 items-center">
                <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                    <div className="flex flex-col px-5 md:mt-16 gap-8 xl:ms-5 w-full md:w-1/2 lg:w-auto text-start">
                        <div className="background-image-text" />
                        <p className="text-[2.375rem] 3xl:text-8xl text-[#192033] font-bold leading-normal">
                            We love to hear your <br />
                            Feedback
                        </p>
                        <p className="text-[1.375rem] md:text-lg text-[#495167] font-light leading-[1.875rem]">
                            Need to get in touch? You can reach us at all our socials below, or using the contact form on this page.
                        </p>
                        <div className="flex md:justify-start 3xl:justify-start">
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
                                <Link href={"https://discord.gg/Z2avfRQ4xc"} rel="noopener noreferrer" target="_blank">
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
                    <Image
                        src={Image1}
                        alt="Contact form image"
                        className="w-full h-auto md:w-auto lg:w-[50rem] xl:w-[50rem] 2xl:w-[50rem] 3xl:w-[50rem] m-10"
                        priority
                    />
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

            <div className="bg-[#E5E7EB] w-4/5 mx-auto border bottom-1" />
        </main>
    );
}

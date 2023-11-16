"use client"

import Image from "next/image";
import HeroImage from "../../public/contact/hero-image.png"
import Image1 from "../../public/contact/image1.png"
import Background1 from "../../public/contact/bg1.png"
import Background2 from "../../public/contact/bg2.png"
import Link from "next/link";
import { FaDiscord, FaFacebook, FaReddit, FaTelegram, FaTwitter } from "react-icons/fa";
import ContactUsForm from "@/components/customComponents/ContactUsForm";

export default function Contact() {
    return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
        {/* Contact hero section */}
        <section className="w-full h-[20rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
                <div className="text-center">
                    <h1 className="text-[3rem] md:text-[3rem] leading-11 mb-5 text-[#192033] font-black font-ubuntu">
                        Contact Us
                    </h1>
                </div>
            </div>
        </section>

        {/* Contact form */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-5">
                    <div className="background-image-text" />
                    <h1 className="text-[2.75rem] text-[#192033] font-black font-ubuntu ">
                        We love to hear your <br/>
                        Feedback
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light">
                        Need to get in touch? You can reach us at all our socials below, 
                        or using the contact form on this page.
                    </p>
                    <div className="flex flex-col items-center md:items-start">
                        <div className="flex gap-4">
                        <Link href={"https://facebook.com/devolvedai"}
                        rel="noopener noreferrer"
                        target="_blank">
                            <FaFacebook size={30} />
                        </Link>

                        <Link href={"https://twitter.com/devolvedai"}
                        rel="noopener noreferrer"
                        target="_blank" >
                            <FaTwitter size={30} />
                        </Link>

                        <Link
                        href={"https://www.reddit.com/user/devolvedai"}
                        rel="noopener noreferrer"
                        target="_blank">
                            <FaReddit size={30} />
                        </Link>

                        <Link
                        href={"https://discord.gg/Z2avfRQ4xc"}
                        rel="noopener noreferrer"
                        target="_blank">
                            <FaDiscord size={30} />
                        </Link>

                        <Link
                        href={"https://t.me/devolvedai"}
                        rel="noopener noreferrer"
                        target="_blank">
                            <FaTelegram size={30} />
                        </Link>
                        </div>
                    </div>

                    <div>
                        <ContactUsForm />
                    </div>
                </div>

                <div className="background-image-img" />
                <Image
                    src={Image1}
                    alt="Contact form image"
                    className="mt-5 w-[30rem] h-[30rem] md:mt-0 md:w-[35rem] md:h-[38rem] xl:w-[37rem]"
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
                    width: 170%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>
        <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
    </main>
    );
}

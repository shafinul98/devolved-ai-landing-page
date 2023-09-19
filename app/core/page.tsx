"use client";

import React, { useEffect } from "react";

import TechnologyHeroImage from "../../public/Technology Page Hero Image.webp";
import TechnologyHeroIllustration from "../../public/Technology Page Hero Illustration.webp";

import TechBlogPictureOne from "../../public/Tech Page First Blog Pic.webp";
import TechBlogPictureTwo from "../../public/Tech Page Second Blog.webp";
import TechBlogPictureThree from "../../public/Tech Page Third Blog Pic.webp";
import TechBlogPictureFour from "../../public/Tech Page Fourth Blog.webp";
import TechBlogPictureFive from "../../public/Tech Page Fifth Blog.webp";
import TechBlogPictureSix from "../../public/Tech Blog Six.webp";
import TechBlogPictureSeven from "../../public/Tech Page Seventh Blog.webp";
import TechBlogPictureEight from "../../public/Tech Page Eighth Blog.webp";
import TechBlogPictureNine from "../../public/Tech Page Ninth Blog.webp";
import TechBlogPictureTen from "../../public/Tech Page Tenth Blog.webp";
import TechBlogPictureEleven from "../../public/Tech Page Eleventh Blog.webp";
import TechBlogPictureTwelve from "../../public/Tech Page Twelfth Blog.webp";

import TechPageMidIllustration from "../../public/Tech Page Contribute Section Illustration.svg";
import CheckIconWhite from "../../public/Check Icon White.svg";

import Image from "next/image";
import Button from "@/components/Custom Components/Button";
import BlogCard from "@/components/Custom Components/BlogCard";
import Carousel from "@/components/Custom Components/Carousel";

const TechnologyPage = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable text selection
    document.body.style.userSelect = "none";

    // Cleanup event listeners on unmount
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full ">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            CORE
          </h1>
          <Image
            src={TechnologyHeroImage}
            alt="Hero Image"
            className="w-full md:h-[25rem]"
          />
        </div>
      </section>

      <section className="w-full md:px-16 lg:px-0">
        <div className="flex flex-col gap-x-72 md:gap-0 items-center md:flex-row lg:justify-center lg:gap-36">
          <div className="flex flex-col gap-5 mb-10 px-8 md:px-0 md:mt-[8rem] md:w-[36.81013rem]">
            <h1 className="text-center mt-[1.5rem] md:mt-0 md:text-start text-[1rem] text-[#0074D9]">
              OUR CORE COMPONENTS
            </h1>
            <h1 className="font-bold text-[1.5625rem] md:text-[2rem] text-center md:text-start">
              Powering the Future of Decentralized Intelligence
            </h1>
            <p className="font-normal px-2 md:px-0 text-[1rem] md:text-[1.25rem] text-center text-[#646E73] md:text-start">
              Discover the essence of Devolved AI at its Core—a fusion of
              innovation, community, and empowerment that drives us toward a
              decentralized, people-powered future.
            </p>
            <div className="flex flex-col px-10 md:px-0 md:flex-row justify-center items-center md:justify-start gap-5">
              <Button
                title="Launch App"
                extraStyles=" bg-[#FF6F00] text-white w-full text-center md:w-[7.4375rem] md:h-[2.625rem]"
              />
              <Button
                title="Whitepaper"
                extraStyles=" bg-white text-[#0074D9] border-[#0074D9] w-full text-center md:w-[7.4375rem] md:h-[2.625rem]"
              />
            </div>
          </div>

          <div className="px-14 md:px-0 md:ms-[6rem]">
            <Image
              src={TechnologyHeroIllustration}
              alt="Hero Image"
              className="w-[20rem] h-[20rem] md:w-[32.5rem] md:h-[32.5rem]"
            />
          </div>
        </div>
      </section>

      <section className="w-full my-10 px-10 place-items-center md:hidden mb-20">
        <div className="flex flex-col justify-center items-center">
          <Carousel extraStyles="h-72" bottomStyle="bottom-1">
            <div className="flex flex-col gap-5 px-5">
              <BlogCard
                blogTitle="Decentralization"
                blogDescription="The very fabric of our architecture that ensures no single point of control or failure."
                blogImage={TechBlogPictureOne}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/1"
              />
              <BlogCard
                blogTitle="Proof of Value (PoV) Protocol"
                blogDescription="A novel mechanism that quantifies and rewards value contributions to the ecosystem."
                blogImage={TechBlogPictureTwo}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
              <BlogCard
                blogTitle="Substrate Blockchain"
                blogDescription="A custom-built blockchain providing the ultimate in transparency, security, and ownership."
                blogImage={TechBlogPictureThree}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <BlogCard
                blogTitle="Argocoin (AGC)"
                blogDescription="Our native token, designed to incentivize and empower community participation."
                blogImage={TechBlogPictureFour}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/1"
              />
              <BlogCard
                blogTitle="CommUnity Module"
                blogDescription="An innovative governance system that employs tiered roles, incentivization, and sanctions."
                blogImage={TechBlogPictureFive}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
              <BlogCard
                blogTitle="Token-Weighted Voting"
                blogDescription="Our democratized decision-making framework that respects the voice and stake of each member."
                blogImage={TechBlogPictureSix}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <BlogCard
                blogTitle="Security Infrastructure"
                blogDescription="Innovative, state-of-the-art measures for ensuring utmost data privacy and network integrity."
                blogImage={TechBlogPictureSeven}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/1"
              />
              <BlogCard
                blogTitle="Advanced NLP"
                blogDescription="The cornerstone for user interaction, designed to create a seamless, natural user experience."
                blogImage={TechBlogPictureEight}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
              <BlogCard
                blogTitle="Financial Pool"
                blogDescription="A decentralized treasury fueled by Argocoin, aimed at community-sanctioned innovation and growth."
                blogImage={TechBlogPictureNine}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <BlogCard
                blogTitle="Smart Contracts"
                blogDescription="Self-executing contracts that facilitate, verify, and enforce credible transactions without intermediaries."
                blogImage={TechBlogPictureTen}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/1"
              />
              <BlogCard
                blogTitle="Interoperability"
                blogDescription="Seamless communication between different blockchain networks and modules, ensuring flexibility and future-readiness."
                blogImage={TechBlogPictureEleven}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
              <BlogCard
                blogTitle="Transparency Reports"
                blogDescription="A commitment to openness through regular reporting on ecosystem health, governance, and finances."
                blogImage={TechBlogPictureTwelve}
                imageStyles="mx-auto my-2"
                blogLink="/blogs/2"
              />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="w-full px-5 place-items-center hidden md:flex md:flex-col md:mb-[5rem]">
        <div className="flex flex-col justify-center items-center">
          <div className="flex gap-5 px-5 justify-center items-center">
            <BlogCard
              blogTitle="Decentralization"
              blogDescription="The very fabric of our architecture that ensures no single point of control or failure."
              blogImage={TechBlogPictureOne}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/1"
              titleStyles="mb-10"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Proof of Value (PoV) Protocol"
              blogDescription="A novel mechanism that quantifies and rewards value contributions to the ecosystem."
              blogImage={TechBlogPictureTwo}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              titleStyles="mb-10"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Substrate Blockchain"
              blogDescription="A custom-built blockchain providing the ultimate in transparency, security, and ownership."
              blogImage={TechBlogPictureThree}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              titleStyles="mb-10"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
          <div className="flex gap-5 px-5 justify-center items-center">
            <BlogCard
              blogTitle="Argocoin (AGC)"
              blogDescription="Our native token, designed to incentivize and empower community participation."
              blogImage={TechBlogPictureFour}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/1"
              titleStyles="mb-10"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="CommUnity Module"
              blogDescription="An innovative governance system that employs tiered roles, incentivization, and sanctions."
              blogImage={TechBlogPictureFive}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              titleStyles="mb-10"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Token-Weighted Voting"
              blogDescription="Our democratized decision-making framework that respects the voice and stake of each member."
              blogImage={TechBlogPictureSix}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              titleStyles="mb-10"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
          <div className="flex gap-5 px-5 justify-center items-center">
            <BlogCard
              blogTitle="Security Infrastructure"
              blogDescription="Innovative, state-of-the-art measures for ensuring utmost data privacy and network integrity."
              blogImage={TechBlogPictureSeven}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/1"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Advanced NLP"
              blogDescription="The cornerstone for user interaction, designed to create a seamless, natural user experience."
              blogImage={TechBlogPictureEight}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Financial Pool"
              blogDescription="A decentralized treasury fueled by Argocoin, aimed at community-sanctioned innovation and growth."
              blogImage={TechBlogPictureNine}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
          <div className="flex gap-5 px-5 justify-center items-center">
            <BlogCard
              blogTitle="Smart Contracts"
              blogDescription="Self-executing contracts that facilitate, verify, and enforce credible transactions without intermediaries."
              blogImage={TechBlogPictureTen}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/1"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Interoperability"
              blogDescription="Seamless communication between different blockchain networks and modules, ensuring flexibility and future-readiness."
              blogImage={TechBlogPictureEleven}
              imageStyles="mx-auto my-2"
              blogLink="/blogs/2"
              extraStyles="lg:h-[32.23rem]"
            />
            <BlogCard
              blogTitle="Transparency Reports"
              blogDescription="A commitment to openness through regular reporting on ecosystem health, governance, and finances."
              blogImage={TechBlogPictureTwelve}
              imageStyles="mx-auto my-2 "
              blogLink="/blogs/2"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
        </div>
      </section>

      <section className="w-full place-items-center md:hidden mb-20 bg-[#0074D9] min-h-screen">
        <div className="flex flex-col my-10">
          <Image src={TechPageMidIllustration} alt="" />
          <div className="flex flex-col text-white px-5 gap-3">
            <h1 className="text-base">WHY THESE MATTER:</h1>
            <p className="text-xl font-bold">
              Discover the foundational pillars that make Devolved AI a
              transformative force in decentralized AI technology.
            </p>
            <p>
              From democratizing governance to incentivizing value, we shape the
              future of AI by adhering to key principles.
            </p>
            <div className="flex flex-col items-start justify-start gap-2 text-white">
              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Democratic Governance
                </p>
              </div>
              <div className="flex items-center space-x-2 ">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of User-Centric Innovation
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Shared Prosperity
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Privacy and Security
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Community and Outreach
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full hidden md:flex bg-[#0074D9] my-10 lg:pt-20 lg:mb-24">
        <div className="flex my-[1.5rem] pl-[5.5rem] ">
          <Image
            src={TechPageMidIllustration}
            alt=""
            className="md:w-[32.125rem] md:h-[32.125rem] mt-[2.5rem] lg:w-[42.125rem]"
          />
          <div className="flex flex-col text-white pl-[2rem] w-[38.3125rem] lg:w-[40.3125rem]">
            <h6 className="text-[1rem] font-normal mb-[1.2rem]">
              WHY THESE MATTER:
            </h6>
            <h1 className="text-[2rem] font-bold mb-[0.5rem]">
              Discover the foundational pillars that make Devolved AI a
              transformative force in decentralized AI technology.
            </h1>
            <p className="mb-14 text-[1.25rem] font-normal">
              From democratizing governance to incentivizing value, we shape the
              future of AI by adhering to key principles.
            </p>
            <div className="flex flex-col items-start justify-start gap-5 text-white md:mb-[4rem]">
              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Democratic Governance
                </p>
              </div>
              <div className="flex items-center space-x-2 ">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of User-Centric Innovation
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Shared Prosperity
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Privacy and Security
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Community and Outreach
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Image src={CheckIconWhite} alt="Blue tick" />
                <p className=" text-sm font-normal text-white">
                  Pillar of Transparency
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TechnologyPage;

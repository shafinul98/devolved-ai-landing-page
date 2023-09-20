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
import CoreDetailsCard from "@/components/Custom Components/CoreDetailsCard";
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
            className="w-full md:h-[30rem] object-cover"
          />
        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-x-72 md:gap-0 md:mt-10 items-center md:flex-row lg:justify-center">
          <div className="flex flex-col gap-5 mb-10 px-8 md:px-20 lg:py-10 xl:px-32">
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
                title="Get Early Access"
                extraStyles=" bg-[#FF6F00] text-white w-full text-center md:w-[7.4375rem] md:h-[2.625rem]"
              />
              <Button
                title="Whitepaper"
                extraStyles=" bg-white text-[#0074D9] border-[#0074D9] w-full text-center md:w-[7.4375rem] md:h-[2.625rem]"
              />
            </div>
          </div>

          <div className="px-14 md:px-0 md:ms-12 lg:ms-10 xl:ms-5">
            <Image
              src={TechnologyHeroIllustration}
              alt="Hero Image"
              width={1000}
            />
          </div>
        </div>
      </section>

      <section className="w-full my-10 px-10 flex flex-col items-center justify-center lg:hidden mb-20">
        <div className="flex flex-col justify-center items-center">
          <Carousel extraStyles="h-72" bottomStyle="bottom-1">
            <div className="flex flex-col gap-5 px-5">
              <CoreDetailsCard
                title="Decentralization"
                description="The very essence of Devolved AI lies in its decentralized architecture. Unlike traditional centralized systems, our platform is designed to operate without a single point of control or failure. This ensures that power, decision-making, and data are distributed across the network, enhancing resilience and reducing systemic risks."
                image={TechBlogPictureOne}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Proof of Value (PoV) Protocol"
                description="Our unique PoV Protocol goes beyond mere transaction validation. It quantifies the value each participant contributes to the ecosystem and rewards them accordingly. This mechanism encourages active participation and fosters a sense of shared ownership and community."
                image={TechBlogPictureTwo}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Substrate Blockchain"
                description="Built on a custom substrate blockchain, Devolved AI offers unparalleled transparency, security, and user ownership. Our blockchain is not just a ledger but a foundation that supports advanced features like smart contracts, token-weighted voting, and more."
                image={TechBlogPictureThree}
                imageStyles="mx-auto my-2 "
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <CoreDetailsCard
                title="Argocoin (AGC)"
                description="AGC is not just a cryptocurrency; it's the lifeblood of the Devolved AI ecosystem. Designed to incentivize and empower community participation, AGC holders enjoy benefits like governance rights, staking rewards, and access to exclusive community events."
                image={TechBlogPictureFour}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="CommUnity Module"
                description="Our CommUnity Module revolutionizes governance by introducing tiered roles, incentivization schemes, and sanctions. This ensures that governance is not just token-weighted but also meritocratic, creating a balanced and fair ecosystem."
                image={TechBlogPictureFive}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Token-Weighted Voting"
                description="Democracy is at the heart of Devolved AI. Our token-weighted voting system ensures that every voice is heard and every stake is respected. It allows for inclusive decision-making, where the weight of your vote is directly proportional to your stake in AGC."
                image={TechBlogPictureSix}
                imageStyles="mx-auto my-2 "
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <CoreDetailsCard
                title="Security Infrastructure"
                description="We take data privacy and network integrity very seriously. Our state-of-the-art security measures include advanced encryption algorithms, multi-signature wallets, and regular security audits to ensure that your data is always safe."
                image={TechBlogPictureSeven}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Advanced NLP"
                description="Our focus on Natural Language Processing (NLP) aims to make interactions with the platform as seamless and natural as possible. Advanced algorithms understand user queries and provide accurate, context-aware responses, enhancing the overall user experience."
                image={TechBlogPictureEight}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Financial Pool"
                description="Our decentralized treasury, fueled by Argocoin, is aimed at fostering community-sanctioned innovation and growth. Members can propose projects, vote on them, and even receive funding, all in a transparent and democratic manner."
                image={TechBlogPictureNine}
                imageStyles="mx-auto my-2 "
              />
            </div>
            <div className="flex flex-col gap-5 px-5">
              <CoreDetailsCard
                title="Smart Contracts"
                description="Our platform supports self-executing smart contracts that facilitate, verify, and enforce credible transactions without the need for intermediaries. This not only speeds up processes but also reduces costs and risks associated with manual interventions."
                image={TechBlogPictureTen}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Interoperability"
                description="Devolved AI is designed for the future. Our platform can seamlessly communicate with different blockchain networks and modules, ensuring that as the technology evolves, we are ready to integrate and expand."
                image={TechBlogPictureEleven}
                imageStyles="mx-auto my-2 "
              />
              <CoreDetailsCard
                title="Transparency Reports"
                description="Transparency is not just a buzzword for us; it's a commitment. We regularly publish reports on ecosystem health, governance decisions, and financial statuses to keep our community informed and engaged."
                image={TechBlogPictureTwelve}
                imageStyles="mx-auto my-2 "
              />
            </div>
          </Carousel>
        </div>
      </section>

      <section className="w-full px-5 lg:px-0 hidden lg:flex lg:flex-col md:mb-[5rem]">
        <div className="flex flex-col justify-center items-center md:px-8 lg:px-12 xl:px-16">
          <div className="flex gap-10 lg:gap-3 xl:gap-5 px-5 justify-center items-center">
            <CoreDetailsCard
              title="Decentralization"
              description="The very essence of Devolved AI lies in its decentralized architecture. Unlike traditional centralized systems, our platform is designed to operate without a single point of control or failure. This ensures that power, decision-making, and data are distributed across the network, enhancing resilience and reducing systemic risks."
              image={TechBlogPictureOne}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Proof of Value (PoV) Protocol"
              description="Our unique PoV Protocol goes beyond mere transaction validation. It quantifies the value each participant contributes to the ecosystem and rewards them accordingly. This mechanism encourages active participation and fosters a sense of shared ownership and community."
              image={TechBlogPictureTwo}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Substrate Blockchain"
              description="Built on a custom substrate blockchain, Devolved AI offers unparalleled transparency, security, and user ownership. Our blockchain is not just a ledger but a foundation that supports advanced features like smart contracts, token-weighted voting, and more."
              image={TechBlogPictureThree}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
          <div className="flex gap-10 lg:gap-3 xl:gap-5 px-5 justify-center items-center">
            <CoreDetailsCard
              title="Argocoin (AGC)"
              description="AGC is not just a cryptocurrency; it's the lifeblood of the Devolved AI ecosystem. Designed to incentivize and empower community participation, AGC holders enjoy benefits like governance rights, staking rewards, and access to exclusive community events."
              image={TechBlogPictureFour}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="CommUnity Module"
              description="Our CommUnity Module revolutionizes governance by introducing tiered roles, incentivization schemes, and sanctions. This ensures that governance is not just token-weighted but also meritocratic, creating a balanced and fair ecosystem."
              image={TechBlogPictureFive}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Token-Weighted Voting"
              description="Democracy is at the heart of Devolved AI. Our token-weighted voting system ensures that every voice is heard and every stake is respected. It allows for inclusive decision-making, where the weight of your vote is directly proportional to your stake in AGC."
              image={TechBlogPictureSix}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
          <div className="flex gap-10 lg:gap-3 xl:gap-5 px-5 justify-center items-center">
            <CoreDetailsCard
              title="Security Infrastructure"
              description="We take data privacy and network integrity very seriously. Our state-of-the-art security measures include advanced encryption algorithms, multi-signature wallets, and regular security audits to ensure that your data is always safe."
              image={TechBlogPictureSeven}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Advanced NLP"
              description="Our focus on Natural Language Processing (NLP) aims to make interactions with the platform as seamless and natural as possible. Advanced algorithms understand user queries and provide accurate, context-aware responses, enhancing the overall user experience."
              image={TechBlogPictureEight}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Financial Pool"
              description="Our decentralized treasury, fueled by Argocoin, is aimed at fostering community-sanctioned innovation and growth. Members can propose projects, vote on them, and even receive funding, all in a transparent and democratic manner."
              image={TechBlogPictureNine}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
          <div className="flex gap-10 lg:gap-3 xl:gap-5 px-5 justify-center items-center">
            <CoreDetailsCard
              title="Smart Contracts"
              description="Our platform supports self-executing smart contracts that facilitate, verify, and enforce credible transactions without the need for intermediaries. This not only speeds up processes but also reduces costs and risks associated with manual interventions."
              image={TechBlogPictureTen}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Interoperability"
              description="Devolved AI is designed for the future. Our platform can seamlessly communicate with different blockchain networks and modules, ensuring that as the technology evolves, we are ready to integrate and expand."
              image={TechBlogPictureEleven}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
            <CoreDetailsCard
              title="Transparency Reports"
              description="Transparency is not just a buzzword for us; it's a commitment. We regularly publish reports on ecosystem health, governance decisions, and financial statuses to keep our community informed and engaged."
              image={TechBlogPictureTwelve}
              imageStyles="mx-auto my-2 "
              titleStyles="mb-5"
              extraStyles="lg:h-[32.23rem]"
            />
          </div>
        </div>
      </section>

      <section className="w-full place-items-center lg:hidden mb-20 bg-[#0074D9] min-h-screen">
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

      <section className="w-full hidden lg:flex bg-[#0074D9] my-10 lg:pt-20 lg:mb-24">
        <div className="flex my-[1.5rem] lg:px-0 xl:px-20">
          <Image src={TechPageMidIllustration} width={400} alt="" />
          <div className="flex flex-col text-white pl-[2rem]">
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

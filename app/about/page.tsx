"use client";

import React, { useEffect, useState } from "react";

import AboutHeroImage from "../../public/About Page Hero Image.webp";
import AboutHeroIllustration from "../../public/About Page Hero Illustration.webp";
import FuturePlansImage from "../../public/Future Plans Image.webp";
import FuturePlansImageCurved from "../../public/Future Plans Curved Image.webp";

import Nathan from "../../public/Nathan.jpeg";
import Nazmul from "../../public/Nazmul.jpg";
import Justin from "../../public/Justin.jpeg";
import Tahlil from "../../public/tahlil.png";
import Lamima from "../../public/Lamima.jpg";
import Samir from "../../public/Samir.jpg";
import Mahfuzzur from "../../public/Mahfuzzur.jpg";
import Shafin from "../../public/Shafinul.png";
import Ariful from "../../public/Ariful.jpg";

import Image from "next/image";
import TeamMemberCard from "@/components/Custom Components/Team Member Card";
import Carousel from "@/components/Custom Components/Carousel";
import BlogCarousel from "@/components/Custom Components/BlogCarousel";
import MilestoneCard from "@/components/Custom Components/MilestoneCard";
import BlogCard from "@/components/Custom Components/BlogCard";
import Button from "@/components/Custom Components/Button";

const About = () => {
  type Blog = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
  }[];

  const [blogs, setBlogs] = useState<Blog>([]);

  const fetchBlogs = async () => {
    const response = await fetch("/api/blogs", {
      method: "GET",
    });

    return await response.json();
  };

  useEffect(() => {
    fetchBlogs().then(({ data }) => {
      setBlogs(data);
      console.log(blogs);
    });
  }, []);

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
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            ABOUT
          </h1>
          <Image
            src={AboutHeroImage}
            alt="Hero Image"
            className="w-full md:h-[30rem] object-cover"
          />
        </div>
      </section>

      <section className="w-full my-10 px-5 place-items-center lg:hidden">
        <h1 className="text-2xl font-bold text-[#2D3748] mb-5">Our Story</h1>
        <p className="text-start my-5 text-[1rem] text-[#646E73]">
          At Devolved AI, we began with a singular vision: to democratize the
          field of artificial intelligence by making it accessible, transparent,
          and community-driven. We saw a world where technological advancement
          didn't have to mean complexity and exclusivity, so we set out to build
          an ecosystem that welcomes everyone to participate.
        </p>
        <p className="text-start my-5 text-[1rem] text-[#646E73]">
          Beyond just creating algorithms or software, we are here to spark a
          movement. We've laid the foundation for an open platform that
          encourages contributions from all corners of the globe. Whether you're
          a data scientist, a student, or simply curious about AI, you have a
          place in this community. Together, we're not just developing
          technology; we're building a future that belongs to all of us.
        </p>
        <div className="my-5 flex justify-center">
          <Image
            src={AboutHeroIllustration}
            alt="Futuristic World Illustration"
            loading="eager"
            className="w-[25rem] h-[25rem]"
          />
        </div>
      </section>

      <section className="w-full mt-10 mb-[4.5rem] hidden lg:flex md:items-center lg:justify-center lg:px-12 xl:px-28 2xl:px-32 3xl:container">
        <div className="flex flex-col px-20 md:px-16 lg:px-0 xl:max-2xl:px-10">
          <h1 className="text-[2rem] font-bold text-[#2D3748] mb-3">
            Our Story
          </h1>
          <p className="text-start my-5 text-[1.25rem] text-[#646E73]">
            At Devolved AI, we began with a singular vision: to democratize the
            field of artificial intelligence by making it accessible,
            transparent, and community-driven. We saw a world where
            technological advancement didn't have to mean complexity and
            exclusivity, so we set out to build an ecosystem that welcomes
            everyone to participate.
          </p>
          <p className="text-start my-5 text-[1.25rem] text-[#646E73]">
            Beyond just creating algorithms or software, we are here to spark a
            movement. We've laid the foundation for an open platform that
            encourages contributions from all corners of the globe. Whether
            you're a data scientist, a student, or simply curious about AI, you
            have a place in this community. Together, we're not just developing
            technology; we're building a future that belongs to all of us.
          </p>
        </div>

        <div className="my-5 md:ms-[5.5rem] lg:ms-[7rem] xl:ms-[5rem] 2xl:pr-[2rem]">
          <Image
            src={AboutHeroIllustration}
            alt="Hero Illustration"
            className="w-full mt-10"
          />
        </div>
      </section>

      <section className="w-full px-3 md:mb-[4.5rem] mb-[2.5rem]">
        <div className="flex flex-col gap-10 md:flex md:flex-row md:my-8 md:px-10 lg:justify-center xl:max-2xl:px-28 2xl:px-28 3xl:container">
          <div className="flex flex-col shadow-lg md:pl-[1.19rem] p-5 text-center md:text-start rounded-md w-full lg:p-5 sm:max-md:pb-[5rem]">
            <h1 className="text-[2rem] font-bold text-[#2D3748] mb-5">
              Mission
            </h1>
            <p className="text-start text-[1rem] text-[#646E73]">
              Our mission goes beyond just building a platform; it's about
              fostering a community-driven landscape that is guided and
              controlled by its users. We are committed to ensuring that our AI
              ecosystem evolves in a way that serves the interests and
              aspirations of those who interact with it.
            </p>
          </div>
          <div className="flex flex-col shadow-lg pl-[1.19rem] p-5 text-center md:text-start rounded-md w-full lg:p-5 sm:max-md:pb-[5rem]">
            <h1 className="text-[2rem] font-bold text-[#2D3748] mb-5">
              Vision
            </h1>
            <p className="text-start text-[1rem] text-[#646E73]">
              Our ultimate vision is nothing less than achieving Artificial
              General Intelligence (AGI). We aim to extend the boundaries of
              what is currently possible by encouraging wide-ranging community
              contributions in AI training, data validation, and other fields.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full px-3 mx-aut0 bg-[#f5f5f5]">
        <div className="mt-[1rem] md:mt-[4rem]">
          <h1 className="text-[#0074D9] md:text-[1rem] text-center">
            OUR TEAM
          </h1>
          <h1 className="text-[#2D3748] md:text-[2rem] text-center font-bold">
            Your Devolved Squad
          </h1>
          <div className="md:hidden">
            <Carousel extraStyles="h-56 md:my-10" bottomStyle="">
              <TeamMemberCard
                cardImage={Nathan}
                cardDescription="Founder & CEO"
                cardFooter={[
                  "",
                  "https://www.linkedin.com/in/nathan-lee-peterson",
                  "",
                ]}
                hasGitHub={false}
                hasLinkedIn={true}
                hasTwitter={false}
                cardTitle="Nathan Peterson"
              />
              <TeamMemberCard
                cardImage={Nazmul}
                cardDescription="COO"
                cardFooter={[
                  "",
                  "https://www.linkedin.com/in/md-nazmul-hossain",
                  "https://twitter.com/TahlilBsse0803",
                ]}
                cardTitle="Md. Nazmul Hossain"
                hasGitHub={false}
                hasTwitter={false}
                hasLinkedIn={true}
              />
              <TeamMemberCard
                cardImage={Justin}
                cardDescription="Board Member"
                cardFooter={[
                  "",
                  "https://www.linkedin.com/in/justin-seyl-c-d-s-csp-cas-b76b4912",
                  "",
                ]}
                cardTitle="Justin Seyl"
                hasGitHub={false}
                hasTwitter={false}
                hasLinkedIn={true}
              />
              <TeamMemberCard
                cardImage={Tahlil}
                cardDescription="Lead Blockchain Engineer"
                cardFooter={[
                  "https://github.com/tahlil",
                  "https://www.linkedin.com/in/tahlil/",
                  "https://twitter.com/TahlilBsse0803",
                ]}
                cardTitle="Tahlil"
                hasGitHub={true}
                hasTwitter={true}
                hasLinkedIn={true}
              />
              <TeamMemberCard
                cardImage={Lamima}
                cardDescription="Machine Learning Engineer"
                cardFooter={[
                  "https://github.com/Ava7i",
                  "https://www.linkedin.com/in/lamima-tabassum-ava",
                  "https://twitter.com/AvaLamima17577",
                ]}
                cardTitle="Lamima Tabassum Ava"
                hasGitHub={true}
                hasTwitter={true}
                hasLinkedIn={true}
              />
              <TeamMemberCard
                cardImage={Mahfuzzur}
                cardDescription="Associate Machine Learning Engineer"
                cardFooter={[
                  "https://github.com/Mahfuzzur-Rahman",
                  "https://www.linkedin.com/in/mahfuzzur-rahman-samir/",
                  "https://x.com/rahmanmahfuzzur?s=21&t=ItQTV17i_DjsOjCmwO3JTg",
                ]}
                cardTitle="Mahfuzzur Rahman Samir"
                hasGitHub={true}
                hasTwitter={true}
                hasLinkedIn={true}
              />
              <TeamMemberCard
                cardImage={Shafin}
                cardDescription="Full Stack Engineer"
                cardFooter={[
                  "https://github.com/shafoo98",
                  "https://www.linkedin.com/in/shafinulislam/",
                  "https://twitter.com/ShafinulIs10648",
                ]}
                cardTitle="Shafinul Islam"
                hasGitHub={true}
                hasTwitter={true}
                hasLinkedIn={true}
              />
              <TeamMemberCard
                cardImage={Ariful}
                cardDescription="Junior Blockchain Developer"
                cardFooter={[
                  "https://github.com/arifulislam99",
                  "https://www.linkedin.com/in/marifulislam099/",
                  "",
                ]}
                cardTitle="Md. Ariful Islam"
                hasGitHub={true}
                hasTwitter={false}
                hasLinkedIn={true}
              />
            </Carousel>
          </div>
          <div className="md:flex md:flex-wrap md:justify-evenly md:my-10 md:px-10 md:gap-x-10 lg:px-18 xl:px-24 2xl:px-14 3xl:container hidden">
            <TeamMemberCard
              cardImage={Nathan}
              cardDescription="CEO & Founder"
              cardFooter={[
                "",
                "https://www.linkedin.com/in/nathan-lee-peterson",
                "https://twitter.com/TahlilBsse0803",
              ]}
              cardTitle="Nathan Peterson"
              hasGitHub={false}
              hasTwitter={false}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Nazmul}
              cardDescription="COO"
              cardFooter={[
                "",
                "https://www.linkedin.com/in/md-nazmul-hossain",
                "https://twitter.com/TahlilBsse0803",
              ]}
              cardTitle="Md. Nazmul Hossain"
              hasGitHub={false}
              hasTwitter={false}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Justin}
              cardDescription="Board Member"
              cardFooter={[
                "",
                "https://www.linkedin.com/in/justin-seyl-c-d-s-csp-cas-b76b4912",
                "",
              ]}
              cardTitle="Justin Seyl"
              hasGitHub={false}
              hasTwitter={false}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Tahlil}
              cardDescription="Lead Blockchain Developer"
              cardFooter={[
                "https://github.com/tahlil",
                "https://www.linkedin.com/in/tahlil/",
                "https://twitter.com/TahlilBsse0803",
              ]}
              cardTitle="Tahlil"
              hasGitHub={true}
              hasTwitter={true}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Lamima}
              cardDescription="Machine Learning Engineer"
              cardFooter={[
                "https://github.com/Ava7i",
                "https://www.linkedin.com/in/lamima-tabassum-ava",
                "https://twitter.com/AvaLamima17577",
              ]}
              cardTitle="Lamima Tabassum Ava"
              hasGitHub={true}
              hasTwitter={true}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Mahfuzzur}
              cardDescription="Associate ML Engineer"
              cardFooter={[
                "https://github.com/Mahfuzzur-Rahman",
                "https://www.linkedin.com/in/mahfuzzur-rahman-samir/",
                "https://x.com/rahmanmahfuzzur?s=21&t=ItQTV17i_DjsOjCmwO3JTg",
              ]}
              cardTitle="Mahfuzzur Rahman Samir"
              hasGitHub={true}
              hasTwitter={true}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Shafin}
              cardDescription="Full Stack Web Developer"
              cardFooter={[
                "https://github.com/shafoo98",
                "https://www.linkedin.com/in/shafinulislam/",
                "https://twitter.com/ShafinulIs10648",
              ]}
              cardTitle="Shafinul Islam"
              hasGitHub={true}
              hasTwitter={true}
              hasLinkedIn={true}
            />
            <TeamMemberCard
              cardImage={Ariful}
              cardDescription="Junior Blockchain Developer"
              cardFooter={[
                "https://github.com/arifulislam99",
                "https://www.linkedin.com/in/marifulislam099/",
                "",
              ]}
              cardTitle="Md. Ariful Islam"
              hasGitHub={true}
              hasTwitter={false}
              hasLinkedIn={true}
            />
          </div>
        </div>
      </section>

      <section className="w-full mt-16 pt-5 place-items-center md:hidden">
        <h1 className="text-[#0074D9] text-center">TIMELINE</h1>
        <h1 className="text-[#2D3748] text-center font-bold text-2xl">
          Milestones and Future Plans
        </h1>
        <div className="flex flex-col items-center justify-center">
          <MilestoneCard
            date="Q3-2023"
            milestone="Development of our Minimum Viable Product (MVP) commences, focusing initially on robust Natural Language Processing capabilities."
          />
          <MilestoneCard
            date="Q4 2023"
            milestone="Beta testing becomes available to the public, allowing for community input and the initial distribution of Argocoin (AGC)."
          />
          <MilestoneCard
            date="Q1-Q2 2024"
            milestone="Core features such as governance systems, token rewards, and community-driven AI training are officially launched."
          />
          <MilestoneCard
            date="Q3 2024"
            milestone="We initiate the development and implementation of new AI modules, as we aim to extend the platform's applicability and reach."
          />
        </div>
        <article className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-10 gap-5">
          <Image src={FuturePlansImage} alt="" />
          <div className="flex flex-col gap-3 p-5">
            <h1 className="text-[#0074D9] text-start text-sm">FUTURE PLANS</h1>
            <h1 className="text-[#2D3748] text-start text-lg">
              Advancing Toward a Decentralized AI Ecosystem: Our Roadmap for
              Continued Growth and Community Engagement
            </h1>
            <p className="text-[#646E73]">
              We will continue to grow and refine our platform, inviting more
              contributions in other realms of AI, including computer vision and
              predictive analytics. With rigorous testing and audits, we aim to
              be the gold standard in AI transparency and governance.
            </p>
          </div>
        </article>
      </section>

      <section className="w-full mt-[5rem] px-5 place-items-center hidden md:flex md:flex-col">
        <h6 className="text-[#0074D9] md:text-[1rem] text-center">TIMELINE</h6>
        <h1 className="text-[#2D3748] md:mt-[0.5rem] md:text-[2rem] text-center font-bold text-2xl">
          Milestones and Future Plans
        </h1>
        <div className="flex items-center justify-center px-10 lg:px-20 xl:px-40 2xl:px-32 3xl:container gap-5">
          <MilestoneCard
            date="Q3-2023"
            milestone="Development of our Minimum Viable Product (MVP) commences, focusing initially on robust Natural Language Processing capabilities."
          />
          <MilestoneCard
            date="Q4 2023"
            milestone="Beta testing becomes available to the public, allowing for community input and the initial distribution of Argocoin (AGC)."
          />
          <MilestoneCard
            date="Q1-Q2 2024"
            milestone="Core features such as governance systems, token rewards, and community-driven AI training are officially launched."
          />
          <MilestoneCard
            date="Q3 2024"
            milestone="We initiate the development and implementation of new AI modules, as we aim to extend the platform's applicability and reach."
          />
        </div>
        <article className="mx-10 lg:mx-20 xl:mx-40 2xl:mx-32 3xl:container rounded-2xl shadow-xl flex flex-row-reverse items-center justify-center my-10 gap-5">
          <Image
            src={FuturePlansImageCurved}
            alt=""
            className="rounded md:w-1/2"
            width={500}
          />
          <div className="flex flex-col gap-3 p-5 md:p-10 pr-36">
            <h1 className="text-[#0074D9] text-start text-sm">FUTURE PLANS</h1>
            <h1 className="text-[#2D3748] text-start text-lg">
              Advancing Toward a Decentralized AI Ecosystem: Our Roadmap for
              Continued Growth and Community Engagement
            </h1>
            <p className="text-[#646E73]">
              We will continue to grow and refine our platform, inviting more
              contributions in other realms of AI, including computer vision and
              predictive analytics. With rigorous testing and audits, we aim to
              be the gold standard in AI transparency and governance.
            </p>
            <div className="border border-[#BDBDBD] mt-5"></div>
          </div>
        </article>
      </section>

      <section className="w-full my-10 px-2 place-items-center lg:hidden mb-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#0074D9] text-center">BLOGS</h1>
          <h1 className="text-[#2D3748] text-center font-bold text-2xl">
            Press & Media
          </h1>
          {blogs.length > 0 ? (
            <Carousel extraStyles="h-72" bottomStyle="bottom-1">
              {blogs.map((data) => {
                return (
                  <BlogCard
                    blogTitle={data.title}
                    blogDescription={data.description}
                    blogImage={data.image}
                    blogLink={`/blog/${data.slug}`}
                  />
                );
              })}
            </Carousel>
          ) : (
            <p>No blogs found</p>
          )}
          <Button
            title="View all"
            extraStyles=" bg-blue-500 text-white mt-10"
          />
        </div>
      </section>

      <section className="w-full my-10 md:my-14 px-5 place-items-center hidden lg:flex lg:flex-col bg-[#f5f5f5]">
        <div className="flex flex-col justify-center items-center mt-[3.5rem]">
          <h1 className="text-[#0074D9] text-center">BLOGS</h1>
          <h1 className="text-[#2D3748] text-center font-bold text-2xl">
            Press & Media
          </h1>
          {blogs.length > 0 ? (
            <div className="w-10/12">
              <BlogCarousel bottomStyle="1">
                {blogs.map((blog) => {
                  return (
                    <BlogCard
                      blogTitle={blog.title}
                      blogDescription={blog.description}
                      blogImage={blog.image}
                      blogLink={`/blog/${blog.slug}`}
                    />
                  );
                })}
              </BlogCarousel>
            </div>
          ) : (
            <p>No blogs found</p>
          )}

          <Button
            title="View all"
            extraStyles=" bg-blue-500 mt-20 w-[8.625rem] h-[2.625rem] mb-[3.5rem] border-[#0074D9] bg-white text-[#0074D9]"
            hasRightArrowIcon={true}
          />
        </div>
      </section>
    </main>
  );
};

export default About;

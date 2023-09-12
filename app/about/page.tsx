import React from "react";

import AboutHeroImage from "../../public/About Page Hero Image.svg";
import AboutHeroIllustration from "../../public/About Page Hero Illustration.svg";
import FuturePlansImage from "../../public/Future Plans Image.svg";
import FuturePlansImageCurved from "../../public/Future Plans Curved Image.svg";
import BlogsOnePicture from "../../public/Blogs One Picture.svg";
import Image from "next/image";
import TeamMemberCard from "@/components/Custom Components/Team Member Card";
import Carousel from "@/components/Custom Components/Carousel";
import MilestoneCard from "@/components/Custom Components/MilestoneCard";
import Link from "next/link";
import BlogCard from "@/components/Custom Components/BlogCard";
import Button from "@/components/Custom Components/Button";

const About = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="w-full place-items-center">
        <div className="relative">
          <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-3xl md:text-5xl">
            About
          </h1>
          <Image src={AboutHeroImage} alt="Hero Image" className="w-full" />
        </div>
      </section>

      <section className="w-full my-10 px-5 place-items-center md:hidden">
        <h1 className="text-2xl font-bold text-[#2D3748] mb-5">Our Story</h1>
        <p className="text-start my-5 text-sm text-[#646E73]">
          At Devolved AI, we began with a singular vision: to democratize the
          field of artificial intelligence by making it accessible, transparent,
          and community-driven. We saw a world where technological advancement
          didn't have to mean complexity and exclusivity, so we set out to build
          an ecosystem that welcomes everyone to participate.
        </p>
        <p className="text-start my-5 text-sm text-[#646E73]">
          Beyond just creating algorithms or software, we are here to spark a
          movement. We've laid the foundation for an open platform that
          encourages contributions from all corners of the globe. Whether you're
          a data scientist, a student, or simply curious about AI, you have a
          place in this community. Together, we're not just developing
          technology; we're building a future that belongs to all of us.
        </p>
        <div className="my-5">
          <Image src={AboutHeroIllustration} alt="Thinking User Illustration" />
        </div>
      </section>

      <section className="w-full my-10 px-16 place-items-center hidden md:flex md:items-center">
        <div className="flex flex-col md:pr-72">
          <h1 className="text-2xl font-bold text-[#2D3748] mb-5">Our Story</h1>
          <p className="text-start my-5 text-sm text-[#646E73]">
            At Devolved AI, we began with a singular vision: to democratize the
            field of artificial intelligence by making it accessible,
            transparent, and community-driven. We saw a world where
            technological advancement didn't have to mean complexity and
            exclusivity, so we set out to build an ecosystem that welcomes
            everyone to participate.
          </p>
          <p className="text-start my-5 text-sm text-[#646E73]">
            Beyond just creating algorithms or software, we are here to spark a
            movement. We've laid the foundation for an open platform that
            encourages contributions from all corners of the globe. Whether
            you're a data scientist, a student, or simply curious about AI, you
            have a place in this community. Together, we're not just developing
            technology; we're building a future that belongs to all of us.
          </p>
        </div>

        <div className="my-5 md:me-5">
          <Image
            src={AboutHeroIllustration}
            alt="Hero Illustration"
            width={2000}
          />
        </div>
      </section>

      <section className="w-full px-5 place-items-center md:mb-16">
        <div className="flex flex-col gap-10 md:flex md:flex-row md:mx-10">
          <div className="flex flex-col shadow-lg p-5 rounded-md">
            <h1 className="text-3xl font-bold text-[#2D3748] mb-5 text-center">
              Mission
            </h1>
            <p className="text-start text-sm text-[#646E73]">
              Our mission goes beyond just building a platform; it's about
              fostering a community-driven landscape that is guided and
              controlled by its users. We are committed to ensuring that our AI
              ecosystem evolves in a way that serves the interests and
              aspirations of those who interact with it.
            </p>
          </div>
          <div className="flex flex-col shadow-lg p-5 rounded-md">
            <h1 className="text-3xl font-bold text-[#2D3748] mb-5 text-center">
              Vision
            </h1>
            <p className="text-start text-sm text-[#646E73]">
              Our ultimate vision is nothing less than achieving Artificial
              General Intelligence (AGI). We aim to extend the boundaries of
              what is currently possible by encouraging wide-ranging community
              contributions in AI training, data validation, and other fields.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full my-10 px-5 place-items-center">
        <div>
          <h1 className="text-[#0074D9] text-center">OUR TEAM</h1>
          <h1 className="text-[#2D3748] text-center font-bold text-2xl">
            Trust the professionals
          </h1>
          <div className="md:hidden">
            <Carousel extraStyles="h-56 md:my-10" bottomStyle="">
              <TeamMemberCard
                cardTitle="Shafinul Islam"
                cardDescription="Full Stack Developer"
                cardImage={AboutHeroImage}
                cardFooter={[
                  "https://github.com/shafoo98/",
                  "https://linkedin.com",
                  "https://twitter.com/",
                ]}
              />
              <TeamMemberCard
                cardTitle="Tahlil"
                cardDescription="Lead Blockchain Developer"
                cardImage={AboutHeroIllustration}
                cardFooter={[
                  "https://github.com/shafoo98/",
                  "https://linkedin.com",
                  "https://twitter.com/",
                ]}
              />
              <TeamMemberCard
                cardTitle="Tahlil"
                cardDescription="Lead Blockchain Developer"
                cardImage={AboutHeroIllustration}
                cardFooter={[
                  "https://github.com/shafoo98/",
                  "https://linkedin.com",
                  "https://twitter.com/",
                ]}
              />
              <TeamMemberCard
                cardTitle="Tahlil"
                cardDescription="Lead Blockchain Developer"
                cardImage={AboutHeroIllustration}
                cardFooter={[
                  "https://github.com/shafoo98/",
                  "https://linkedin.com",
                  "https://twitter.com/",
                ]}
              />
            </Carousel>
          </div>
          <div className="md:flex md:flex-wrap md:justify-evenly md:my-10 md:px-10 md:gap-x-10 hidden">
            <TeamMemberCard
              cardTitle="Shafinul Islam"
              cardDescription="Full Stack Developer"
              cardImage={AboutHeroImage}
              cardFooter={[
                "https://github.com/shafoo98/",
                "https://linkedin.com",
                "https://twitter.com/",
              ]}
            />
            <TeamMemberCard
              cardTitle="Tahlil"
              cardDescription="Lead Blockchain Developer"
              cardImage={AboutHeroIllustration}
              cardFooter={[
                "https://github.com/shafoo98/",
                "https://linkedin.com",
                "https://twitter.com/",
              ]}
            />
            <TeamMemberCard
              cardTitle="Tahlil"
              cardDescription="Lead Blockchain Developer"
              cardImage={AboutHeroIllustration}
              cardFooter={[
                "https://github.com/shafoo98/",
                "https://linkedin.com",
                "https://twitter.com/",
              ]}
            />
            <TeamMemberCard
              cardTitle="Tahlil"
              cardDescription="Lead Blockchain Developer"
              cardImage={AboutHeroIllustration}
              cardFooter={[
                "https://github.com/shafoo98/",
                "https://linkedin.com",
                "https://twitter.com/",
              ]}
            />
            <TeamMemberCard
              cardTitle="Tahlil"
              cardDescription="Lead Blockchain Developer"
              cardImage={AboutHeroIllustration}
              cardFooter={[
                "https://github.com/shafoo98/",
                "https://linkedin.com",
                "https://twitter.com/",
              ]}
            />
            <TeamMemberCard
              cardTitle="Tahlil"
              cardDescription="Lead Blockchain Developer"
              cardImage={AboutHeroIllustration}
              cardFooter={[
                "https://github.com/shafoo98/",
                "https://linkedin.com",
                "https://twitter.com/",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="w-full my-10 px-5 place-items-center md:hidden">
        <h1 className="text-[#0074D9] text-center">Timeline</h1>
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
            <h1 className="text-[#0074D9] text-start text-sm">Future Plans</h1>
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

      <section className="w-full my-10 px-5 place-items-center hidden md:flex md:flex-col">
        <h1 className="text-[#0074D9] text-center">Timeline</h1>
        <h1 className="text-[#2D3748] text-center font-bold text-2xl">
          Milestones and Future Plans
        </h1>
        <div className="flex items-center justify-center px-10 gap-5">
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
        <article className="mx-10 rounded-2xl shadow-lg flex flex-row-reverse items-center justify-center my-10 gap-5">
          <Image src={FuturePlansImageCurved} alt="" className="round" />
          <div className="flex flex-col gap-3 p-5 pr-36">
            <h1 className="text-[#0074D9] text-start text-sm">Future Plans</h1>
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

      <section className="w-full my-10 px-10 place-items-center md:hidden mb-20">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#0074D9] text-center">BLOGS</h1>
          <h1 className="text-[#2D3748] text-center font-bold text-2xl">
            Press & Media
          </h1>
          <Carousel extraStyles="h-72" bottomStyle="bottom-1">
            <BlogCard
              blogTitle="Increasing Prosperity With Positive Thinking"
              blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
              blogImage={BlogsOnePicture}
              blogLink="/blogs/1"
            />
            <BlogCard
              blogTitle="Increasing Prosperity With Positive Thinking"
              blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
              blogImage={BlogsOnePicture}
              blogLink="/blogs/2"
            />
          </Carousel>

          <Button
            title="View all"
            extraStyles=" bg-blue-500 text-white mt-10 w-3/4"
            hasRightArrowIcon={true}
          />
        </div>
      </section>

      <section className="w-full my-10 px-5 place-items-center hidden md:flex md:flex-col md:mb-40">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-[#0074D9] text-center">BLOGS</h1>
          <h1 className="text-[#2D3748] text-center font-bold text-2xl">
            Press & Media
          </h1>
          <Carousel extraStyles="h-72" bottomStyle="bottom-1">
            <div className="flex gap-5 px-5 justify-center items-center">
              <BlogCard
                blogTitle="Increasing Prosperity With Positive Thinking"
                blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
                blogImage={BlogsOnePicture}
                blogLink="/blogs/1"
              />
              <BlogCard
                blogTitle="Increasing Prosperity With Positive Thinking"
                blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
                blogImage={BlogsOnePicture}
                blogLink="/blogs/2"
              />
              <BlogCard
                blogTitle="Increasing Prosperity With Positive Thinking"
                blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
                blogImage={BlogsOnePicture}
                blogLink="/blogs/2"
              />
            </div>
            <div className="flex gap-5 px-5 justify-center items-center">
              <BlogCard
                blogTitle="Increasing Prosperity With Positive Thinking"
                blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
                blogImage={BlogsOnePicture}
                blogLink="/blogs/1"
              />
              <BlogCard
                blogTitle="Increasing Prosperity With Positive Thinking"
                blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
                blogImage={BlogsOnePicture}
                blogLink="/blogs/2"
              />
              <BlogCard
                blogTitle="Increasing Prosperity With Positive Thinking"
                blogDescription="Much more than a bank, fastest and most convenient financial and administrative co-driver to work with."
                blogImage={BlogsOnePicture}
                blogLink="/blogs/2"
              />
            </div>
          </Carousel>

          <Button
            title="View all"
            extraStyles=" bg-blue-500 text-white mt-10 w-1/2"
            hasRightArrowIcon={true}
          />
        </div>
      </section>
    </main>
  );
};

export default About;

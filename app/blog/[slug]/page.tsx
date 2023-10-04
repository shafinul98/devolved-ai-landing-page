"use client";

import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const BlogPage = ({ params }: { params: { slug: string } }) => {
  type Blog = {
    _id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
  };

  const [blog, setBlog] = useState<Blog>({
    _id: "",
    title: "",
    slug: "",
    description: "",
    image: "",
  });

  const fetchBlog = async () => {
    const response = await fetch(`/api/blogs/${params.slug}`, {
      method: "GET",
    });

    return await response.json();
  };

  useEffect(() => {
    fetchBlog().then(({ data }) => {
      setBlog(data);
    });
  }, []);

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-start justify-between">
      {/* Blog Header */}
      <section className="flex flex-col mt-10 min-h-screen 3xl:container 2xl:max-3xl:px-28 xl:max-2xl:px-24 lg:max-xl:px-14 w-full">
        <h1 className="xl:text-[2rem] lg:text-[1.5rem] text-[#2D3748] font-extrabold">
          {blog.title}
        </h1>
        {/* Blog Image */}
        <Image
          src={blog.image}
          alt={blog.title}
          width={500}
          height={500}
          className="my-5"
          priority={true}
          style={{ width: "100%", objectFit: "cover", height: "30%" }}
        />
        {/* Blog Content */}
        <article className="mt-10">
          <p className="text-[#646E73] text-[1.25rem] text-justify leading-relaxed whitespace-break-spaces">
            {blog.description}
          </p>
        </article>
      </section>
    </main>
  );
};

export default BlogPage;

import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  blogTitle: string;
  blogImage: string;
  blogDescription: string;
  blogLink: string;
  extraStyles?: string;
  imageStyles?: string;
  titleStyles?: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  blogTitle,
  blogImage,
  blogDescription,
  blogLink,
  extraStyles,
  imageStyles,
  titleStyles,
}: BlogCardProps) => {
  return (
    <article
      className={`mx-auto sm:max-md:w-full md:max-lg:w-[40.75rem] md:h-[30.23rem] lg:w-[18.75rem] xl:w-[25rem] 2xl:w-[27.5rem] ${extraStyles} rounded-[0.75rem] flex flex-col my-5 p-5 shadow-lg`}
    >
      {/* Image */}
      <Image
        src={`${blogImage}`}
        alt={blogTitle}
        width={500}
        height={500}
        className={
          imageStyles + "md:w-[150rem] md:h-[18.5rem] md:max-xl:mx-auto"
        }
      />
      {/* Blog Title */}
      <h1
        className={`text-[1.25rem] font-semibold text-start my-4 ${titleStyles}`}
      >
        {blogTitle}
      </h1>
      {/* Blog Description */}
      <p className="text-gray-600 text-sm text-start mb-5">{blogDescription}</p>
      {/* Blog Link */}
      <Link
        href={blogLink}
        rel="noopener noreferrer"
        target="_blank"
        className="text-blue-500 text-end "
      >
        Learn more
      </Link>
    </article>
  );
};

export default BlogCard;

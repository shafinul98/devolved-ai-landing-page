import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  blogTitle: string;
  blogImage: any;
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
      className={`w-[20.0625rem] h-[25.8125rem] md:w-[23.75rem] md:h-[30.23rem] lg:w-[28.75rem] ${extraStyles} rounded-[0.75rem] flex flex-col my-5 p-5 shadow-lg`}
    >
      {/* Image */}
      <Image
        src={blogImage}
        alt={blogTitle}
        className={imageStyles + "md:w-[150rem] md:h-[18.5rem]"}
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
        href="#"
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

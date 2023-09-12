import React from "react";
import Link from "next/link";
import Image from "next/image";

type BlogCardProps = {
  blogTitle: string;
  blogImage: any;
  blogDescription: string;
  blogLink: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  blogTitle,
  blogImage,
  blogDescription,
  blogLink,
}: BlogCardProps) => {
  return (
    <article className="flex flex-col my-5 p-5 shadow-lg">
      {/* Image */}
      <Image src={blogImage} alt={blogTitle} />
      {/* Blog Title */}
      <h1 className="text-lg font-semibold text-start my-2">{blogTitle}</h1>
      {/* Blog Description */}
      <p className="text-gray-600 text-sm text-start mb-4">{blogDescription}</p>
      {/* Blog Link */}
      <Link
        href={blogLink}
        rel="noopener noreferrer"
        target="_blank"
        className="text-blue-500 text-end"
      >
        Learn More
      </Link>
    </article>
  );
};

export default BlogCard;

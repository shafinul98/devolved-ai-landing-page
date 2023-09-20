import React from "react";
import Image from "next/image";

type CoreDetailsCardProps = {
  title: string;
  image: any;
  description: string;
  extraStyles?: string;
  imageStyles?: string;
  titleStyles?: string;
};

const CoreDetailsCard: React.FC<CoreDetailsCardProps> = ({
  title,
  image,
  description,
  extraStyles,
  imageStyles,
  titleStyles,
}: CoreDetailsCardProps) => {
  return (
    <article
      className={`w-[20.0625rem] h-[28.8125rem] md:w-[23.75rem] md:h-[30.23rem] lg:w-[28.75rem] ${extraStyles} rounded-[0.75rem] flex flex-col my-5 p-5 shadow-lg transition ease-in-out delay-150 hover:-translate-y-3 hover:scale-105`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        className={imageStyles + "md:w-[150rem] md:h-[18.5rem]"}
      />
      {/* Title */}
      <h1
        className={`text-[1.25rem] text-[#2D3748] font-bold text-start ${titleStyles}`}
      >
        {title}
      </h1>
      {/* Description */}
      <p className="text-[#646E73] text-sm text-start">{description}</p>
    </article>
  );
};

export default CoreDetailsCard;

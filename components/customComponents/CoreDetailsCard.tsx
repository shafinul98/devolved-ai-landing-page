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
      className={`${extraStyles} sm:max-md:w-full rounded-[0.75rem] flex flex-col my-5 p-5 shadow-lg lg:w-[17rem] lg:h-[15rem] xl:h-[37rem] xl:w-[25rem] 2xl:w-[28.25rem] 3xl:w-[32.5rem]`}
    >
      {/* Image */}
      <Image
        src={image}
        alt={title}
        className={imageStyles + "md:w-full md:h-80 lg:max-xl:h-44"}
      />
      {/* Title */}
      <h1
        className={`text-[1.25rem] text-[#2D3748] font-bold text-start ${titleStyles}`}
      >
        {title}
      </h1>
      {/* Description */}
      <p className="text-[#646E73] text-[1rem] text-start">{description}</p>
    </article>
  );
};

export default CoreDetailsCard;

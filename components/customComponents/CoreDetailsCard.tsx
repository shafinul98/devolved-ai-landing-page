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
    <article className={`${extraStyles} w-full h:auto xl:w-[25rem] xl:h-[28rem] rounded-[0.75rem] shadow-md flex flex-col my-5 p-5 hover:shadow-lg transition-all duration-300`}>
      {/* Image */}
      <Image
        priority
        src={image}
        alt={title}
        className={imageStyles + "md:w-full md:h-60"}
      />
      {/* Title */}
      <p className={`text-[1.5rem] xl:text-[1.75rem] text-[#29233B] mt-2 font-medium text-start ${titleStyles}`}>
        {title}
      </p>
      {/* Description */}
      <p className="text-[1rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] mt-2 font-light xl:max-w-[26.9375rem]">
        {description}
      </p>
    </article>
  );
};

export default CoreDetailsCard;

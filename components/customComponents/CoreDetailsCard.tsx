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
    <article className={`${extraStyles} w-full rounded-[0.75rem] shadow-md flex flex-col my-5 p-5 lg:w-[17rem] lg:h-[15rem] xl:h-[28rem] xl:w-[25rem] 2xl:w-[28.25rem] 3xl:w-[32.5rem] hover:shadow-lg transition-all duration-300`}>
      {/* Image */}
      <Image
        priority
        src={image}
        alt={title}
        className={imageStyles + "md:w-full md:h-60 lg:max-xl:h-44"}
      />
      {/* Title */}
      <p className={`text-[1.60rem] md:text-xl lg:text-2xl xl:text-3xl text-[#29233B] mt-3 font-medium text-start ${titleStyles}`}>
        {title}
      </p>
      {/* Description */}
      <p className="text-[0.90rem] md:text-xl lg:text-2xl xl:text-2xl text-[#495167] mt-2 font-light max-w-[26.9375rem]">
        {description}
      </p>
    </article>
  );
};

export default CoreDetailsCard;

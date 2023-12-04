"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import DisCordImage from "@/public/join_us_on_discord_button.svg"

const JoinUsonDiscord = () => {
  return (
    <div>
        <p className="font-normal text-[1.125rem] leading-[1.5rem] text-[#495167] max-w-[70rem]">
            Be Part of the Genesis: Join our Discord to shape the future of Devolved AI. 
            Engage, contribute, and grow with our community from the ground up.
        </p>
        <button className="button">
            <Image priority src={DisCordImage} alt="discord_image" className="w-[20rem] h-auto" />
        </button>
    </div>
  );
};

export default JoinUsonDiscord;

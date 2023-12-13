"use client"

import Image from "next/image"
import HomeImage1 from "../../public/home/1.webp"
import DisCordImageNoHover from "@/public/Join_us_on_discord_button_no_hover.webp"
import DisCordImageHover from "@/public/Join_us_on_discord_button_hover.webp"
import { useState } from "react"

export default function JoinUsonDiscord () {
    const [discordImage, setDiscordImage] = useState(DisCordImageNoHover);

    const handleDiscordButtonClick = () => {
        setDiscordImage(DisCordImageHover);
        window.open('https://discord.com/invite/devolvedai', '_blank');
    };

    const handleMouseEnter = () => {
        setDiscordImage(DisCordImageHover);
    };

    const handleMouseLeave = () => {
        setDiscordImage(DisCordImageNoHover);
    };
    return (
        <div className="flex flex-col gap-5 p-3 md:p-6 rounded-md shadow-md items-center justify-center w-[20.875rem] h-auto xl:w-[66.875rem]"
            style={{
                backgroundImage: `url(${HomeImage1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <p className="text-[#192033] mt-4 text-[1.5rem] xl:text-[2.5rem] font-medium leading-normal text-center max-w-[50.75rem] max-h-[6.73569rem]">
                Be Part of the Genesis: Join our Discord to shape the future of Devolved AI. 
                Engage, contribute, and grow with our community from the ground up.
            </p>
            <button className="button w-[15.4675rem] h-auto mt-[8rem] mb-[1.5rem]"
                onClick={handleDiscordButtonClick}
                onMouseEnter={handleMouseEnter} 
                onMouseLeave={handleMouseLeave}>
                <Image priority src={discordImage} alt="Discord Image" />
            </button>
        </div>
    );
}
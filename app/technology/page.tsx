"use client"

import Image from "next/image"
import HeroImage from "@/public/technology/hero-image.webp"
import Image1 from "@/public/technology/image1.webp"
import Background1 from "@/public/technology/bg1.webp"
import Image2 from "@/public/technology/image2.webp"
import Background2 from "@/public/technology/bg2.webp"
import StandardMode from "@/public/technology/standard-mode.webp"
import LookingBeyond from "@/public/technology/looking-beyond.webp"
import Background3 from "@/public/technology/bg3.webp"
import Background4 from "@/public/technology/bg4.webp"
import JoinUsonDiscord from "@/components/customComponents/JoinUsonDiscord"
import NowListed from "@/components/customComponents/NowListed"

export default function Technology() {
    const handleButtonClick = () => {
        window.open('https://devolved-ai.gitbook.io/devolved-ai-whitepaper/proof-of-value-pov-protocol/introduction', '_blank');
    };

  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-0 py-0 md:p-0">
      {/* technology hero section */}
        <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
            <NowListed/>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
                <div className="text-center">
                    <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033] max-w-[82.78975rem]">
                        Technology
                    </h1>
                </div>
            </div>
        </section>

        {/* Proof of Value (PoV) Protocol */}
        <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
            <div className="flex flex-col items-center xl:flex-row justify-around xl:px-20 xl:m-20 relative">
                <div className="m-5 xl:m-0">
                    <Image
                    priority
                    className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                        src={Image1}
                        alt="Proof of Value (PoV) Protocol Illustration"
                    />
                </div>

                <div className="flex flex-col px-5 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                        Proof of Value (PoV) Protocol
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                        The PoV protocol at Devolved AI represents a groundbreaking approach in AI development, 
                        dynamically measuring and rewarding contributions in real-time with Argocoin (AGC).
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                        It adapts to the platform's changing needs, ensuring fairness, transparency, 
                        and robust fault tolerance. This protocol is a key part of our governance, allowing 
                        AGC token holders to actively participate in shaping its future.
                    </p>
                    <button
                        onClick={handleButtonClick}
                        className="uppercase bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full h-[3.125rem] xl:w-[10rem] xl:h-[3.125rem] mt-5"
                    >
                        LEARN MORE
                    </button>
                </div>
            </div>
        <style jsx>
            {`
            .background-image {
                background-image: url(${Background1.src});
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
                opacity: 1;
                top: 0;
                left: 0;
                position: absolute;
                width: 150%;
                height: 100%;
                z-index: -1;
            }
        `}
        </style>
        </section>

        {/* Layer 1 Blockchain */}
        <section className="flex flex-col w-full my-10 xl:my-20 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center xl:flex-row justify-around xl:px-20 xl:m-20 relative">
                <div className="flex flex-col px-5 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <p className="font-bold text-[1.625rem] xl:text-[3.75rem] leading-normal xl:leading-[4.5rem] text-[#192033]">
                        Layer 1 Blockchain
                    </p>
                    <p className="text-[1.125rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[24.0625rem] xl:max-w-[45.25rem]">
                        Our Layer 1 Blockchain, powered by the Substrate framework, 
                        is selected for its unmatched flexibility, scalability, and upgradability. 
                        Substrate's modular design allows us to customize our blockchain's architecture, 
                        adapting to new requirements and scaling as the Devolved AI platform grows. 
                        This makes it an ideal choice for our evolving technological needs.
                    </p>
                </div>
                <div className="m-5 xl:m-0">
                    <Image
                        priority
                        src={Image2}
                        alt="Layer 1 Blockchain Illustration"
                        className="w-[37.5rem] h-auto md:w-[37.5rem] md:h-auto lg:w-[37.5rem] lg:h-auto xl:w-[37.5rem] xl:h-auto rounded-[1.25rem]"
                    />
                </div>
            </div>
            <style jsx>
                {`
                .background-image {
                    background-image: url(${Background2.src});
                    background-size: contain;
                    background-position: center;
                    background-repeat: no-repeat;
                    opacity: 1;
                    bottom: 0;
                    right: 0;
                    position: absolute;
                    width: 140%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* NLP Engine: Luna Chatbots */}
        <section className="flex flex-col m-2 my-10 items-center rounded-[1.25rem] 3xl:container">
            <div className="flex flex-col gap-3 items-center justify-center"
                style={{
                backgroundImage: `url(${Background3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}>

                {/* NLP Engine: Luna Chatbots */}
                <div className="flex flex-col text-center max-w-xxl gap-5 mt-10">
                    <p className="text-[1.75rem] md:text-2xl lg:text-3xl xl:text-4xl leading-normal text-[#192033] font-bold">
                        NLP Engine: Luna Chatbots
                    </p>
                    <p className="text-[0.90rem] leading-[1.875rem] md:text-xl lg:text-2xl xl:text-2xl text-[#495167] font-light max-w-[73.5625rem]">
                        Our NLP engine, showcased through the Luna Chatbots, 
                        is a critical component of our AI development strategy. 
                        Luna 1, which will debut with our MVP in January 2024, offers two distinct modes: 
                        a standard mode and a rewards mode.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 3xl:container p-5 mb-10">
                    {/* In the standard mode, Luna 1 */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[13rem] h-[11rem]" src={StandardMode} alt="community_governed_icon" />
                        <p className="text-[1.25rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-2">
                            Luna: Standard and Rewards Mode
                        </p>
                        <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[19.625rem] xl:max-w-[42.1875rem] mt-2">
                            In the standard mode, Luna 1 operates as a typical advanced chatbot, providing users with intelligent and 
                            responsive interactions. The rewards mode, however, introduces an innovative 
                            approach to AI training and user engagement. In this mode, users are presented 
                            with two different outputs for their queries. By selecting the best response, 
                            users actively participate in the training process of our AI. 
                            This interaction not only enhances the learning capabilities of Luna 1 but 
                            also allows users to contribute directly to its evolution. As a token of 
                            appreciation for their valuable input, users are rewarded with Argocoin (AGC) 
                            for each contribution they make.
                        </p>
                    </div>

                    {/* Looking beyond Luna 1 */}
                    <div className="p-5 md:p-8 rounded-[1.25rem] bg-white hover:shadow-md transition-all duration-300">
                        <Image priority className="w-[13rem] h-[11rem]" src={LookingBeyond} alt="blockchain_based_icon" />
                        <h6 className="text-[1.25rem] xl:text-[1.875rem] text-[#29233B] font-medium mt-2">
                            The Future of Luna
                        </h6>
                        <p className="text-[1.125rem] xl:text-[1.125rem] leading-[1.875rem] text-[#495167] font-light max-w-[19.625rem] xl:max-w-[42.1875rem] mt-2">
                            Looking beyond Luna 1 we are preparing for the launch of Luna 2 later in 2024. 
                            Luna 2 represents our bold step into the competitive landscape of AI, 
                            challenging established players like OpenAI and Anthropic. 
                            This venture will be marked by the development of a chatbot using unique, 
                            community-driven data, aiming to achieve unparalleled levels of learning, 
                            personalization, and user engagement. With Luna 2, Devolved AI aspires to 
                            redefine the standards in AI chatbots and establish itself as a key competitor 
                            in the AI industry.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        {/* Federated Learning System */}
        <section className="flex flex-col w-full my-20 items-center 3xl:container">
                <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
                style={{
                    backgroundImage: `url(${Background4.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '300px',
                }}>
                    <div className="background-image" />
                    <div className="flex flex-col max-w-xxl gap-5 text-center">
                        <p className="font-bold text-[1.75rem] xl:text-[3.75rem] leading-normal text-[#192033]">
                            Federated Learning System
                        </p>
                        <p className="text-[1rem] xl:text-[1.375rem] leading-[1.875rem] text-[#495167] font-light max-w-[86.0625rem]">
                            Our Federated Learning System is a game-changer in AI training, 
                            allowing users to contribute to the training process using their GPUs and 
                            earn Argocoin (AGC). This approach not only democratizes AI development but 
                            also significantly speeds up the training process. By utilizing the collective 
                            computational power of our community, we can train AI models hundreds of times 
                            faster than traditional methods, pushing the envelope in AI advancement.
                        </p>
                    </div>
                </div>
        </section>

        {/* Ready to be a part of AI */}
        <section className="flex flex-col items-center justify-center mt-[5rem] my-20 3xl:container">
            <JoinUsonDiscord/>
        </section>

        <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
    </main>
  );
}

"use client"

import Image from "next/image";
import HeroImage from "../../public/technology/hero-image.png"
import Image1 from "../../public/technology/image1.png"
import Background1 from "../../public/technology/bg1.png"
import Image2 from "../../public/technology/image2.png"
import Background2 from "../../public/technology/bg2.png"
import StandardMode from "../../public/technology/standard-mode.png"
import LookingBeyond from "../../public/technology/looking-beyond.png"
import Background3 from "../../public/technology/bg3.png"
import Image3 from "../../public/technology/image3.png"
import Background4 from "../../public/technology/bg4.png"

import Button from "@/components/customComponents/Button";

export default function Technology() {
  return (
    <main className="flex min-h-screen overflow-x-hidden flex-col items-center justify-between px-6 py-8 md:p-0">
      {/* technology hero section */}
        <section className="w-full h-[22rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${HeroImage.src})`}}>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12">
                <div className="text-center">
                    <h1 className="font-bold text-[3.75rem] md:text-[3.75rem] leading-11 mb-5 text-[#192033]">
                        Technology at Devolved AI
                    </h1>
                </div>
            </div>
        </section>

        {/* Proof of Value (PoV) Protocol */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <Image className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[38rem] xl:w-[37rem]"
                    src={Image1}
                    alt="Proof of Value (PoV) Protocol Illustration"
                />

                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-black font-weight-700">
                        Proof of Value (PoV) <br/> Protocol
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300">
                        The PoV protocol at Devolved AI represents a groundbreaking approach in AI development, 
                        dynamically measuring and rewarding contributions in real-time with Argocoin (AGC).
                    </p>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300">
                        It adapts to the platform's changing needs, ensuring fairness, transparency, 
                        and robust fault tolerance. This protocol is a key part of our governance, allowing 
                        AGC token holders to actively participate in shaping its future.
                    </p>
                    <Button
                        title="LEARN MORE"
                        extraStyles=" bg-[#A9A3B2] text-white rounded-[0.3125rem] w-full md:w-[10.75rem] md:h-[2.625rem] mt-5 xl:me-16"
                    />
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
                width: 170%;
                height: 120%;
                z-index: -1;
            }
        `}
        </style>
        </section>

        {/* Layer 1 Blockchain */}
        <section className="w-full my-10 md:mt-20 md:mb-0 items-center 3xl:container">
            <div className="flex flex-col-reverse items-center lg:flex-row justify-around lg:px-4 xl:px-8 md:mx-16 lg:mb-20 relative">
                <div className="flex flex-col px-5 md:mt-16 gap-5 xl:ms-20">
                    <div className="background-image" />
                    <h1 className="text-[2.75rem] text-[#192033] font-ubuntu font-black font-weight-700">
                        Layer 1 Blockchain
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-ubuntu font-light font-weight-300">
                        Our Layer 1 Blockchain, powered by the Substrate framework, 
                        is selected for its unmatched flexibility, scalability, and upgradability. 
                        Substrate's modular design allows us to customize our blockchain's architecture, 
                        adapting to new requirements and scaling as the Devolved AI platform grows. 
                        This makes it an ideal choice for our evolving technological needs.
                    </p>
                </div>

                <Image
                    src={Image2}
                    alt="Layer 1 Blockchain Illustration"
                    className="mt-5 w-[22.5rem] h-[20.25rem] md:mt-0 md:w-[26.3125rem] md:h-[38rem] xl:w-[37rem]"
                />
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
                    width: 170%;
                    height: 100%;
                    z-index: -1;
                }
            `}
            </style>
        </section>

        {/* NLP Engine: Luna Chatbots */}
        <section className="flex flex-col rounded-md m-20">
            <div className="gap-5 items-center justify-center"
                style={{
                backgroundImage: `url(${Background3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
                }}>

                {/* NLP Engine: Luna Chatbots */}
                <div className="flex flex-col text-center gap-3 mt-10">
                    <h1 className="text-[2.75rem] text-[#192033] font-black font-ubuntu font-weight-700">
                        NLP Engine: Luna Chatbots
                    </h1>
                    <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300">
                        Our NLP engine, showcased through the Luna Chatbots, 
                        is a critical component of our AI development strategy. 
                        Luna 1, <br/>
                        which will debut with our MVP in January 2024, offers two distinct modes: a standard mode and a rewards mode.
                    </p>
                </div>

                {/* In the standard mode, Luna 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 3xl:container p-10">
                    <div className="p-6 md:p-8 rounded-md bg-white hover:shadow-lg transition-all duration-300">
                        <Image className="w-[13rem] h-[11rem]" src={StandardMode} alt="community_governed_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B] font-normal font-ubuntu font-weight-300">
                            In the standard mode, Luna 1
                        </h6>
                        <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300">
                            operates as a typical advanced chatbot, providing users with intelligent and 
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
                    <div className="p-6 md:p-8 rounded-md bg-white hover:shadow-lg transition-all duration-300">
                        <Image className="w-[13rem] h-[11rem]" src={LookingBeyond} alt="blockchain_based_icon" />
                        <h6 className="text-[1.25rem] text-[#29233B] font-normal font-ubuntu font-weight-300">
                            Looking beyond Luna 1
                        </h6>
                        <p className="text-[1rem] text-[#495167] font-light font-ubuntu font-weight-300">
                            we are preparing for the launch of Luna 2 later in 2024. 
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
        <section className="w-full my-10 md:mt-20 md:mb-0 3xl:container">
            <div className="lg:px-4 xl:px-8 md:mx-16 lg:mb-20 flex flex-col items-center px-5 md:mt-16 gap-5 xl:ms-20" 
            style={{
            backgroundImage: `url(${Background4.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '300px',
            }}>
            <div className="background-image" />
                <div className="w-full max-w-xl text-center">
                    <h1 className="text-[2.75rem] text-[#192033] font-bold font-ubuntu font-weight-500">
                        Federated Learning System
                    </h1>
                    <p className="text-[0.75rem] text-[#495167] font-light font-ubuntu font-weight-300">
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
        <section className="rounded-2xl shadow-lg flex flex-col items-center justify-center my-10 gap-5">
            <div className="flex flex-col gap-10 p-10 items-center justify-center w-[50rem]"
                style={{
                backgroundImage: `url(${Image3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                }}>
                <h1 className="text-[#192033] text-start text-lg" 
                    style={{ textAlign: 'center',
                    fontSize: '2rem',
                    fontStyle: 'normal',
                    fontWeight: '600',
                    lineHeight: '1.15rem'}}>
                    Ready to be a part of AI's next (d)evolution?<br/>
                    <br/>
                    Sign up now.
                </h1>
                <div className="text-center mt-10 bg-white/30 backdrop-blur-md p-5 rounded-[1rem]">
                    <p className="font-ubuntu font-normal font-weight-400 text-[#192033] text-[1rem] mb-4">
                        Get $50 in crypto for signing up, Plus $50 per referral¹
                    </p>
                    <div className="flex items-center justify-center">
                        <input
                        type="email"
                        placeholder="Your email address*"
                        className="w-64 h-12 px-4 mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
                        />
                        <Button
                        title="JOIN THE REVOLUTION"
                        extraStyles=" bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full md:w-[15rem] md:h-[3rem]"
                        />
                    </div>
                </div>
            </div>
        </section>

        <div className="bg-slate-700 w-4/5 mx-auto border bottom-1" />
    </main>
  );
}

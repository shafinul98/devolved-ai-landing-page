"use client"

import HeroImage from "@/public/contact/hero-image.webp"

export default function USDCGiveAway() {
    return (
        <main className="flex flex-col min-h-screen overflow-x-hidden items-center justify-between p-0 md:p-0">

            <section className="w-full h-[25rem] flex items-center justify-center bg-cover bg-center bg-no-repeat" 
                style={{ backgroundImage: `url(${HeroImage.src})`}}>
                <div className="flex flex-col items-center justify-center md:flex-row md:justify-center md:p-12 mt-5">
                    <div className="text-center">
                        <h1 className="font-bold text-[2.25rem] xl:text-[4.8125rem] leading-normal mb-5 text-[#192033]">
                            USDC Giveaway and Terms
                        </h1>
                    </div>
                </div>
            </section>

            <section className="w-full/2 xl:my-20 mb-10 items-center bg-gray-100">
                <div className="flex flex-col items-start justify-around px-4 xl:px-16 relative">

                    <p className="font-bold mt-2 mb-2 text-[2rem] max-w-[80rem]">
                    Devolved AI: $25 Cryptocurrency Giveaway and Referral Program Terms
                    </p>
                    <p className="mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[70rem]">
                    Welcome to Devolved AI, where we integrate the thrilling realms of AI and 
                    cryptocurrencies. Our $25 Cryptocurrency Giveaway and Referral Program is 
                    designed to reward our early adopters and promote active community engagement.
                    </p>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    1. New User Reward:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Earn $25 in AGC: New users completing the verification process on 
                        Devolved AI are eligible to receive $25 in AGC (Argocoin).
                        </li>
                        <li>
                        Eligibility Criteria: Offer available to new users who meet the 
                        verification requirements.
                        </li>
                    </ul>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    2. Referral Reward:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Earn and Give $25 per Referral: Earn $25 in AGC for each successful referral. 
                        Each referred user using your link and meeting the criteria also receives $25 in AGC.
                        </li>
                        <li>
                            Referral Criteria:
                            <ul className="list-disc list-inside ml-8">
                                <li>
                                Sign up for the Devolved AI web app via a referral link.
                                </li>
                                <li>
                                Complete the platform's interactive walkthrough.
                                </li>
                                <li>
                                Perform a qualifying action (e.g., submit a governance proposal, train the AI).
                                </li>
                            </ul>
                        </li>
                        <li>
                        Referral Activity Validation: Rewards are credited post confirmation of the 
                        referred user's active participation.
                        </li>
                    </ul>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    3. Terms of Disbursement:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Market Cap Dependency: Rewards are contingent on the AGC market cap's 
                        ability to support these payouts.
                        </li>
                        <li>
                        Controlled Release: Rewards will be released in a phased manner to 
                        ensure market stability.
                        </li>
                    </ul>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    4. Program Discretion:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Modification and Discontinuation: Devolved AI reserves the right to alter or 
                        discontinue the program based on market and regulatory conditions.
                        </li>
                        <li>
                        Offer Activation and Eligibility: Contingent on user engagement and AGC 
                        market capitalization.
                        </li>
                    </ul>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    5. Regulatory Compliance:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Void Where Prohibited: Not valid where prohibited by law.
                        </li>
                        <li>
                        User Responsibility: Participants must ensure compliance with local laws.
                        </li>
                    </ul>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    6. Program Commencement and Termination:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Market Cap Dependent: Reward distribution heavily relies on the Argocoin market cap.
                        </li>
                        <li>
                        Start and End of Program: The program begins with sufficient market 
                        support and ends when the Argocoin web app is live for public use.
                        </li>
                    </ul>

                    <p className="font-bold mb-2 text-[1.65rem]">
                    7. Fraud Prevention and User Verification:
                    </p>
                    <ul className="list-disc list-inside mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                        <li>
                        Viral Loops Service Utilization: Devolved AI uses Viral Loops for managing 
                        this referral program.
                        </li>
                        <li>
                        High-Risk Fraud Prevention: If Viral Loops flags any user as high risk for fraud, 
                        we reserve the right to withhold rewards.
                        </li>
                        <li>
                        Proof of Fraud Risk: In such cases, Devolved AI will provide evidence of the high-risk 
                        flagging from the Viral Loops platform to the affected user.
                        </li>
                    </ul>

                    <p className="mb-4 font-normal text-[1.15rem] leading-[1.5rem] xl:leading-[1.75rem] max-w-[80rem]">
                    We are excited to have you join us in this innovative journey at the intersection 
                    of AI and cryptocurrency. Devolved AI is committed to transparency and rewarding 
                    our community.
                    </p>
                </div>
            </section>

            <div className="bg-[#E5E7EB] w-4/6 mx-auto border bottom-1" />
        </main>
    );
}

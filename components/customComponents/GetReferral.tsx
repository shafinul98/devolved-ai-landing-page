"use client"

import Button from "@/components/customComponents/Button";

export default function GetReferral() {
    return (
        <div className="text-center mt-5 bg-white/30 backdrop-blur-md p-5 rounded-[1rem]">
            <p className="font-ubuntu font-normal font-weight-400 text-[#192033] text-[1rem] mb-4">
                Get $50 in crypto for signing up, Plus $50 per referral¹
            </p>
            <div className="flex items-center justify-center">
                <input className="w-64 h-12 px-4 mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
                type="email"
                placeholder="Your email address*"
                />
                <Button extraStyles=" bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full md:w-[15rem] md:h-[3rem]"
                title="JOIN THE REVOLUTION"
                />
            </div>
        </div>
    );
}
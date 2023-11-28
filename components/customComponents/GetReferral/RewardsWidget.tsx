import React from "react";
import { Input } from "@nextui-org/react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

const RewardsWidget = () => {
  return (
    <div className="hidden flex-col w-full/2 h-auto gap-2 items-center justify-center bg-white/70 backdrop-blur-md p-4 rounded-[1rem]">
        
        <div className='flex mb-3 md:mb-0'>
            <p className='text-[1rem] leading-[1rem]'>
                Here you can see the rewards <br/> 
                you won when your friends <br/>
                signed-up
            </p>
        </div>

        <div className='border-2 border-black flex flex-col mt-2 mb-2 ml-2 p-2'>
            <p>Referrals</p>
            <p className='font-bold'>42</p>
        </div>

        <div className='pair flex flex-col text-center max-w-sm gap-2'>
            <Input
                readOnly
                type="text"
                defaultValue="Pair of Socks"
                placeholder=""
                labelPlacement="outside"
                className="border-2 border-black rounded-md p-2 w-auto h-auto"
                startContent={
                    <FaCheckCircle className="text-2xl mr-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                />
                <Input
                readOnly
                type="text"
                defaultValue="Infinite supply of coffee"
                placeholder=""
                labelPlacement="outside"
                className="border-2 border-black rounded-md p-2 w-auto h-auto"
                startContent={
                    <FaSpinner className="text-2xl mr-5 text-default-400 pointer-events-none flex-shrink-0" />
                }
                />
        </div>
    </div>

  );
};

export default RewardsWidget;
import React from "react";
import { Input } from "@nextui-org/react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

const RewardsWidget = () => {
  return (
        <div className="flex flex-col xl:w-full/2 h-auto gap-2 items-center justify-center">
          <div className="text-center max-w-sm">
            <p className="font-normal text-[#192033] text-[1rem]">
                  Here you can see the rewards
                  you won when your friends
                  signed-up
            </p>
          </div>

          <div className='border-2 border-cyan-950 flex flex-col p-3'>
              <p className='font-normal'>Referrals</p>
              <p className='font-bold'>42</p>
          </div>

          <div className='pair flex flex-col text-center max-w-sm gap-2'>
              <Input
                  readOnly
                  type="text"
                  defaultValue="Pair of Socks"
                  placeholder=""
                  labelPlacement="outside"
                  className="border-2 border-cyan-950 rounded-md p-3 w-auto h-auto"
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
                  className="border-2 border-cyan-950 rounded-md p-3 w-auto h-auto"
                  startContent={
                      <FaSpinner className="text-2xl mr-5 text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  />
          </div>
        </div>

  );
};

export default RewardsWidget;
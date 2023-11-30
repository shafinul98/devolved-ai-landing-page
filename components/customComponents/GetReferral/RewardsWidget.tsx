import React, { useState, useEffect } from "react";
import { Input } from "@nextui-org/react";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

// Campaign id for viral loops
const CAMPAIGN_ID = "EeQTn0VkqudBHfkE9leVA0AcX70";

const RewardsWidget = () => {
  const [referrals, setReferrals] = useState(0);

  // Retrieving referral count from localStorage user
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(`${CAMPAIGN_ID}#user`);
      if (storedData !== null) {
        try {
          const data = JSON.parse(storedData);
          setReferrals(data.referralCount);
        } catch (error) {
          console.error("Failed to parse stored data:", error);
        }
      }
    }
  }, []);

  return (
    <div className="flex flex-col xl:w-full/2 h-auto gap-2 items-center justify-center">
      <div className="text-center max-w-sm">
        <p className="font-normal text-[#192033] text-[1rem]">
          Congratulations! You’ve successfully referred{" "}
          <span className="font-bold text-blue-500">{referrals}</span>{" "}
          individuals to our campaign. Keep up the great work!
        </p>
      </div>

      <div className="border-2 border-cyan-950 flex flex-col p-3">
        <p className="font-normal">Referrals</p>
        <p className="font-bold">{referrals}</p>
      </div>
      {/*
      <div className="pair flex flex-col text-center max-w-sm gap-2">
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
        </div> */}
    </div>
  );
};

export default RewardsWidget;
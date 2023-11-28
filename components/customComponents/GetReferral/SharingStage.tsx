"use client";

import React, { useState, useEffect } from "react";
import { Button, Input } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import RewardsWidget from "./RewardsWidget";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaRedditAlien,
  FaEnvelope,
  FaClone,
  FaCheckCircle,
  FaSpinner,
} from "react-icons/fa";
const CAMPAIGN_ID = "EeQTn0VkqudBHfkE9leVA0AcX70";

const SharingStage = () => {
  const { control, handleSubmit } = useForm();
  const [copyToClipBoard, handleCopyToClipBoard] = useState(false);
  const [referralCode, setReferralCode] = useState("");

  // Retrieving referral code from localStorage user
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(`${CAMPAIGN_ID}#user`);
      if (storedData !== null) {
        try {
          const data = JSON.parse(storedData);
          setReferralCode(data.referralCode);
        } catch (error) {
          console.error("Failed to parse stored data:", error);
        }
      }
    }
  }, []);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const handleCopyToClipboard = async () => {
    handleCopyToClipBoard(true);
    alert("copied");
    // const inputField = document.getElementById('inputField');

    // if (inputField instanceof HTMLInputElement) {
    //   const textToCopy = inputField.value;

    //   try {
    //     await navigator.clipboard.writeText(textToCopy);
    //     handleCopyToClipBoard(true);
    //   } catch (error) {
    //     console.error('Failed to copy text:', error);
    //   }
    // }
  };

  return (
    <div className="flex flex-col justify-center xl:flex-row gap-10 mb-2">
      <div
        className="flex flex-col w-full/2 h-auto gap-2 items-center justify-center bg-white backdrop-blur-md p-4 rounded-[1rem]"
        data-vl-campaign-id={CAMPAIGN_ID}
        data-vl-container="share-stage"
      >
        <div className="text-center max-w-sm">
          <p className="font-medium text-[#192033] text-[1rem]">
            🌟 Welcome to Devolved AI!
          </p>
          <p className="font-normal text-[#192033] text-[1rem]">
            You've taken the first step into a revolutionary AI journey. Check
            your email for more details.
          </p>
        </div>

        <div className="text-center max-w-sm">
          <p className="font-medium text-[#192033] text-[1rem]">
            🚀 Start Sharing & Earning!
          </p>
          <p className="font-normal text-[#192033] text-[1rem]">
            Join the movement and spread the word. Invite friends to Devolved AI
            and earn $25 in crypto for each referral. Your unique share link is
            waiting for you below. Let's innovate and grow together!
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4 w-full max-w-[20rem]">
            <Controller
              control={control}
              name="inputField"
              defaultValue={`https://vrlps.co/${referralCode}/cp`}
              render={({ field }) => (
                <Input
                  readOnly
                  {...field}
                  value={`https://vrlps.co/${referralCode}/cp`} // Use value instead of defaultValue
                  type="url"
                  placeholder=""
                  labelPlacement="outside"
                  className="m-5 p-5 bg-white rounded-sm"
                  endContent={
                    <Button
                      type="submit"
                      className="flex items-center ml-2 focus:outline-none"
                      onClick={handleCopyToClipboard}
                    >
                      {copyToClipBoard ? (
                        <FaCheckCircle className="text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white p-2 rounded-md" />
                      ) : (
                        <FaClone className="text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white p-2 rounded-md" />
                      )}
                    </Button>
                  }
                />
              )}
            />
          </div>
        </form>

        <div className="flex gap-4 items-center">
          <Button
            isIconOnly
            color="danger"
            aria-label="Like"
            className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 320 512"
              fill="white"
            >
              <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" />
            </svg>
          </Button>
          <Button
            isIconOnly
            color="danger"
            aria-label="Like"
            className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] rounded-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
              fill="white"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Button>
          <Button
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="Take a photo"
            className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
          >
            <FaWhatsapp />
          </Button>
          <Button
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="Take a photo"
            className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
          >
            <FaLinkedinIn />
          </Button>
          <Button
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="Take a photo"
            className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
          >
            <FaRedditAlien />
          </Button>
          <Button
            isIconOnly
            color="warning"
            variant="faded"
            aria-label="Take a photo"
            className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
          >
            <FaEnvelope />
          </Button>
        </div>
      </div>
      {/* Rewards Widget added */}
      <RewardsWidget />
    </div>
  );
};

export default SharingStage;

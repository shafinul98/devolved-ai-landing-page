"use client";

import React, { useState, useEffect } from "react";
import { Button, Input, Tooltip } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaRedditAlien,
  FaEnvelope,
  FaClone,
  FaCheckCircle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { motion } from "framer-motion";
import RewardsWidget from "./RewardsWidget";
const CAMPAIGN_ID = "EeQTn0VkqudBHfkE9leVA0AcX70";

const SharingStage = () => {
  const { control, handleSubmit } = useForm();
  const [copyToClipBoard, handleCopyToClipBoard] = useState(false);
  const [referralCode, setReferralCode] = useState("");
  const [showRewards, setShowRewards] = useState(false);
  const [showSharing, setShowSharing] = useState(true);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.5 } },
  };

  const widgetVariants = {
    hidden: { x: "100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
    exit: { x: "100%", transition: { duration: 0.5 } },
  };

  const handleGoToRewardsButtonClick = () => {
    setShowRewards(true);
    setShowSharing(false);
  };

  const handleBackToSharingButtonClick = () => {
    setShowSharing(true);
    setShowRewards(false);
  };

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

  // Shareable link copy handler from sharing widget
  const handleCopyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `https://vrlps.co/${referralCode}/cp`
      );
      handleCopyToClipBoard(true);
    } catch (error) {
      console.error("Failed to copy text: ", error);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex flex-col justify-center xl:flex-row gap-10 m-5"
    >
      {/* sharing widget  */}
      <motion.div
        className={`sharingWidget flex flex-col xl:w-full/2 h-auto gap-2 items-center mt-5 justify-center bg-white/70 backdrop-blur-md p-4 rounded-[1rem] 
        ${showSharing && !showRewards ? "block" : "hidden"}`}
        data-vl-campaign-id={CAMPAIGN_ID}
        data-vl-container="sharing-stage"
      >
        <div className="rewardsButton flex gap-4">
          <Button
            color="success"
            endContent={<FaArrowRight />}
            onClick={handleGoToRewardsButtonClick}
          >
            Go To Rewards
          </Button>
        </div>

        <div className="text-center max-w-sm">
          <p className="font-medium text-[#192033] text-[1rem]">
            🌟 Welcome to Devolved AI!
          </p>
          <p className="font-normal text-[#192033] text-[1rem] xl:flex">
            You've taken the first step into a revolutionary AI journey. Check
            your email for more details.
          </p>
        </div>

        <div className="text-center max-w-sm">
          <p className="font-medium text-[#192033] text-[1rem]">
            🚀 Start Sharing & Earning!
          </p>
          <p className="font-normal text-[#192033] text-[1rem] xl:flex">
            Join the movement and spread the word. Invite friends to Devolved AI
            and earn $25 in crypto for each referral. Your unique share link is
            waiting for you below. Let's innovate and grow together!
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col xl:w-full max-w-[20rem] xl:max-w-[25rem]">
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
                  className="m-0 xl:m-auto p-5 bg-white rounded-sm"
                  endContent={
                    <Tooltip
                      content={copyToClipBoard ? "Link copied" : "Copy link"}
                      placement="top"
                    >
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
                    </Tooltip>
                  }
                />
              )}
            />
          </div>
        </form>

        <div className="flex flex-row gap-2 xl:gap-4 w-full max-w-[15rem] xl:max-w-[20rem] items-center">
          <Tooltip content="Share on facebook" placement="top">
            <Button
              isIconOnly
              color="danger"
              aria-label="Like"
              className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] rounded-md"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    "https://vrlps.co/" + referralCode + "/fb"
                  )}`,
                  "_blank"
                )
              }
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
          </Tooltip>

          <Tooltip content="Share on twitter" placement="top">
            <Button
              isIconOnly
              color="danger"
              aria-label="Like"
              className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                onClick={() =>
                  window.open(
                    `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      "https://vrlps.co/" + referralCode + "/tw"
                    )}`,
                    "_blank"
                  )
                }
                viewBox="0 0 512 512"
                fill="white"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </Button>
          </Tooltip>

          <Tooltip content="Share on whatsApp" placement="top">
            <Button
              isIconOnly
              color="warning"
              variant="faded"
              aria-label="Share on WhatsApp"
              className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
              onClick={() =>
                window.open(
                  `https://wa.me/?text=${encodeURIComponent(
                    "https://vrlps.co/" + referralCode + "/wa"
                  )}`,
                  "_blank"
                )
              }
            >
              <FaWhatsapp />
            </Button>
          </Tooltip>

          <Tooltip content="Share on linkedin" placement="top">
            <Button
              isIconOnly
              color="warning"
              variant="faded"
              aria-label="Share on LinkedIn"
              className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    "https://vrlps.co/" + referralCode + "/ln"
                  )}`,
                  "_blank"
                )
              }
            >
              <FaLinkedinIn />
            </Button>
          </Tooltip>

          <Tooltip content="Share on reddit" placement="top">
            <Button
              isIconOnly
              color="warning"
              variant="faded"
              aria-label="Share on Reddit"
              className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
              onClick={() =>
                window.open(
                  `https://reddit.com/submit?url=${encodeURIComponent(
                    "https://vrlps.co/" + referralCode + "/rd"
                  )}`,
                  "_blank"
                )
              }
            >
              <FaRedditAlien />
            </Button>
          </Tooltip>

          <Tooltip content="Share on mail" placement="top">
            <Button
              isIconOnly
              color="warning"
              variant="faded"
              aria-label="Share via Email"
              className="icon-button text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md"
              data-vl-sharing-stage-target="shareButton" // Add this line
              data-vl-share-channel="email" // Add this line
              onClick={() =>
                (window.location.href = `mailto:?subject=Check out this cool website&body=${encodeURIComponent(
                  "https://vrlps.co/" + referralCode + "/em"
                )}`)
              }
            >
              <FaEnvelope />
            </Button>
          </Tooltip>
        </div>
      </motion.div>

      {/* rewards widget  */}
      <motion.div
        variants={widgetVariants}
        className={`rewardsWidget ${
          showRewards && !showSharing ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col xl:w-full/2 h-auto gap-2 items-center mt-5 justify-center bg-white/70 backdrop-blur-md p-4 rounded-[1rem]">
          <div className="flex">
            <Button
              color="success"
              startContent={<FaArrowLeft />}
              onClick={handleBackToSharingButtonClick}
            >
              Back To Sharing
            </Button>
          </div>
          <RewardsWidget />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SharingStage;

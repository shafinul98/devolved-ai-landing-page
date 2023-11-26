import React from "react";

const CAMPAIGN_ID = "EeQTn0VkqudBHfkE9leVA0AcX70";

const SharingStage = () => (
  <div
    data-vl-campaign-id={CAMPAIGN_ID}
    data-vl-container="share-stage"
    className="text-center mt-10 bg-white/30 backdrop-blur-md p-5 rounded-[1rem]"
  >
    <p className="font-ubuntu font-normal font-weight-400 text-[#192033] text-[1rem] mb-4">
      You have successfully joined the revolution! Now share it with your
      friends and earn more rewards.
    </p>
    <div
      data-vl-share-stage-target="share-link"
      className="w-64 h-12 px-4 mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
    ></div>
    <div
      data-vl-share-stage-target="share-buttons"
      className="flex items-center justify-center mt-4"
    ></div>
  </div>
);

export default SharingStage;

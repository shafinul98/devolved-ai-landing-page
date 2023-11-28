import React, { useState, useCallback, useEffect } from "react";
import SharingStage from "./SharingStage";

const CAMPAIGN_ID = "EeQTn0VkqudBHfkE9leVA0AcX70";

const ViralLoopsForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();

      setIsSubmitting(true);

      try {
        // Get the campaign by ID
        const campaign = await (window as any).ViralLoops.getCampaign(
          CAMPAIGN_ID
        );

        // Identify the user in the campaign
        const user = { email };
        await campaign.identify(user);
      } catch (error) {
        console.error("Error submitting form: ", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    [email]
  );
  // Sharing stage rendering
  const renderUI = () => {
    if (typeof window !== "undefined") {
      const storedData = localStorage.getItem(`${CAMPAIGN_ID}#userData`);
      if (storedData) {
        const userData = JSON.parse(storedData);
        if (userData && userData.data) {
          // Show the sharing stage
          return <SharingStage />;
        }
      }
    }

    // Show the join stage
    return (
      <div className="flex flex-col xl:flex-row justify-center gap-10 m-5">
        <div
        data-vl-campaign-id={CAMPAIGN_ID}
        data-vl-container="join-stage"
        className="flex flex-col xl:w-full/2 h-auto items-center justify-center text-center mt-5 bg-white/70 backdrop-blur-md p-5 xl:p-10 rounded-[1rem]">
            <p className="font-normal text-[#192033] xl:text-[1rem] leading-[2.375rem] mb-4">
              Get $25 in crypto for signing up, Plus $25 per referral¹
            </p>
            <form
              data-vl-action="join-stage#join"
              className="flex xl:flex-row flex-col items-center justify-center xl:w-full max-w-[15rem] xl:max-w-[30rem]"
              onSubmit={handleSubmit}>
              <input
                id="campaignEmail"
                name="email"
                data-vl-join-stage-target="input.email"
                placeholder="Your email address*"
                type="email"
                className="w-full h-[3.75rem] px-4 xl:mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full h-[3.75rem] xl:mt-0 mt-2">
                  JOIN THE REVOLUTION
              </button>
            </form>
      </div>
      </div>
      
    );
  };

  if (isSubmitting) {
    return <p>Submitting...</p>;
  }

  return renderUI();
};

export default ViralLoopsForm;

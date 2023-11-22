import React, { useState, useCallback, useEffect } from "react";

const CAMPAIGN_ID = "EeQTn0VkqudBHfkE9leVA0AcX70";

const ViralLoopsForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
      }

      // Set the form as submitted
      setIsSubmitted(true);
      setIsSubmitting(false);
    },
    [email]
  );

  // Check the user's status in the campaign on mount
  useEffect(() => {
    (async () => {
      try {
        // Get the campaign by ID
        const campaign = await (window as any).ViralLoops.getCampaign(
          CAMPAIGN_ID
        );

        // Get the current user's data
        const userData = await campaign.getParticipantData();

        // If the user is already in the campaign, set the isSubmitted state to true
        if (userData) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error("Error getting user data: ", error);
      }
    })();
  }, []);

  if (isSubmitting) {
    return <p>Submitting...</p>;
  }

  if (isSubmitted) {
    return (
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
  }

  return (
    <div
      data-vl-campaign-id={CAMPAIGN_ID}
      data-vl-container="join-stage"
      className="text-center mt-10 bg-white/30 backdrop-blur-md p-5 rounded-[1rem]"
    >
      <p className="font-ubuntu font-normal font-weight-400 text-[#192033] text-[1rem] mb-4">
        Get $50 in crypto for signing up, Plus $50 per referral¹
      </p>
      <form
        data-vl-action="join-stage#join"
        className="flex items-center justify-center"
        onSubmit={handleSubmit}
      >
        <input
          data-vl-join-stage-target="input.email"
          placeholder="Your email address*"
          type="email"
          className="w-64 h-12 px-4 mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full md:w-[15rem] md:h-[3rem]"
        >
          JOIN THE REVOLUTION
        </button>
      </form>
    </div>
  );
};

export default ViralLoopsForm;

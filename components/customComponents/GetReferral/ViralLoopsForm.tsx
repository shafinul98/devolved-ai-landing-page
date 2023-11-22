import React, { useState } from "react";

const ViralLoopsForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Get the campaign by ID
    const campaign = await (window as any).ViralLoops.getCampaign(
      "EeQTn0VkqudBHfkE9leVA0AcX70"
    );

    // Identify the user in the campaign
    const user = { email };
    await campaign.identify(user);

    // Set the form as submitted
    setIsSubmitted(true);
  };

  return (
    <div className="text-center mt-10 bg-white/30 backdrop-blur-md p-5 rounded-[1rem]">
      <p className="font-ubuntu font-normal font-weight-400 text-[#192033] text-[1rem] mb-4">
        Get $50 in crypto for signing up, Plus $50 per referral¹
      </p>
      <div className="flex items-center justify-center">
        <input
          placeholder="Your email address*"
          type="email"
          className="w-64 h-12 px-4 mr-4 border-none rounded-[0.25rem] bg-white/20 backdrop-blur-md focus:outline-none"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleSubmit}
          className="bg-[#FF6F00] text-white font-normal rounded-[0.3125rem] w-full md:w-[15rem] md:h-[3rem]"
        >
          JOIN THE REVOLUTION
        </button>
      </div>
    </div>
  );
};

export default ViralLoopsForm;

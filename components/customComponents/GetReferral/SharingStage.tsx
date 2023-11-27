"use client"

import React from 'react';
import { Button, Input } from '@nextui-org/react';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaWhatsapp,
  FaReddit,
  FaEnvelope,
  FaClipboard,
  FaClone
} from "react-icons/fa";
const CAMPAIGN_ID = 'EeQTn0VkqudBHfkE9leVA0AcX70';

const SharingStage = () => {

  return (
    
    <div className="w-full flex flex-col items-center justify-center bg-white/30 backdrop-blur-md p-5 rounded-[1rem]" data-vl-campaign-id={CAMPAIGN_ID} data-vl-container="share-stage">
      <div className='text-center'>
        <p className="font-normal font-weight-400 text-[#192033] text-[1rem] mb-4 max-w-sm">
          🌟 Welcome to Devolved AI!
        </p>
        <p className="font-normal font-weight-400 text-[#192033] text-[1rem] mb-4 max-w-sm">
          You've taken the first step into a revolutionary AI journey. Check your email for more details.
        </p>
      </div>

      <div className='text-center'>
        <p className="font-normal font-weight-400 text-[#192033] text-[1rem] mb-4 max-w-sm">
          🚀 Start Sharing & Earning!
        </p>
        <p className="font-normal font-weight-400 text-[#192033] text-[1rem] mb-4 max-w-sm">
          Join the movement and spread the word. Invite friends to Devolved AI and earn $25 in crypto for each referral. Your unique share link is waiting for you below. Let's innovate and grow together!
        </p>
      </div>

      <div className="flex flex-col gap-4">
    <div className="flex flex-col mb-6 gap-4 w-[20rem]">
      <Input
        className="m-5 p-5 bg-white/50 rounded-sm"
        type="email"
        placeholder="you@example.com"
        labelPlacement="outside"
        endContent={
          <button className="flex items-center ml-2 focus:outline-none">
            <FaClone className="text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white p-2 rounded-md" />
          </button>
        }
      />
    </div>
  </div>
      <div className="flex gap-4 items-center">
      <Button isIconOnly color="danger" aria-label="Like" 
      className='text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md'>
        <FaFacebook />
      </Button>
      <Button isIconOnly color="danger" aria-label="Like"
      className='text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md'>
        <FaTwitter />
      </Button>
      <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo"
      className='text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md'>
        <FaWhatsapp />
      </Button>
      <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo"
      className='text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md'>
        <FaLinkedinIn />
      </Button>
      <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo"
      className='text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md'>
        <FaReddit />
      </Button>
      <Button isIconOnly color="warning" variant="faded" aria-label="Take a photo"
      className='text-[1rem] w-[3rem] h-[2rem] bg-[#FF6F00] text-white rounded-md'>
        <FaEnvelope />
      </Button>
    </div>
    </div>
  );
};

export default SharingStage;

import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { Card } from "../ui/card";

type PropTypes = {
  cardTitle: string;
  cardDescription: string;
  cardImage: any;
  cardFooter: string[];
  hasGitHub?: boolean;
  hasTwitter?: boolean;
  hasLinkedIn?: boolean;
};

const TeamMemberCard = ({
  cardTitle,
  cardImage,
  cardDescription,
  cardFooter,
  hasGitHub,
  hasTwitter,
  hasLinkedIn,
}: PropTypes) => {
  return (
    <article className="flex w-full md:w-[10rem] lg:w-[15rem] gap-5 my-2 p-5 transition ease-in-out hover:scale-105">
      <div className="relative bg-gray-100 overflow-hidden rounded-md shadow-md">
        <Image className="object-cover w-full"
          src={cardImage}
          alt={cardTitle}
          layout="responsive"
          width={100}
          height={100}
        />
        <div className="p-4">

        <p className="text-blue-500 mb-2">{cardDescription}</p>
        <h2 className="text-xl font-bold mb-4">{cardTitle}</h2>
        <div className="flex items-center">
          <div className="text-blue-500 cursor-pointer">
            <div className="flex gap-x-5">
              {hasGitHub && (
                <Link href={cardFooter[0]} rel="noopener noreferrer" target="_blank">
                  <FaFacebook />
                </Link>
              )}
              {hasTwitter && (
                <Link href={cardFooter[1]} rel="noopener noreferrer" target="_blank">
                  <FaTwitter />
                </Link>
              )}
              {hasLinkedIn && (
                <Link href={cardFooter[2]} rel="noopener noreferrer" target="_blank">
                  <FaLinkedin />
                </Link>
              )}
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </article>
  );
};

export default TeamMemberCard;

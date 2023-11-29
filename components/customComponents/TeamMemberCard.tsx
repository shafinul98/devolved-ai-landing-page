import Link from "next/link";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

type PropTypes = {
  cardTitle: string;
  cardDescription: string;
  cardImage: any;
  cardFooter: string[];
  hasFacebook?: boolean;
  hasTwitter?: boolean;
  hasLinkedIn?: boolean;
};

const TeamMemberCard = ({
  cardTitle,
  cardImage,
  cardDescription,
  cardFooter,
  hasFacebook,
  hasTwitter,
  hasLinkedIn,
}: PropTypes) => {
  return (
    <article className="flex w-full md:w-[10rem] lg:w-[20rem] gap-5 my-2 p-5">
      <div className="relative bg-white overflow-hidden rounded-md shadow-md">
        <Image className="object-cover w-full" src={cardImage} alt={cardTitle} layout="responsive" width={100} height={100} />
        <div className="p-4">
          <p className="text-[0.875rem] xl:text-[1rem] text-[#204FA2] font-bold leading-normal mb-2">{cardDescription}</p>
          <h2 className="text-[1.625rem] xl:text-[1.875rem] font-bold leading-normal mb-6">{cardTitle}</h2>
          <div className="absolute left-0 bottom-0 m-4">
            <div className="social flex items-center">
              <div className="text-[#0163E0] cursor-pointer">
                <div className="flex gap-x-5">
                  {hasFacebook && (
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
      </div>
    </article>
  );
};

export default TeamMemberCard;

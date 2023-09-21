import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

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
    <article className="flex w-full md:w-[20rem] lg:w-[25rem] gap-5 my-2 bg-[#F8F9FC] p-5 rounded-3xl transition ease-in-out hover:scale-105">
      {/* Image on the left */}
      <div className="flex-shrink-0">
        <div className="h-32 w-32 relative rounded-3xl overflow-hidden">
          <Image
            src={cardImage}
            alt={cardTitle}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
          />
        </div>
      </div>
      {/* Text on the right */}
      <div className="flex flex-col justify-evenly">
        <div>
          <h1 className="text-lg font-semibold">{cardTitle}</h1>
          <p className="text-gray-600 text-sm">{cardDescription}</p>
        </div>
        {hasGitHub && hasTwitter && hasLinkedIn ? (
          <div className="flex gap-x-5">
            <Link
              href={`${cardFooter[0]}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              href={`${cardFooter[1]}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={`${cardFooter[2]}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>
        ) : hasTwitter && hasLinkedIn && hasGitHub === false ? (
          <div className="flex gap-x-5">
            <button disabled>
              <FaGithub />
            </button>

            <Link
              href={`${cardFooter[1]}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link
              href={`${cardFooter[2]}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>
        ) : (
          hasLinkedIn && (
            <div className="flex gap-x-5">
              <button disabled>
                <FaGithub />
              </button>
              <Link
                href={`${cardFooter[1]}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
              <button disabled>
                <FaTwitter />
              </button>
            </div>
          )
        )}
      </div>
    </article>
  );
};

export default TeamMemberCard;

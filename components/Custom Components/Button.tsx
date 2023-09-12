import React from "react";
import { FaArrowRight } from "react-icons/fa";

type PropTypes = {
  title: string;
  extraStyles?: string;
  hasRightArrowIcon?: boolean;
};

const Button = ({ title, extraStyles, hasRightArrowIcon }: PropTypes) => {
  return (
    <div
      className={
        `border rounded-md p-3 text-sm font-light flex items-center justify-center gap-2` +
        extraStyles
      }
    >
      {title}
      {hasRightArrowIcon && (
        <span className="inline">
          <FaArrowRight />
        </span>
      )}
    </div>
  );
};

export default Button;

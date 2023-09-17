import React from "react";
import { FaArrowRight } from "react-icons/fa";

type PropTypes = {
  title: string;
  extraStyles?: string;
  hasRightArrowIcon?: boolean;
  type?: string | any;
  disabled?: boolean;
};

const Button = ({
  title,
  extraStyles,
  hasRightArrowIcon,
  type,
  disabled,
}: PropTypes) => {
  return (
    <button
      type={type}
      className={
        `border rounded-md p-3 text-sm font-light flex items-center justify-center gap-2 transition ease-in-out delay-150 hover:scale-105` +
        extraStyles
      }
      disabled={disabled}
    >
      {title}
      {hasRightArrowIcon && (
        <span className="inline">
          <FaArrowRight />
        </span>
      )}
    </button>
  );
};

export default Button;

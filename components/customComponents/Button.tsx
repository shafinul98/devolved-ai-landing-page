"use client";

import React from "react";

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
        `border rounded-md p-3 text-sm flex items-center justify-center gap-2 transition ease-in-out hover:scale-105` +
        extraStyles
      }
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;

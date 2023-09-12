import React from "react";

type PropTypes = {
  title: string;
  extraStyles?: string;
};

const Button = ({ title, extraStyles }: PropTypes) => {
  return (
    <div
      className={
        `border rounded-md bg-white p-3 text-sm font-light` + extraStyles
      }
    >
      {title}
    </div>
  );
};

export default Button;

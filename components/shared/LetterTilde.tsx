import React from "react";

export const LetterTilde = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <strong
      className={`relative text-white before:absolute before:w-[4px] inline-block w-[10px] before:skew-x-[-32deg] before:h-[5px] before:bg-white before:right-0 before:top-[0px] before:left-[50%] before:translate-x-[-16%] sm:w-[15px] lg:w-[19px] ${className}`}
    >
      {children}
    </strong>
  );
};

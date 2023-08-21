import React from "react";

export const LetterTilde = ({ letter }: { letter: string }) => {
  return (
    <strong className="relative z-[-1] before:absolute before:w-[4px] before:skew-x-[-32deg] before:h-[5px] before:bg-white before:right-0 before:top-[0px] before:left-[50%] before:translate-x-[-16%]">
      {letter}
    </strong>
  );
};

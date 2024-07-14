import React from "react";
import { FlagLabelSvg } from "../../assets/icons/flag-label.svg";

interface Props {
  text1: string;
  text2: string;
}
export const FlagText: React.FC<Props> = ({ text1, text2 }) => {
  return (
    <div className="relative flex items-center mt-2 bg-secondary xs:bg-transparent p-2 xs:p-0">
      <FlagLabelSvg className="absolute left-0 w-full"></FlagLabelSvg>
      <div className="relative mr-10">
        <p className="ml-2 font-nunito font-semibold text-base-100 text-sm sm:text-base w-full text-wrap break-words">
          <span className="font-extrabold">{text1}</span> {text2}
        </p>
      </div>
    </div>
  );
};

import React from "react";
import { FlagLabelSvg } from "../assets/icons/flag-label.svg";

interface Props {
  text1: string;
  text2: string;
}
export const FlagText: React.FC<Props> = ({ text1, text2 }) => {
  return (
    <div className="relative flex items-center mt-2 ">
      <FlagLabelSvg className="absolute left-0"></FlagLabelSvg>
      <div className="relative">
        <p className="ml-2 font-nunito font-semibold text-base-100 text-base">
          <span className="font-extrabold">{text1}</span> {text2}
        </p>
      </div>
    </div>
  );
};

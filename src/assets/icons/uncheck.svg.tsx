import React from "react";
import { SvgPropsWithClassname } from "../types";

export const UncheckSvg: React.FC<SvgPropsWithClassname> = ({ className }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="13" cy="13" r="12" stroke="#E5E5E5" stroke-width="2" />
    </svg>
  );
};

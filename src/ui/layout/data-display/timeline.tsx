import React from "react";
import { twMerge } from "tailwind-merge";
import { CheckSvg } from "../../../assets/icons/check.svg";

interface Props {
  text?: string;
  text2?: string;
  selected?: boolean;
  completed?: boolean;
}

export const TimelineItem: React.FC<Props> = ({
  text,
  text2,
  selected,
  completed,
}) => {
  return (
    <li
      className={twMerge(
        "group/item flex flex-col font-nunito text-lg text-base-content "
      )}
    >
      <div className="flex items-center z-10">
        <div
          className={twMerge(
            "w-4 h-4 border-2 border-primary rounded-lg bg-base-100",
            selected
              ? "group-last/item:border-primary"
              : "group-last/item:border-base-200"
          )}
        >
          {completed && (
            <CheckSvg className="w-full h-full z-10 scale-125"></CheckSvg>
          )}
        </div>
        <p className="ml-1 font-semibold">{text}</p>

        <div className="flex-1"></div>

        <p className="font-extrabold">{text2}</p>
      </div>

      <div className="h-7 w-[2px] translate-x-[7px] -translate-y-[7px] bg-base-200 scale-y-[2] group-last/item:h-0  group-last/item:mb-2"></div>
    </li>
  );
};

import React from "react";
import { CheckSvg } from "../../../assets/icons/check.svg";
import { UncheckSvg } from "../../../assets/icons/uncheck.svg";

interface Props {
  title: string;
  number: string;
  subtitle: string | React.ReactNode;
  footer?: React.ReactNode;
  name: string;
}

export const RadioPriceItem: React.FC<Props> = ({
  number,
  title,
  subtitle,
  name,
  footer,
}) => {
  return (
    <li className="py-4 px-4 flex relative justify-between border-base-200 border-2 has-[:checked]:border-primary border-b-transparent last:rounded-b-10 last:border-b-base-200 first:rounded-t-10">
      <div className="">
        <p className="font-nunito font-semibold text-2xl text-base-content">
          <span className="font-extrabold">{number} </span>
          {title}
        </p>

        <p className="font-nunito font-semibold text-base-300">{subtitle}</p>

        {footer}
      </div>

      <div className="absolute w-full left-0 h-full top-0 items-center">
        <div className="w-full h-full relative">
          <input
            type="radio"
            name={name}
            className="peer absolute w-full h-full opacity-0"
          ></input>

          <CheckSvg className="absolute top-5 right-4  opacity-0 peer-checked:opacity-100  pointer-events-none"></CheckSvg>
          <UncheckSvg className="absolute top-5 opacity-100 right-4 peer-checked:opacity-0 pointer-events-none"></UncheckSvg>
        </div>
      </div>
    </li>
  );
};

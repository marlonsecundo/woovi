import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

export const Button: React.FC<Props> = (props) => {
  return (
    <button
      {...props}
      className={twMerge(
        "bg-secondary text-secondary-content px-5 font-nunito font-semibold text-lg py-2 rounded-lg w-fit",
        props.className
      )}
    ></button>
  );
};

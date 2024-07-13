import { ButtonProps, Button as MButton } from "@material-tailwind/react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props extends ButtonProps {
  ref?: React.Ref<HTMLButtonElement> | undefined;
}

export const Button: React.FC<Props> = (props) => {
  return (
    <MButton
      {...props}
      className={twMerge(
        "bg-secondary text-secondary-content px-5 font-nunito font-semibold text-lg py-2 rounded-lg w-fit normal-case",
        props.className
      )}
    ></MButton>
  );
};

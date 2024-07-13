import React from "react";
import { InputProps, Input as MInput } from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<InputProps, "ref"> {
  ref?: React.Ref<HTMLInputElement> | undefined;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <MInput
      containerProps={{
        style: {
          minWidth: 50,
          height: 65,
        },
      }}
      labelProps={{
        className:
          "peer-focus:before:!border-base-content peer-focus:after:!border-base-content font-nunito ",
        style: {
          fontSize: 14,
          fontWeight: 600,
        },
      }}
      {...props}
      className={twMerge(
        "focus:border-base-content !font-nunito !text-lg !font-semibold ",
        props.className
      )}
    ></MInput>
  );
};

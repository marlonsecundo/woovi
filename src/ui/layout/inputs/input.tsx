import React from "react";
import {
  InputProps,
  Input as MInput,
  Typography,
} from "@material-tailwind/react";
import { twMerge } from "tailwind-merge";

interface Props extends Omit<InputProps, "ref"> {
  ref?: React.Ref<HTMLInputElement> | undefined;
  error?: any;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
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
        error={!!props.error}
      ></MInput>

      {props.error && (
        <Typography
          color="red"
          className="font-nunito text-sm text-justify mt-1"
        >
          {props.error}
        </Typography>
      )}
    </div>
  );
};

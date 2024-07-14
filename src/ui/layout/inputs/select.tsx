import React from "react";
import {
  SelectProps,
  Select as MSelect,
  Typography,
} from "@material-tailwind/react";

interface Props extends SelectProps {
  ref?: React.Ref<HTMLInputElement> | undefined;
  error?: any;
}

export const Select: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col">
      <MSelect
        {...props}
        containerProps={{
          style: { height: 65 },
        }}
        labelProps={{
          style: {
            fontSize: 14,
          },
        }}
        error={!!props.error}
        className="font-nunito font-semibold text-base-content text-lg"
      ></MSelect>

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

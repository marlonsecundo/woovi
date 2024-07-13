import React from "react";
import { SelectProps, Select as MSelect } from "@material-tailwind/react";

interface Props extends SelectProps {
  ref?: React.Ref<HTMLInputElement> | undefined;
}

export const Select: React.FC<Props> = (props) => {
  return (
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
      className="font-nunito font-semibold text-base-content text-lg"
    ></MSelect>
  );
};

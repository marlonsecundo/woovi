import React from "react";
import { SelectOptionProps, Option as MOption } from "@material-tailwind/react";

interface Props extends SelectOptionProps {}

export const Option: React.FC<Props> = (props) => {
  return (
    <MOption
      {...props}
      className="!font-nunito text-base-content text-base"
    ></MOption>
  );
};

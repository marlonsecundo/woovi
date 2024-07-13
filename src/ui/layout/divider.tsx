import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const Divider: React.FC<Props> = (props) => {
  return (
    <div
      {...props}
      className={twMerge("h-[2px] w-full bg-base-200", props.className)}
    />
  );
};

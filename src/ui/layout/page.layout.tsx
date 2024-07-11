import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export const PageLayout: React.FC<Props> = (props) => {
  return (
    <div
      {...props}
      className={twMerge(
        "bg-base-100 px-page-padding flex flex-col h-full",
        props.className
      )}
    />
  );
};

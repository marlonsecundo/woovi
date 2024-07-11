import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {}

export const Title: React.FC<Props> = (props) => {
  return (
    <h1
      {...props}
      className={twMerge(
        "font-nunito font-extrabold text-2xl text-base-content",
        props.className
      )}
    ></h1>
  );
};

import React from "react";
import { twMerge } from "tailwind-merge";

interface Props
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {}

export const TimelineGroup: React.FC<Props> = (props) => {
  return <ul {...props} className={twMerge("", props.className)}></ul>;
};

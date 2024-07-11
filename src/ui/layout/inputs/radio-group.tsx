import React from "react";

interface Props extends React.PropsWithChildren {
  label?: string;
}

export const RadioGroup: React.FC<Props> = ({ label, children }) => {
  return (
    <div className="w-full min-h-5  mb-5 rounded-10  relative mt-4">
      <label className="font-nunito z-10 font-extrabold text-lg text-base-content absolute top-0 bg-base-200 rounded-full px-4 -translate-y-4 translate-x-4">
        {label}
      </label>

      <ul className="flex flex-col w-full">{children}</ul>
    </div>
  );
};

import React from "react";
import { LogoSvg } from "../assets/icons/logo.svg";

// import { Container } from './styles';

export const Header: React.FC = () => {
  return (
    <div className="py-7 flex justify-center items-center pb-10">
      <LogoSvg></LogoSvg>
    </div>
  );
};

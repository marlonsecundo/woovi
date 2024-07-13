import React from "react";
import { GuardSvg } from "../../assets/icons/guard.svg";
import { LogoSvg } from "../../assets/icons/logo.svg";

// import { Container } from './styles';

export const Footer: React.FC = () => {
  return (
    <footer className="mb-8  flex flex-col">
      <div className="flex items-center self-center">
        <GuardSvg></GuardSvg>
        <p className="font-nunito ml-2 font-semibold text-base-400">
          Pagamento 100% seguro via:
        </p>

        <LogoSvg className="ml-1 w-14 -translate-y-[1px] text-base-400 fill-base-400"></LogoSvg>
      </div>
    </footer>
  );
};

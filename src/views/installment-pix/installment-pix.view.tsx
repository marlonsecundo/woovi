import React from "react";
import { PageLayout } from "../../ui/layout/page.layout";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";
import { Button } from "../../ui/layout/inputs/button";
import { CopySvg } from "../../assets/icons/copy.svg";
import { TimelineItem } from "../../ui/layout/data-display/timeline";
import { TimelineGroup } from "../../ui/layout/data-display/timeline-group";
import { Divider } from "../../ui/layout/divider";
import { Accordion } from "../../ui/layout/data-display/accordion";
import { Footer } from "../../ui/components/footer";

export const InstallmentPixView: React.FC = () => {
  const qrCode =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png";

  return (
    <PageLayout>
      <Header></Header>

      <Title className="text-center px-20 mb-5">
        João, pague a entrada de R$ 15.300,00 pelo Pix
      </Title>

      <img
        className="border-primary border-2 rounded-10 max-w-[340px] self-center mb-5"
        src={qrCode}
      ></img>

      <Button className="self-center">
        <p className="flex items-center">
          Clique para copiar QR CODE <CopySvg className="ml-2"></CopySvg>
        </p>
      </Button>

      <div className="font-nunito text-base font-semibold self-center mt-5">
        <p className="text-base-300">Prazo de pagamento:</p>
        <p className="font-extrabold text-base-content">15/12/2021 - 08:17</p>
      </div>

      <TimelineGroup className="mt-5">
        <TimelineItem
          text="1ª entrada no Pix"
          text2="R$ 15.300,00"
        ></TimelineItem>
        <TimelineItem text="2ª no cartão" text2="R$ 15.300,00"></TimelineItem>
      </TimelineGroup>

      <Divider className="mb-5 mt-3"></Divider>

      <div className="font-nunito text-base-content font-semibold flex justify-between items-center">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-lg">Total: R$ 30.600,00</p>
      </div>

      <Divider className="mb-5 mt-3"></Divider>

      <Accordion
        headerText="Como funciona?"
        bodyText="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're
 constantly trying to express ourselves and actualize our dreams."
      ></Accordion>

      <Divider className="mb-5 mt-3"></Divider>

      <div className="flex flex-col font-nunito text-sm font-semibold text-base-400 items-center mb-10">
        <p>Identificador:</p>
        <p className="font-extrabold text-base-content">
          2c1b951f356c4680b13ba1c9fc889c47
        </p>
      </div>

      <Footer></Footer>
    </PageLayout>
  );
};

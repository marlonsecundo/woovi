import React from "react";
import { PageLayout } from "../../ui/layout/page.layout";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";
import { Footer } from "../../ui/components/footer";
import { Input } from "../../ui/layout/inputs/input";
import { Select } from "../../ui/layout/inputs/select";
import { Option } from "../../ui/layout/inputs/option";
import { Button } from "../../ui/layout/inputs/button";
import { TimelineGroup } from "../../ui/layout/data-display/timeline-group";
import { TimelineItem } from "../../ui/layout/data-display/timeline";
import { Divider } from "../../ui/layout/divider";
import { Accordion } from "../../ui/layout/data-display/accordion";

export const InstallmentCreditView: React.FC = () => {
  return (
    <PageLayout>
      <Header></Header>

      <Title className="text-center px-20 mb-5">
        João, pague o restante em 1x no cartão
      </Title>

      <form className="flex flex-col gap-3">
        <Input type="text" label="Nome completo"></Input>
        <Input type="text" label="CPF"></Input>
        <Input type="text" label="Número do cartão"></Input>

        <div className="flex gap-3">
          <Input
            type="text"
            className="!flex !flex-1"
            label="Vencimento"
          ></Input>
          <Input type="text" className="!flex !flex-1" label="CVV"></Input>
        </div>
        <Select label="Parcelas">
          <Option>1x de R$ 15.300,00</Option>
        </Select>

        <Button className="w-full">Pagar</Button>
      </form>

      <div className="font-nunito text-base font-semibold self-center mt-5">
        <p className="text-base-300">Prazo de pagamento:</p>
        <p className="font-extrabold text-base-content">15/12/2021 - 08:17</p>
      </div>

      <TimelineGroup className="mt-5">
        <TimelineItem
          text="1ª entrada no Pix"
          text2="R$ 15.300,00"
          completed
        ></TimelineItem>
        <TimelineItem
          selected
          text="2ª no cartão"
          text2="R$ 15.300,00"
        ></TimelineItem>
      </TimelineGroup>

      <Divider className="mb-5 mt-3"></Divider>

      <div className="font-nunito text-base-content font-semibold flex justify-between items-center">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-lg">Total: R$ 30.600,00</p>
      </div>

      <Divider className="mb-1 mt-3"></Divider>

      <Accordion
        headerText="Como funciona?"
        bodyText="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're
constantly trying to express ourselves and actualize our dreams."
      ></Accordion>

      <Divider className="mb-5 mt-1"></Divider>

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

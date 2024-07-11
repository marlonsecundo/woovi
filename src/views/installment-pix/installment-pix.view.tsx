import React from "react";
import { PageLayout } from "../../ui/layout/page.layout";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";

export const InstallmentPixView: React.FC = () => {
  return (
    <PageLayout>
      <Header></Header>

      <Title className="text-center px-20">
        João, pague a entrada de R$ 15.300,00 pelo Pix
      </Title>
    </PageLayout>
  );
};

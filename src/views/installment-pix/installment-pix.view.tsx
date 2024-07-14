import React, { useMemo, useState } from "react";
import { PageLayout } from "../../ui/layout/page.layout";
import { Header } from "../../ui/components/header";
import { Title } from "../../ui/layout/typografy/title";
import { Button } from "../../ui/layout/inputs/button";
import { CopySvg } from "../../assets/icons/copy.svg";
import { Divider } from "../../ui/layout/divider";
import { Accordion } from "../../ui/layout/data-display/accordion";
import { Footer } from "../../ui/components/footer";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { data } from "../../data/prices";
import { Alert } from "@material-tailwind/react";
import { PriceItemInfo } from "../../ui/components/price-item-info";

export const InstallmentPixView: React.FC = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [alertOpen, setAlertOpen] = useState(false);

  const priceItemId = state?.priceItemId;

  const qrCode =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg/1200px-Link_pra_pagina_principal_da_Wikipedia-PT_em_codigo_QR_b.svg.png";

  const priceItem = useMemo(
    () => data.find((d) => d.number.toString() === priceItemId),
    [priceItemId]
  );

  if (priceItemId === undefined) return <Navigate to={"/"} replace></Navigate>;

  const handleCopy = async () => {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(qrCode);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = qrCode;

      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";

      document.body.prepend(textArea);
      textArea.select();

      try {
        document.execCommand("copy");
      } catch (error) {
        console.error(error);
      } finally {
        textArea.remove();
      }
    }

    setAlertOpen(true);
  };

  return (
    <PageLayout>
      <Header></Header>

      <Title className="text-center px-0 mb-5 sm:px-20">
        João, pague a entrada de R$ 15.300,00 pelo Pix
      </Title>

      <img
        className="border-primary border-2 rounded-10 max-w-[340px] self-center mb-5 w-full"
        src={qrCode}
      ></img>

      <Alert
        open={alertOpen}
        onClose={() => setAlertOpen(false)}
        className="mb-5 bg-secondary text-secondary-content"
      >
        Código copiado com sucesso!
      </Alert>

      <Button
        className="self-center"
        onClick={() => {
          handleCopy();
        }}
      >
        <p className="flex items-center">
          Clique para copiar QR CODE <CopySvg className="ml-2"></CopySvg>
        </p>
      </Button>

      <div className="font-nunito text-base font-semibold self-center mt-5">
        <p className="text-base-300">Prazo de pagamento:</p>
        <p className="font-extrabold text-base-content">15/12/2021 - 08:17</p>
      </div>

      <PriceItemInfo priceItem={priceItem}></PriceItemInfo>

      <Divider className="mb-5 mt-3"></Divider>

      <div className="font-nunito text-base-content font-semibold flex justify-between items-center">
        <p className="text-sm">CET: 0,5%</p>
        <p className="text-lg">Total: {priceItem?.total}</p>
      </div>

      <Divider className="mb-1 mt-3"></Divider>

      <Accordion
        headerText="Como funciona?"
        bodyText="We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're
 constantly trying to express ourselves and actualize our dreams."
      ></Accordion>

      <Divider className="mb-5 mt-1"></Divider>

      <Button
        className="mb-5 self-center"
        onClick={() => navigate("/credit", { state: { priceItemId } })}
      >
        Confirmar
      </Button>

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

import React from "react";
import { PriceItem } from "../../data/prices";
import { TimelineGroup } from "../layout/data-display/timeline-group";
import { TimelineItem } from "../layout/data-display/timeline";

interface Props {
  priceItem?: PriceItem;
}

export const PriceItemInfo: React.FC<Props> = ({ priceItem }) => {
  return (
    <TimelineGroup className="mt-5">
      <TimelineItem
        text="1ª entrada no Pix"
        text2="R$ 15.300,00"
        completed
      ></TimelineItem>
      {!priceItem?.onlyPix && (
        <TimelineItem
          text="2ª no cartão"
          text2={priceItem?.number + "x " + priceItem?.value}
        ></TimelineItem>
      )}
    </TimelineGroup>
  );
};

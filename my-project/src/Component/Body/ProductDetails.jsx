import React from "react";
import { useParams } from "react-router-dom";
import PageLayout from "./pageLayout";
import { CarpenterServices } from "../../fix/ServiceData/CarpenterServices";
import { ElectronicItems } from "../../fix/ServiceData/ElectronicItems";
import { HairSalon } from "../../fix/ServiceData/HairSalon";
import { HomeCleaningServices } from "../../fix/ServiceData/HomeCleaningServices";
import { HousePaintingServices } from "../../fix/ServiceData/HousePaintingServices";
import { LaundryServices } from "../../fix/ServiceData/LaundryServices";
import { MassageCare } from "../../fix/ServiceData/MassageCare";
import { MechanicServices } from "../../fix/ServiceData/MechanicServices";
import { PestControlServices } from "../../fix/ServiceData/PestControlServices";
import { Plumber } from "../../fix/ServiceData/Plumber";
import { WomensSalon } from "../../fix/ServiceData/WomensSalon";

function ProductDetails() {
  const { meraProductId } = useParams();

  const data = eval(meraProductId);

  return (
    <div>
      <PageLayout Product={data} />
    </div>
  );
}

export default ProductDetails;

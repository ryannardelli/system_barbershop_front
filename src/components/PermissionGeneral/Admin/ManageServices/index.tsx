import { Scissors } from "lucide-react";
import { ButtonNewFeature } from "../../../ButtonNewFeature";
import { ContainerBackground } from "../../../ContainerBackground";
import { ContainerServices } from "../../../ContainerServices";
import { Heading } from "../../../Heading";
import { ServicesOverviewCards } from "./ServicesOverviewCards";

export function ManageServices() {
  return(
    <ContainerBackground>
      <ContainerServices>
        <Heading title="Gerenciar Serviços" subtitle="Controle e organização dos serviços" />
        <ButtonNewFeature title="Novo serviço" icon={Scissors} onClick={() => console.log("Click on new service!")} />
      </ContainerServices>

      <ServicesOverviewCards />
    </ContainerBackground>
  );
}

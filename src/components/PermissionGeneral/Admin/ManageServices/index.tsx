import { ContainerBackground } from "../../../ContainerBackground";
import { Heading } from "../../../Heading";
import { ServicesOverviewCards } from "./ServicesOverviewCards";

export function ManageServices() {
  return(
    <ContainerBackground>
      <Heading title="Gerenciar Serviços" subtitle="Controle e organização dos serviços" />
      <ServicesOverviewCards />
    </ContainerBackground>
  );
}

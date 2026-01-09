import { Scissors } from "lucide-react";
import { ButtonNewFeature } from "../../../ButtonNewFeature";
import { ContainerBackground } from "../../../ContainerBackground";
import { ContainerServices } from "../../../ContainerServices";
import { Heading } from "../../../Heading";
import { ServicesOverviewCards } from "./ServicesOverviewCards";
import { ServicesFilters } from "./ServicesFilters";
import { CardGrid } from "../../../CardGrid";
import { BarberCard } from "../../../BarberCard";
import { professional } from "../../Client/ProfessionalClient/mock/professional";
import { services } from "../../Client/ServicesClient/mock/services";
import { ServiceCard } from "../../../ServiceCard";

export function ManageServices() {
  return(
    <ContainerBackground>
      <ContainerServices>
        <Heading title="Gerenciar Serviços" subtitle="Controle e organização dos serviços" />
        <ButtonNewFeature title="Novo serviço" icon={Scissors} onClick={() => console.log("Click on new service!")} />
      </ContainerServices>

      <ServicesOverviewCards />

      <ServicesFilters />

      <CardGrid
        items={services}
        renderItem={(service) => (
          <ServiceCard
            image={service.image}
            key={service.id}
            name={service.name}
            description={service.description}
            price={service.price}
            icon={service.icon}
            type={service.type}
          />
        )}
      />


    </ContainerBackground>
  );
}

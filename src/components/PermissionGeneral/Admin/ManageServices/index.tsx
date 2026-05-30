import { Scissors, Trash } from "lucide-react";
import { ButtonNewFeature } from "../../../ButtonNewFeature";
import { ContainerServices } from "../../../ContainerServices";
import { ServicesOverviewCards } from "./ServicesOverviewCards";
import { ServicesFilters } from "./ServicesFilters";
import { services } from "../../Client/ServicesClient/mock/services";
import { ServiceCard } from "../../../ServiceCard";
import { ButtonCollectionDelete } from "../../../ButtonCollectionDelete";
import { CardGrid } from "@/components/ui/CardGrid";
import { ContainerBackground } from "@/components/ui/ContainerBackground";
import { Heading } from "@/components/ui/Heading";

export function ManageServices() {
  return(
    <ContainerBackground>
      <ContainerServices>
        <Heading title="Gerenciar Serviços" subtitle="Controle e organização dos serviços" />
        <ContainerServices className="gap-4">
          <ButtonNewFeature title="Novo serviço" icon={Scissors} onClick={() => console.log("Click on new service!")} />
          <ButtonCollectionDelete title="Serviços Excluídos" icon={Trash} onClick={() => console.log("Click on button colletcion")} />
        </ContainerServices>
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
          />
        )}
      />
    </ContainerBackground>
  );
}

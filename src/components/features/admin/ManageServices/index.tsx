import { Scissors, Trash } from "lucide-react";
import { CardGrid } from "@/components/ui/CardGrid";
import { ContainerBackground } from "@/components/ui/Container/ContainerBackground";
import { Heading } from "@/components/ui/Heading";
import { ButtonCollectionDelete } from "@/components/ui/Button/ButtonCollectionDelete";
import { ButtonNewFeature } from "@/components/ui/Button/ButtonNewFeature";
import { ContainerServices } from "@/components/ui/Container/ContainerServices";
import { ServicesFilters } from "@/components/features/admin/ManageServices/ServicesFilters";
import { ServicesOverviewCards } from "@/components/features/admin/ManageServices/ServicesOverviewCards";
import { services } from "@/components/features/user/Services/mock/services";
import { ServiceCard } from "@/components/domain/Card/ServiceCard";

export function ManageServices() {
  return (
    <ContainerBackground>
      <ContainerServices>
        <Heading
          title="Gerenciar Serviços"
          subtitle="Controle e organização dos serviços"
        />
        <ContainerServices className="gap-4">
          <ButtonNewFeature
            title="Novo serviço"
            icon={Scissors}
            onClick={() => console.log("Click on new service!")}
          />
          <ButtonCollectionDelete
            title="Serviços Excluídos"
            icon={Trash}
            onClick={() => console.log("Click on button colletcion")}
          />
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

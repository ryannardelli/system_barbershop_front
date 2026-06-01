import { Trash, UserPlus } from "lucide-react";
import { ProfessionalOverviewCards } from "./ProfessionalOverviewCards";
import { ProfessionalFilter } from "./ProfessionalFilters";
import { professional } from "../../Client/ProfessionalClient/mock/professional";
import { CardGrid } from "@/components/ui/CardGrid";
import { ContainerBackground } from "@/components/ui/Container/ContainerBackground";
import { BarberCard } from "@/components/domain/BarberCard";
import { Heading } from "@/components/ui/Heading";
import { ButtonCollectionDelete } from "@/components/ui/Button/ButtonCollectionDelete";
import { ButtonNewFeature } from "@/components/ui/Button/ButtonNewFeature";
import { ContainerServices } from "@/components/ui/Container/ContainerServices";

export function ManageProfessional() {
  return (
    <ContainerBackground>
      <ContainerServices>
        <Heading
          title="Gerenciar Profissionais"
          subtitle="Controle e organização de profissionais"
        />

        <ContainerServices className="gap-4">
          <ButtonNewFeature
            title="Novo Profissional"
            icon={UserPlus}
            onClick={() => console.log("Click on new professional!")}
          />
          <ButtonCollectionDelete
            title="Profissionais Excluídos"
            icon={Trash}
            onClick={() => console.log("Click on button colletcion")}
          />
        </ContainerServices>
      </ContainerServices>

      <ProfessionalOverviewCards />

      <ProfessionalFilter />

      <CardGrid
        items={professional}
        renderItem={(professional) => (
          <BarberCard
            key={professional.id}
            barber={professional}
            actionLabel="Agendar"
          />
        )}
      />
    </ContainerBackground>
  );
}

import { Trash, UserPlus } from "lucide-react";
import { CardGrid } from "@/components/ui/CardGrid";
import { ContainerBackground } from "@/components/ui/Container/ContainerBackground";
import { BarberCard } from "@/components/domain/BarberCard";
import { Heading } from "@/components/ui/Heading";
import { ButtonCollectionDelete } from "@/components/ui/Button/ButtonCollectionDelete";
import { ButtonNewFeature } from "@/components/ui/Button/ButtonNewFeature";
import { ContainerServices } from "@/components/ui/Container/ContainerServices";
import { ProfessionalFilter } from "@/components/features/admin/ManageProfessional/ProfessionalFilter";
import { ProfessionalOverviewCards } from "@/components/features/admin/ManageProfessional/ProfessionalOverviewCards";
import { professional } from "@/components/features/user/Professional/mock/professional";

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

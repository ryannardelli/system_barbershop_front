import { Award, Star, Trash, UserCheck } from "lucide-react";

import { ContainerOverviewStats } from "@/components/ui/Container/ContainerOverviewStats";
import { ServicesStats } from "@/components/domain/ServicesStats";

export function ProfessionalOverviewCards() {
  return (
    <ContainerOverviewStats>
      <ServicesStats
        name="Profissionais ativos"
        rating={8}
        icon={UserCheck}
        variant="success"
      />
      <ServicesStats
        name="Profissionais excluídos"
        rating={3}
        icon={Trash}
        variant="danger"
      />
      <ServicesStats
        name="Profissionais 5 ★"
        rating={3}
        icon={Award}
        variant="warning"
      />
      <ServicesStats
        name="Avaliação média"
        rating={4.8}
        icon={Star}
        variant="info"
      />
    </ContainerOverviewStats>
  );
}

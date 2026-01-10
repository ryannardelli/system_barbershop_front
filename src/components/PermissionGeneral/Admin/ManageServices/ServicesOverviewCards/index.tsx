import { CheckCircle, DollarSign, Trash, TrendingUp } from "lucide-react";
import { ContainerOverviewStats } from "../../../../ContainerOverviewStats";
import { ServicesStats } from "../../../../ServicesStats";

export function ServicesOverviewCards() {
  return (
    <ContainerOverviewStats>
        <ServicesStats name="Serviços ativos" rating={12} icon={CheckCircle} variant="success" />
        <ServicesStats name="Serviços excluídos" rating={3} icon={Trash} variant="danger" />
        <ServicesStats name="Mais vendido" rating={"Corte Tradicional"} icon={TrendingUp} variant="warning" />
        <ServicesStats name="Preço médio" rating={45} icon={DollarSign} variant="info" />
    </ContainerOverviewStats>
  );
}

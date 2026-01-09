import { CheckCircle, DollarSign, Trash, TrendingUp } from "lucide-react";
import { ServicesStats } from "../ServicesStats";

export function ServicesOverviewCards() {
  return (
    <section className="max-w-7xl">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        <ServicesStats name="Serviços ativos" rating={12} icon={CheckCircle} variant="success" />
        <ServicesStats name="Serviços excluídos" rating={3} icon={Trash} variant="danger" />
        <ServicesStats name="Mais vendido" rating={"Corte Tradicional"} icon={TrendingUp} variant="warning" />
        <ServicesStats name="Preço médio" rating={45} icon={DollarSign} variant="info" />

      </div>
    </section>
  );
}

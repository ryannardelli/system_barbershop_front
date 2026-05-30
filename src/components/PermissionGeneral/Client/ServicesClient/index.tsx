import { useState } from "react";
import { services } from "./mock/services";
import { FilterButton, type FilterOptions } from "../../../FilterButton";
import { CardGrid } from "../../../CardGrid";
import { ServiceCard } from "../../../ServiceCard";
import { Heading } from "../../../Heading";
import { ContainerBackground } from "../../../ContainerBackground";

export type ServiceType = "todos" | "corte" | "barba" | "sobrancelha";

export function ServicesClient() {
  const [filter, setFilter] = useState<ServiceType>("todos");

  const serviceFilters: FilterOptions<ServiceType>[] = [
  { label: "Todos", value: "todos" },
  { label: "Cortes", value: "corte" },
  { label: "Barba", value: "barba" },
  { label: "Sobrancelha", value: "sobrancelha" },
];

  const filteredServices =
    filter === "todos"
      ? services
      : services.filter((service) => service.type === filter);

  return (
    <ContainerBackground>
      <Heading title="Serviços Disponíveis" subtitle="Escolha o serviço ideal para você" />

      <FilterButton<ServiceType>
        options={serviceFilters}
        value={filter}
        onChange={setFilter}
      />

      <CardGrid
        items={filteredServices}
        renderItem={(service) => (
          <ServiceCard
            key={service.id}
            image={service.image}
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


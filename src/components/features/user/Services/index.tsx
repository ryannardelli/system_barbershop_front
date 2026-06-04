import { useState } from "react";

import { services } from "./mock/services";

import { CardGrid } from "@/components/ui/CardGrid";
import { ServiceCard } from "@/components/ServiceCard";
import { ContainerBackground } from "@/components/ui/Container/ContainerBackground";
import { Heading } from "@/components/ui/Heading";
import { FilterButton, FilterOptions } from "@/components/ui/Filter/FilterButton/FilterButton";

export type ServiceType = "todos" | "corte" | "barba" | "sobrancelha";

export function Services() {
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
      <Heading
        title="Serviços Disponíveis"
        subtitle="Escolha o serviço ideal para você"
      />

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

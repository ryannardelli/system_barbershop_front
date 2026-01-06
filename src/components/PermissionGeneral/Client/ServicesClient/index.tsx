import { useState } from "react";
import { services } from "./mock/services";
import { FilterButton, type FilterOptions } from "../../../FilterButton";
import { CardGrid } from "../../../CardGrid";
import { ServiceCard } from "../../../ServiceCard";

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
    <section className="min-h-screen w-full space-y-8 bg-primary text-gray-100 p-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-white">
          Serviços Disponíveis
        </h1>
        <p className="text-sm text-white/60">
          Escolha o serviço ideal para você
        </p>
      </div>

      {/* Filtros */}
      <FilterButton<ServiceType>
        options={serviceFilters}
        value={filter}
        onChange={setFilter}
      />

      {/* Cards */}
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
    </section>
  );
}


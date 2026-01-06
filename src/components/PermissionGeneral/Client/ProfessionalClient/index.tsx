import { useState } from "react";
import { FilterButton, type FilterOptions } from "../../../FilterButton";
import { Heading } from "../../../Heading";
import { professional } from "./mock/professional";
import { CardGrid } from "../../../CardGrid";
import { BarberCard } from "../HomeClient/BarberCard";

type BarberFilterValue = "todos" | "disponiveis" | "master" | "senior" | "junior";

export function ProfessionalClient() {
  const [filter, setFilter] = useState<BarberFilterValue>("todos");

  const barberFilters: FilterOptions<BarberFilterValue>[] = [
  { label: "Todos", value: "todos" },
  { label: "Disponíveis", value: "disponiveis" },
  { label: "Master Barbers", value: "master" },
  { label: "Sênior", value: "senior" },
  { label: "Júnior", value: "junior" },
];

const filteredBarbers =
    filter === "todos"
      ? professional
      : filter === "disponiveis"
      ? professional.filter((p) => p.available)
      : professional.filter((p) =>
          p.role.toLowerCase().includes(filter)
        );

  return(
    <section className="min-h-screen space-y-8 bg-primary text-gray-100 p-6">
        <Heading title="Nossos Profissionais" subtitle="Especialistas prontos para te atender" />

        <FilterButton<BarberFilterValue>
          options={barberFilters}
          value={filter}
          onChange={setFilter}
        />

        <CardGrid
          items={filteredBarbers}
          renderItem={(professional) => (
            <BarberCard
              key={professional.id}
              image={professional.image}
              name={professional.name}
              specialty={professional.specialties}
              rating={professional.rating}
              actionLabel="Agendar"
            />
          )}
        />
    </section>
  );
}

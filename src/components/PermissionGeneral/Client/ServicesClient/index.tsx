import { useState } from "react";
import { services } from "./mock/services";

export type ServiceType = "todos" | "corte" | "barba" | "sobrancelha";

export function ServicesClient() {
  const [filter, setFilter] = useState<ServiceType>("todos");

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
      <div className="flex flex-wrap gap-3">
        {[
          { label: "Todos", value: "todos" },
          { label: "Cortes", value: "corte" },
          { label: "Barba", value: "barba" },
          { label: "Sobrancelha", value: "sobrancelha" },
        ].map((item) => (
          <button
            key={item.value}
            onClick={() => setFilter(item.value as ServiceType)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer
              ${
                filter === item.value
                  ? "bg-secondary text-primary"
                  : "bg-primary/70 text-white hover:bg-primary"
              }
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="bg-primary border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-secondary transition"
          >
            {/* Imagem */}
            <div className="w-full h-full mb-4 overflow-hidden rounded-xl">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {/* Ícone pequeno */}
                <div className="bg-secondary/10 p-2 rounded-lg">
                  {service.icon}
                </div>
                <h2 className="text-lg font-semibold text-white">
                  {service.name}
                </h2>
              </div>

              <p className="text-sm text-white/60">
                {service.description}
              </p>
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-secondary font-semibold">
                {service.price}
              </span>

              <button className="bg-secondary text-primary px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition cursor-pointer">
                Agendar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


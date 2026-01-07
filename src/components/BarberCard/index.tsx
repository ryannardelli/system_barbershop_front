import { Star } from "lucide-react";
import type { Barber } from "../PermissionGeneral/Client/ProfessionalClient/mock/professional";

type BarberCardProps = {
  barber: Barber;
  onAction?: () => void;
  actionLabel?: string;
};

export function BarberCard({
  barber,
  onAction,
  actionLabel = "Agendar",
}: BarberCardProps) {
  return (
    <div className="bg-primary border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-secondary transition">
      {/* Imagem do barbeiro */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
        <img
          src={barber.image}
          alt={barber.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info do barbeiro */}
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-secondary/10 p-2 rounded-lg">
            {barber.icon}
          </div>

          <div>
            <h2 className="text-lg font-semibold text-white">
              {barber.name}
            </h2>
            <p className="text-sm text-white/60">{barber.role}</p>
          </div>
        </div>

        <p className="text-sm text-white/60">{barber.description}</p>

        {/* Especialidades */}
        <div className="flex flex-wrap gap-2">
          {barber.specialties.map((s) => (
            <span
              key={s}
              className="bg-secondary/20 text-secondary text-xs px-2 py-1 rounded-full"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Experiência e Avaliação */}
        <div className="flex items-center gap-4 mt-2">
          <span className="text-white/80 text-sm">
            {barber.experience} de experiência
          </span>
          <span className="flex items-center gap-1 text-sm text-yellow-400">
            <Star className="w-4 h-4" />
            {barber.rating} ({barber.reviews})
          </span>
        </div>
      </div>

      {/* Botão de ação */}
      <div className="mt-6 flex justify-end">
        <button
          onClick={onAction}
          className="bg-secondary text-primary px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition cursor-pointer"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
}

import { Star } from "lucide-react";
import type { JSX } from "react";
import { SpecialtyTags } from "../../ProfessionalClient/SpecialityTags";
import { BarberActions } from "../../ProfessionalClient/BarberActions";
import { BarberInfoButton } from "../../ProfessionalClient/BarberInfoButton";
import { useRole } from "../../../../../hooks/useRole";

type BarberCardProps = {
  name: string;
  image: string;
  rating: number;
  specialty: string;
  phone: string;
  icon: JSX.Element;
};

export function BarberCard({
  name,
  image,
  rating,
  specialty,

}: BarberCardProps) {
  const totalStars = 5;
  const { isAdmin } = useRole();

  return (
    <div className="bg-primary/80 border border-white/10 rounded-2xl p-5 flex flex-col gap-4 hover:border-secondary transition-shadow shadow-md">

      <div className="w-full h-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
      </div>

      <p>Especialidades:</p>

      <SpecialtyTags specialties={specialty} />

      <div className="flex items-center gap-1 mt-1">
        {Array.from({ length: totalStars }).map((_, i) => (
          <Star
            key={i}
            size={16}
            className={
              i < rating
                ? "text-secondary fill-secondary"
                : "text-white/40"
            }
          />
        ))}
      </div>

      {isAdmin && <BarberActions />}
      <BarberInfoButton label="Informações do profissional" onClick={() => console.log("Ver info")} />
    </div>
  );
}

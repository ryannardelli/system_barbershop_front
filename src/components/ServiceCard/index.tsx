import type { ReactNode } from "react";
import { useRole } from "../../hooks/useRole";
import { Actions } from "../Actions";
import { InfoButton } from "@/components/ui/InfoButton";

type ServiceCardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
  icon: ReactNode;
  onAction?: () => void;
  actionLabel?: string;
};

export function ServiceCard({
  image,
  name,
  description,
  price,
  icon,
  onAction,
  actionLabel = "Agendar",
}: ServiceCardProps) {
  const { isAdmin } = useRole();
  return (
    <div className="bg-primary border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-secondary transition">
      <div className="w-full h-full mb-4 overflow-hidden rounded-xl">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="bg-secondary/10 p-2 rounded-lg">
            {icon}
          </div>

          <h2 className="text-lg font-semibold text-white">
            {name}
          </h2>
        </div>

        <p className="text-sm text-white/60">
          {description}
        </p>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-secondary font-semibold">
          {price}
        </span>

        <button
          onClick={onAction}
          className="bg-secondary text-primary px-4 py-2 rounded-xl text-sm font-medium hover:opacity-90 transition cursor-pointer"
        >
          {actionLabel}
        </button>
      </div>

       {isAdmin ? (
          <Actions />
        ) : (
          <InfoButton
            label="Informações do serviço"
            onClick={() => console.log("Ver info")}
          />
      )}
    </div>
  );
}

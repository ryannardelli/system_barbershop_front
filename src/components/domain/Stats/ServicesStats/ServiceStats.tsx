import {
  StatsVariant,
  statsVariantStyles,
} from "@/components/domain/Stats/ServicesStats/services-stats.styles";
import { type LucideIcon } from "lucide-react";

type ServicesStatsProps = {
  name: string;
  rating: number | string;
  icon: LucideIcon;
  variant: StatsVariant;
};

export function ServicesStats({
  name,
  rating,
  icon: Icon,
  variant,
}: ServicesStatsProps) {
  const styles = statsVariantStyles[variant];

  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border bg-primary p-6 shadow-sm transition hover:shadow-md ${styles.border}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}
      >
        <Icon className={`h-6 w-6 ${styles.iconColor}`} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{name}</p>
        <p className={`text-lg font-bold ${styles.valueColor}`}>{rating}</p>
      </div>
    </div>
  );
}

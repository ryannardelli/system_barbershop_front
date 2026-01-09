// import { type LucideIcon } from "lucide-react";
// import { statsVariantStyles, type StatsVariant } from "./services-stats.styles";

// type ServicesStatsProps = {
//   name: string;
//   rating: number | string;
//   icon: LucideIcon;
//   variant: StatsVariant;
// }

// export function ServicesStats({ name, rating, icon: Icon, variant }: ServicesStatsProps) {

//   const styles = statsVariantStyles[variant];

//   return(
//     <div className="flex items-center gap-4 rounded-2xl border border-red-500/10 bg-white p-6 shadow-sm transition hover:shadow-md">

//       <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
//         <Icon className="h-6 w-6 text-red-600" />
//       </div>

//       <div>
//         <p className="text-sm text-gray-500">{name}</p>
//         <p className="text-2xl font-bold text-red-600">{rating}</p>
//       </div>
//     </div>
//   );
// }

import { type LucideIcon } from "lucide-react";
import { statsVariantStyles, type StatsVariant } from "./services-stats.styles";

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
      className={`flex items-center gap-4 rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md ${styles.border}`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl ${styles.iconBg}`}
      >
        <Icon className={`h-6 w-6 ${styles.iconColor}`} />
      </div>

      <div>
        <p className="text-sm text-gray-500">{name}</p>
        <p className={`text-lg font-bold ${styles.valueColor}`}>
          {rating}
        </p>
      </div>
    </div>
  );
}

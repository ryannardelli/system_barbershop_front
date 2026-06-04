import type { LucideIcon } from "lucide-react";

export function InfoItem({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 text-white">
      <Icon className="text-secondary mt-0.5" />
      <div>
        <p className="text-xs text-white/50">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

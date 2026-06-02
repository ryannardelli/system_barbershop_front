import type { LucideIcon } from "lucide-react";

type ActionCardProps = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
}

export function ActionCard({ icon: Icon, title, subtitle }: ActionCardProps) {
  return(
    <div className="bg-primary/80 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-secondary transition">
      <Icon className="w-6 h-6 text-secondary" />
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-sm text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
}

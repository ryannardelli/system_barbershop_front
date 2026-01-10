import { type LucideIcon } from "lucide-react";

type ButtonCollecationDeleteProps = {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
}

export function ButtonCollecationDelete({ title, icon: Icon, onClick }: ButtonCollecationDeleteProps) {
  return (
    <button
      onClick={onClick}
      className="
        flex items-center gap-2
        bg-red-500 text-white
        px-4 py-2 rounded-xl
        hover:bg-red-600
        transition-colors duration-200
        font-medium cursor-pointer
      "
    >
      <Icon className="w-5 h-5" />
      {title}
    </button>
  );
}

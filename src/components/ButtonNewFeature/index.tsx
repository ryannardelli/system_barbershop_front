import { type LucideIcon } from "lucide-react";

type ButtonNewFeatureProps = {
  title: string;
  icon: LucideIcon;
  onClick: () => void;
  className?: string;
}

export function ButtonNewFeature({ title, icon: Icon, onClick, className = "" }: ButtonNewFeatureProps) {
  return(
    <button
     onClick={onClick}
     className={`
      bg-secondary hover:opacity-90 text-black font-medium
      px-6 py-3 rounded-xl flex items-center gap-2 cursor-pointer
      ${className}
      `}>
      <Icon size={20} />
      {title}
    </button>
  );
}

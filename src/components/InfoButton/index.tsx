import { Info } from "lucide-react";

type InfoButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  label?: string;
};

export function InfoButton({
  onClick,
  disabled = false,
  label
}: InfoButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title="Ver informações do profissional"
      aria-label="Ver informações do profissional"
      className={`
          flex items-center gap-2
          px-3 py-2 rounded-lg
          bg-blue-600 hover:bg-blue-700
          text-white text-sm font-medium
          transition-colors
          disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
          ${label ? "w-56" : ""}
        `}
    >
      <Info size={18} />
      {label}
    </button>
  );
}

import { Pencil } from "lucide-react";

type BarberEditButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export function BarberEditButton({
  onClick,
  disabled = false,
}: BarberEditButtonProps) {
  return (
    <button
      onClick={onClick}
      title="Editar profissional"
      disabled={disabled}
      aria-label="Editar profissional"
      className="
        flex items-center gap-2
        px-3 py-2 rounded-lg
        bg-yellow-500 hover:bg-yellow-600
        text-white text-sm font-medium
        transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
      "
    >
      <Pencil size={18} />
    </button>
  );
}

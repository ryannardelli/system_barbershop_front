import { Trash2 } from "lucide-react";

type BarberDeleteButtonProps = {
  onClick: () => void;
  disabled?: boolean;
};

export function DeleteButton({
  onClick,
  disabled = false,
}: BarberDeleteButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label="Excluir profissional"
      title="Excluir profissional"
      className="
        flex items-center gap-2
        px-3 py-2 rounded-lg
        bg-red-600 hover:bg-red-700
        text-white text-sm font-medium
        transition-colors
        disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
      "
    >
      <Trash2 size={18} />
    </button>
  );
}

export function ActionButton({
  icon,
  label,
  danger,
}: {
  icon: React.ReactNode;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      className={`
        flex items-center gap-2 px-4 py-2 rounded-xl text-sm transition cursor-pointer
        ${
          danger
            ? "bg-red-500/10 text-red-400 hover:bg-red-500/20"
            : "bg-white/5 text-white hover:bg-white/10"
        }
      `}
    >
      {icon}
      {label}
    </button>
  );
}

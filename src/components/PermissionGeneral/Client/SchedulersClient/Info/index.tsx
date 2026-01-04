export function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 text-white">
      <span className="text-secondary mt-0.5">{icon}</span>
      <div>
        <p className="text-xs text-white/50">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

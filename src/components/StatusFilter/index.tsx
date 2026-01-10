type StatusOption = {
  value: string;
  label: string;
};

type StatusFilterProps = {
  options?: StatusOption[];
  value?: string;
  onChange?: (value: string) => void;
 }

export function StatusFilter({
  options = [
    { value: "all", label: "Todos" },
    { value: "active", label: "Ativos" },
    { value: "inactive", label: "Inativos" },
  ],
  value,
  onChange,
}: StatusFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full md:w-48 rounded-xl border border-secondary/20 bg-primary py-2 px-3 text-sm focus:border-primary focus:outline-none"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

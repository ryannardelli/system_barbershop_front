// export function CategoryFilter() {
//     return (
//       <select className="w-full md:w-48 rounded-xl border border-secondary/20 bg-primary py-2 px-3 text-sm focus:border-primary focus:outline-none">
//       <option value="">Todas categorias</option>
//       <option value="corte">Corte</option>
//       <option value="barba">Barba</option>
//       <option value="pacote">Pacotes</option>
//       </select>
//     );
// }

type Option = {
  value: string;
  label: string;
};

type CategoryFilterProps = {
  placeholder?: string;
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
};

export function CategoryFilter({
  placeholder = "Selecione",
  options,
  value,
  onChange,
}: CategoryFilterProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className="w-full md:w-48 rounded-xl border border-secondary/20 bg-primary py-2 px-3 text-sm focus:border-primary focus:outline-none"
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

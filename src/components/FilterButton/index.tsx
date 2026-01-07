export type FilterOptions<T extends string> = {
  label: string;
  value: T;
};

type FilterButtonProps<T extends string> = {
  options: FilterOptions<T>[];
  value: T;
  onChange: (value: T) => void;
}

export function FilterButton<T extends string>({
  options,
  value,
  onChange,
}: FilterButtonProps<T>) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((item) => (
        <button
          key={item.value}
          onClick={() => onChange(item.value)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition cursor-pointer
            ${
              value === item.value
                ? "bg-secondary text-primary"
                : "bg-primary/70 text-white hover:bg-primary"
            }
          `}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

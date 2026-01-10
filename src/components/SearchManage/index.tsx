import { Search } from "lucide-react";

type SearchManageProps = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export function SearchManage({ placeholder = "Buscar", value }: SearchManageProps) {
  return(
    <div className="relative w-full md:max-w-sm">
      <Search
      className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
      size={18}
      />

      <input
        type="text"
        value={value}
        onChange={(e) => console.log("Change made", e)}
        placeholder={placeholder}
        className="w-full rounded-xl border border-secondary/20 bg-primary py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
      />
</div>
  );
}

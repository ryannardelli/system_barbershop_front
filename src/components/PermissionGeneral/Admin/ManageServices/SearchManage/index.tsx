import { Search } from "lucide-react";

export function SearchManage() {
  return(
    <div className="relative w-full md:max-w-sm">
      <Search
      className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary"
      size={18}
      />

      <input
        type="text"
        placeholder="Buscar serviço"
        className="w-full rounded-xl border border-secondary/20 bg-primary py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none"
      />
</div>
  );
}

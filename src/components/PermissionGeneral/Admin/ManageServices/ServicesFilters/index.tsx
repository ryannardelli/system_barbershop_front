import { SearchManage } from "../SearchManage";
import { CategoryFilter } from "../CategoryFilter";
import { StatusFilter } from "../StatusFilter";
import { FiltersContainer } from "../../../../FiltersContainer";

export function ServicesFilters() {
return (
<FiltersContainer>
  <SearchManage placeholder="Buscar serviço" />
   <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
    <StatusFilter />
    <CategoryFilter
        placeholder="Todas categorias"
        options={[
          { value: "corte", label: "Corte" },
          { value: "barba", label: "Barba" },
          { value: "pacote", label: "Pacotes" },
        ]}
    />
  </div>
</FiltersContainer>
  );
}

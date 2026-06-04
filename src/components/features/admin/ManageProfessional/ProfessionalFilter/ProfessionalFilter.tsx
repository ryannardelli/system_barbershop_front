import { CategoryFilter } from "@/components/ui/Filter/CategoryFilter";
import { StatusFilter } from "@/components/ui/Filter/StatusFilter";
import { FiltersContainer } from "@/components/ui/Container/FiltersContainer";
import { SearchManage } from "@/components/ui/Search/SearchManage";

export function ProfessionalFilter() {
  return(
      <FiltersContainer>
        <SearchManage placeholder="Buscar profissional" />
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
          <StatusFilter />
          <CategoryFilter
            placeholder="Especialidade"
            options={[
              { value: "barbeiro", label: "Barbeiro" },
              { value: "cabeleireiro", label: "Cabeleireiro" },
            ]}
          />
        </div>
      </FiltersContainer>
  );
}

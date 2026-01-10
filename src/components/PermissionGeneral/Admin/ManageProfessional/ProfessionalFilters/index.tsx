import { FiltersContainer } from "../../../../FiltersContainer";
import { CategoryFilter } from "../../ManageServices/CategoryFilter";
import { SearchManage } from "../../ManageServices/SearchManage";
import { StatusFilter } from "../../ManageServices/StatusFilter";

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

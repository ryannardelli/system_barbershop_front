import { SearchManage } from "../SearchManage";
import { CategoryFilter } from "../CategoryFilter";
import { StatusFilter } from "../StatusFilter";

export function ServicesFilters() {
return (
<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
  <SearchManage />

<div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
    <StatusFilter />
    <CategoryFilter />
    </div>
    </div>
  );
}

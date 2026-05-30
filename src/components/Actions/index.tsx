import { InfoButton } from "@/components/ui/InfoButton";
import { DeleteButton } from "../DeleteButton";
import { EditButton } from "../EditButton";

export function Actions() {
  return (
    <div className="flex gap-2 mt-4">
      <InfoButton onClick={() => console.log("Ver info")} />
      <EditButton onClick={() => console.log("Editar")} />
      <DeleteButton onClick={() => console.log("Excluir")} />
    </div>
  );
}

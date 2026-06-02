import { InfoButton } from "@/components/ui/Button/InfoButton";
import { DeleteButton } from "@/components/ui/Button/DeleteButton";
import { EditButton } from "@/components/ui/Button/EditButton";

export function ContainerActions() {
  return (
    <div className="flex gap-2 mt-4">
      <InfoButton onClick={() => console.log("Ver info")} />
      <EditButton onClick={() => console.log("Editar")} />
      <DeleteButton onClick={() => console.log("Excluir")} />
    </div>
  );
}

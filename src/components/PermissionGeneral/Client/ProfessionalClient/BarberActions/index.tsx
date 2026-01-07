import { BarberDeleteButton } from "../BarberDeleteButton";
import { BarberEditButton } from "../BarberEditButton";
import { BarberInfoButton } from "../BarberInfoButton";

export function BarberActions() {
  return (
    <div className="flex gap-2 mt-4">
      <BarberInfoButton onClick={() => console.log("Ver info")} />
      <BarberEditButton onClick={() => console.log("Editar")} />
      <BarberDeleteButton onClick={() => console.log("Excluir")} />
    </div>
  );
}

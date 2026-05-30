import {
  Calendar,
  Clock,
  Scissors,
  User,
  CheckCircle,
  XCircle,
  RotateCcw,
  MapPin,
  CreditCard,
  Timer,
  MessageCircle,
  Bell,
  Star,
} from "lucide-react";
import { ActionButton } from "./ActionButton";
import { InfoItem } from "./InfoItem";
import { ButtonNewFeature } from "../../../ButtonNewFeature";
import { ContainerBackground } from "@/components/ui/ContainerBackground";
import { Heading } from "@/components/ui/Heading";

export function SchedulersClient() {
  return (
    <ContainerBackground>
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        <Heading title="Meus Agendamentos" subtitle="Visualize, gerencie e acompanhe seus cortes" />

        <ButtonNewFeature title="Novo agendamento" icon={Calendar} onClick={() => console.log("Click on New scjeduler!")} />
      </header>

      <div className="bg-primary border border-white/10 rounded-2xl p-6 space-y-6 shadow-lg">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-semibold">
            <CheckCircle size={16} />
            Confirmado
          </span>

          <span className="text-white font-semibold text-lg">
            R$ 45,00
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
          <InfoItem icon={Scissors} label="Serviço" value="Corte Masculino" />
          <InfoItem icon={User} label="Barbeiro" value="João Barber" />
          <InfoItem icon={Calendar} label="Data" value="10/01/2026" />
          <InfoItem icon={Clock} label="Horário" value="15:30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm border-t border-white/10 pt-4">
          <InfoItem icon={MapPin} label="Unidade" value="Centro - Rua A, 123" />
          <InfoItem icon={Timer} label="Duração" value="40 minutos" />
          <InfoItem icon={CreditCard} label="Pagamento" value="Cartão de Crédito" />
        </div>

        <div className="bg-white/5 rounded-xl p-4 text-sm text-white/80">
          <strong className="block text-white mb-1">Observações</strong>
          Prefiro degradê baixo e barba alinhada.
        </div>

        <div className="flex items-center gap-2 text-xs text-white/70">
          <Bell size={14} className="text-secondary" />
          Lembrete ativado 1h antes do horário
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
          <ActionButton icon={<RotateCcw size={16} />} label="Reagendar" />
          <ActionButton
            icon={<XCircle size={16} />}
            label="Cancelar"
            danger
          />
          <ActionButton
            icon={<MessageCircle size={16} />}
            label="Falar com barbeiro"
          />
          <ActionButton
            icon={<Star size={16} />}
            label="Avaliar atendimento"
          />
        </div>
      </div>
    </ContainerBackground>
  );
}

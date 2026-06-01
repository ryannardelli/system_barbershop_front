import { Scissors, Flame, Calendar, Clock, MapPin } from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import { ActionCard } from "./ActionCard";
import { ServiceCard } from "./ServiceCard";
import { BarberCard } from "./BarberCard";
import { useAuth } from "../../../../hooks/useAuth";
import { ContainerBackground } from "@/components/ui/Container/ContainerBackground";
import { ButtonNewFeature } from "@/components/ui/Button/ButtonNewFeature";

export function HomeClient() {
  const { user } = useAuth();

  return (
    <ContainerBackground>
      <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-2xl font-semibold">
            Olá,{" "}
            <span className="text-secondary">{user?.name?.split(" ")[0]}</span>
          </h1>
          <p className="text-gray-400">Seu próximo visual começa aqui</p>
        </div>

        <ButtonNewFeature
          title="Novo agendamento"
          icon={Calendar}
          onClick={() => console.log("Button new scheduler click!")}
        />
      </header>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ActionCard icon={Scissors} title="Corte" subtitle="Estilo na régua" />
        <ActionCard icon={Flame} title="Barba" subtitle="Desenho perfeito" />
        <ActionCard icon={Scissors} title="Combo" subtitle="Corte + Barba" />
      </section>

      <section className="bg-primary/80 border border-white/10 rounded-2xl p-6 space-y-4">
        <h2 className="flex items-center gap-2 font-semibold">
          <Clock size={18} />
          Próximo horário
        </h2>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-medium">Corte + Barba</p>
            <p className="text-sm text-gray-400">João • 10/01 às 15:00</p>
            <span className="inline-block mt-2 text-sm text-secondary">
              Confirmado
            </span>
          </div>

          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-lg border border-white/20 hover:bg-white/5 cursor-pointer">
              Remarcar
            </button>
            <button className="px-4 py-2 rounded-lg border border-red-500/60 text-red-400 hover:bg-red-500 hover:text-black cursor-pointer">
              Cancelar
            </button>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Serviços</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ServiceCard title="Corte Masculino" price={40} />
          <ServiceCard title="Barba" price={30} />
          <ServiceCard title="Sobrancelha" price={15} />
          <ServiceCard title="Plano Mensal" price={120} />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-semibold">Barbeiros</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <BarberCard name="João" rating={5} />
          <BarberCard name="Carlos" rating={4} />
          <BarberCard name="Mateus" rating={3} />
        </div>
      </section>

      <section className="bg-primary/80 border border-white/10 rounded-2xl p-6 space-y-3">
        <h2 className="font-semibold">Últimos serviços</h2>

        <ul className="text-sm text-gray-400 space-y-1">
          <li>✂️ Corte – 20/12</li>
          <li>💈 Barba – 05/12</li>
        </ul>

        <button className="text-secondary text-sm hover:underline">
          Ver histórico completo
        </button>
      </section>

      <footer className="bg-primary/80 border border-white/10 rounded-2xl p-6 grid gap-4 md:grid-cols-3">
        <div className="flex items-center gap-2 text-gray-300">
          <MapPin size={18} />
          Rua Central, 123
        </div>

        <div className="flex items-center gap-2 text-gray-300">
          <Clock size={18} />
          Seg a Sáb • 09h às 20h
        </div>

        <button className="bg-secondary hover:opacity-90 text-black font-medium px-4 py-2 rounded-xl flex items-center gap-2 justify-center">
          <FaWhatsapp size={20} />
          WhatsApp
        </button>
      </footer>
    </ContainerBackground>
  );
}

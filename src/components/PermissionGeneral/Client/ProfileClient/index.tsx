import { Camera, Edit2 } from "lucide-react";
import { useAuth } from "../../../../hooks/useAuth";
import { ButtonNewFeature } from "../../../ButtonNewFeature";
import { ContainerBackground } from "@/components/ui/ContainerBackground";

export function ProfileClient() {
  const { user } = useAuth();

  return (
    <ContainerBackground>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-white/20 pb-6">
        <div className="relative">
          <img
            src={user?.photoURL || "https://ui-avatars.com/api/?name=" + user?.name}
            alt="Foto de perfil"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-secondary object-cover"
          />
          <button className="absolute bottom-0 right-0 bg-secondary p-2 rounded-full shadow-md hover:bg-yellow-500 transition-colors cursor-pointer">
            <Camera size={20} color="#060D1F" />
          </button>
        </div>

        <div className="flex-1">
          <h2 className="text-3xl font-bold">{user?.name}</h2>
          <p className="text-white/70 mt-1">{user?.email}</p>

          <ButtonNewFeature className="mt-4" title="Editar perfil" icon={Edit2} onClick={() => console.log("Click on edit profile!")} />
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="bg-primary/80 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Informações Pessoais</h3>
          <div className="space-y-3">
            <div>
              <label className="text-white/70 block mb-1">Nome</label>
              <input
                type="text"
                defaultValue="Ryan Nardelli"
                className="w-full p-2 rounded-md bg-primary/70 border border-white/20 text-white focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <label className="text-white/70 block mb-1">Email</label>
              <input
                type="email"
                defaultValue="ryan@email.com"
                className="w-full p-2 rounded-md bg-primary/70 border border-white/20 text-white focus:outline-none focus:border-secondary"
              />
            </div>
          </div>
        </div>

        <div className="bg-primary/80 p-6 rounded-xl shadow-inner">
          <h3 className="text-xl font-semibold mb-4 border-b border-white/20 pb-2">Segurança</h3>
          <div className="space-y-3">
            <div>
              <label className="text-white/70 block mb-1">Nova Senha</label>
              <input
                type="password"
                placeholder="Digite a nova senha"
                className="w-full p-2 rounded-md bg-primary/70 border border-white/20 text-white focus:outline-none focus:border-secondary"
              />
            </div>
            <div>
              <label className="text-white/70 block mb-1">Confirmar Senha</label>
              <input
                type="password"
                placeholder="Confirme a nova senha"
                className="w-full p-2 rounded-md bg-primary/70 border border-white/20 text-white focus:outline-none focus:border-secondary"
              />
            </div>

            <button className="mt-4 w-full bg-secondary hover:bg-yellow-500 text-primary font-semibold py-2 rounded-lg transition-colors cursor-pointer">
              Salvar Alterações
            </button>
          </div>
        </div>
      </div>
    </ContainerBackground>
  );
}

import { useState } from "react";

import {
  Home,
  CalendarCheck,
  Scissors,
  ChevronLeft,
  UserCog,
  Users,
  UserPlus,
  Briefcase
} from "lucide-react";

import { useRole } from "@/hooks/useRole";
import { useAuth } from "@/hooks/useAuth";
import { ButtonLogout } from "@/components/domain/Auth/ButtonLogout";
import { MenuItem } from "@/components/ui/Menu/MenuItem";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  const { user } = useAuth();
  const { isAdmin } = useRole();

  return (
    <aside
      className={`
        fixed top-0 left-0 h-screen z-50
        bg-gradient-to-b from-[#0f172a] to-[#020617]
        ${collapsed ? "w-[88px]" : "w-[260px]"}
        transition-all duration-300 ease-in-out
        flex flex-col
        border-r border-white/10
      `}
    >
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-6 bg-[#020617] border border-white/10 rounded-full p-1 text-gray-300 hover:text-white cursor-pointer"
      >
        <ChevronLeft
          className={`w-4 h-4 transition-transform ${
            collapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      <div className="flex items-center gap-3 px-6 py-6">
        <img
          src={user?.photoURL || "https://ui-avatars.com/api/?name=" + user?.name}
          className="w-10 h-10 rounded-full border border-white/20"
        />
        {!collapsed && (
          <div>
            <p className="text-sm font-medium text-white">{user?.name}</p>
            <p className="text-xs text-gray-400">Cliente</p>
          </div>
        )}
      </div>

      <nav className="flex-1 px-3 space-y-1">

      <>
        <MenuItem
          href="/"
          icon={Home}
          label="Início"
          collapsed={collapsed}
        />

        <MenuItem
          href="/schedulers-client"
          icon={CalendarCheck}
          label="Meus Agendamentos"
          collapsed={collapsed}
        />

        <MenuItem
          href="/services-client"
          icon={Scissors}
          label="Serviços"
          collapsed={collapsed}
        />

        <MenuItem
          href="/professionals"
          icon={Users}
          label="Profissionais"
          collapsed={collapsed}
        />

        <MenuItem
          href="/profile"
          icon={UserCog}
          label="Meu Perfil"
          collapsed={collapsed}
        />
      </>

      {isAdmin && (
        <>
          <div className="pt-3 mt-3 border-t border-muted" />
          <MenuItem
            href="/manage-services"
            icon={Briefcase}
            label="Gerenciar Serviços"
            collapsed={collapsed}
          />

          <MenuItem
            href="/manage-professional"
            icon={UserPlus}
            label="Gerenciar Usuários"
            collapsed={collapsed}
          />
        </>
      )}
    </nav>

      <div className="px-3 py-4 border-t border-white/10">
        <ButtonLogout />
      </div>
    </aside>
  );
}

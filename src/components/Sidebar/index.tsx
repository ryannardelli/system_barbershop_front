import { useState } from "react";
import {
  Home,
  CalendarCheck,
  Scissors,
  User,
  LogOut,
  ChevronLeft
} from "lucide-react";
import { MenuItem } from "../MenuItem";

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

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
      {/* Toggle */}
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

      {/* Perfil */}
      <div className="flex items-center gap-3 px-6 py-6">
        <img
          src="https://readymadeui.com/profile.webp"
          className="w-10 h-10 rounded-full border border-white/20"
        />
        {!collapsed && (
          <div>
            <p className="text-sm font-medium text-white">John Doe</p>
            <p className="text-xs text-gray-400">Cliente</p>
          </div>
        )}
      </div>

      {/* Menu */}
      <nav className="flex-1 px-3 space-y-1">
        <MenuItem href="/" icon={Home} label="Início" collapsed={collapsed} />
        <MenuItem href="/schedulers-client" icon={CalendarCheck} label="Meus Agendamentos" collapsed={collapsed} />
        <MenuItem href="/services-client" icon={Scissors} label="Serviços" collapsed={collapsed} />
        <MenuItem href="/profile" icon={User} label="Meu Perfil" collapsed={collapsed} />
      </nav>

      {/* Footer */}
      <div className="px-3 py-4 border-t border-white/10">
        <MenuItem
          icon={LogOut}
          label="Sair"
          collapsed={collapsed}
          danger
        />
      </div>
    </aside>
  );
}

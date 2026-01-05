import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";

export function ButtonLogout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/login");
  }

  return (
    <button
      onClick={handleLogout}
      aria-label="Sair"
      title="Sair"
      className="
        flex items-center justify-center cursor-pointer
        w-10 h-10
        rounded-full
        text-red-500
        hover:bg-red-500/10
        hover:text-red-600
        transition
        focus:outline-none
        focus:ring-2 focus:ring-red-500/50
        active:scale-95
      "
    >
      <LogOut size={20} />
    </button>
  );
}

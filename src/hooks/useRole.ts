import { useAuth } from "../hooks/useAuth";
import type { UserRole } from "../models/User";

export function useRole() {
  const { user } = useAuth();

  const role = user?.role as UserRole | undefined;

  return {
    role,
    isAdmin: role === "admin",
    isClient: role === "client",
    isBarber: role === "barber",
    hasRole: (roles: UserRole[]) => roles.includes(role as UserRole),
  };
}

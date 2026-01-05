import { createContext } from "react";
import type { AuthUser } from "../../models/Auth"

type AuthContextType = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  getToken: () => Promise<string | undefined>;
};

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

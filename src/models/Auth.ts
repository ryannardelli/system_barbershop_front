export type AuthUser = {
  uid: string;
  name: string | null;
  email: string | null;
  photoURL: string | null;
};

export type AuthState = {
  user: AuthUser | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
};

export type AuthAction =
  | { type: "SET_USER"; payload: AuthUser | null }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null }
  | { type: "LOGOUT" };

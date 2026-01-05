import type { AuthAction, AuthState } from "../models/Auth";

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  error: null,
};

export function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch(action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: !!action.payload,
        loading: false,
      };

      case "SET_LOADING":
        return { ...state, loading: action.payload };

      case "SET_ERROR":
        return { ...state, error: action.payload };

      case "LOGOUT":
        return { ...state, user: null, isAuthenticated: false, loading: false };

      default:
        return state;
  }
}

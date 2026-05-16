import { useEffect, useReducer } from "react";

import { AuthContext } from "./AuthContext";

import {
  authReducer,
  initialAuthState,
} from "../../reducer/authReducer";

import {
  loginWithEmail,
  loginGoogle,
  registerUser,
  logoutUser,
  getUserToken,
} from "../../services/auth/fireBaseAuthService";

import { syncUser } from "../../services/auth/authApiService";
import { authStateListener } from "../../services/auth/authListerner";

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({
  children,
}: AuthProviderProps) {
  const [state, dispatch] = useReducer(
    authReducer,
    initialAuthState
  );

  useEffect(() => {
    const unsubscribe = authStateListener(
      async (firebaseUser) => {
        if (!firebaseUser) {
          dispatch({ type: "LOGOUT" });
          return;
        }

        try {
          const token =
            await firebaseUser.getIdToken();

          const userData =
            await syncUser(token);

          dispatch({
            type: "SET_USER",
            payload: {
              uid: userData.firebaseUid,
              name: userData.name,
              email: userData.email,
              photoURL:
                userData.picture ?? null,
              role:
                userData.role ?? "client",
            },
          });
        } catch (error) {
          console.error(error);

          dispatch({
            type: "SET_ERROR",
            payload:
              "Erro ao autenticar usuário",
          });

          dispatch({ type: "LOGOUT" });
        }
      }
    );

    return unsubscribe;
  }, []);

  async function login(
    email: string,
    password: string
  ) {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });

      await loginWithEmail(
        email,
        password
      );
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.code ??
          "Erro ao fazer login",
      });
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  }

  async function loginWithGoogle() {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });

      await loginGoogle();
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.code ??
          "Erro ao fazer login com Google",
      });
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  }

  async function register(
    name: string,
    email: string,
    password: string
  ) {
    try {
      dispatch({
        type: "SET_LOADING",
        payload: true,
      });

      await registerUser(
        name,
        email,
        password
      );
    } catch (error: any) {
      dispatch({
        type: "SET_ERROR",
        payload:
          error.code ??
          "Erro ao registrar usuário",
      });
    } finally {
      dispatch({
        type: "SET_LOADING",
        payload: false,
      });
    }
  }

  async function logout() {
    await logoutUser();

    dispatch({ type: "LOGOUT" });
  }

  async function getToken() {
    return getUserToken();
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated:
          state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        register,
        login,
        loginWithGoogle,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

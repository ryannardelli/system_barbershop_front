import { useEffect, useReducer } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { authReducer, initialAuthState } from "../../reducer/authReducer";
import { AuthContext } from "./AuthContext";
import auth from "../../firebase/auth";

type AuthProviderProps = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        dispatch({
          type: "SET_USER",
          payload: {
            uid: firebaseUser.uid,
            name: firebaseUser.displayName ?? "",
            email: firebaseUser.email ?? "",
            photoURL: firebaseUser.photoURL ?? null,
          },
        });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    });

    return unsubscribe;
  }, []);

  async function logout() {
    await signOut(auth);
  }

  async function getToken(): Promise<string | null> {
    const user = auth.currentUser;
    if (!user) return null;
    return user.getIdToken();
  }

  async function register(
  name: string,
  email: string,
  password: string
) {
  try {
    dispatch({ type: "SET_LOADING", payload: true });

    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Atualiza nome e foto no Firebase Auth
    await updateProfile(credential.user, {
      displayName: name,
    });

    // Atualiza estado global
    dispatch({
      type: "SET_USER",
      payload: {
        uid: credential.user.uid,
        name,
        email: credential.user.email,
        photoURL: credential.user.photoURL,
      },
    });
  } catch (error: any) {
    dispatch({
      type: "SET_ERROR",
      payload: error.message ?? "Erro ao registrar usuário",
    });
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
  }
}


  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        register,
        logout,
        getToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

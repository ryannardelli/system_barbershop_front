import { onAuthStateChanged } from "firebase/auth";

import auth from "../../firebase/auth";

export function authStateListener(
  callback: (user: any) => void
) {
  return onAuthStateChanged(auth, callback);
}

import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import db from "../firebase/firestore";

import type { AuthUser } from "../models/Auth";

export async function ensureUserDocument(user: AuthUser) {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      name: user.name ?? "",
      email: user.email,
      picture: user.photoURL ?? "",
      role: "client",
      createdAt: serverTimestamp(),
    });
  }

  return userRef;
}

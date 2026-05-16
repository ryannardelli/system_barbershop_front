import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

import auth from "../../firebase/auth";

export async function loginWithEmail(
  email: string,
  password: string
) {
  return signInWithEmailAndPassword(
    auth,
    email,
    password
  );
}

export async function loginGoogle() {
  const provider = new GoogleAuthProvider();

  return signInWithPopup(auth, provider);
}

export async function registerUser(
  name: string,
  email: string,
  password: string
) {
  const credential =
    await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

  await updateProfile(credential.user, {
    displayName: name,
  });

  await credential.user.reload();

  return credential.user;
}

export async function logoutUser() {
  return signOut(auth);
}

export async function getUserToken() {
  const user = auth.currentUser;

  if (!user) return null;

  return user.getIdToken();
}

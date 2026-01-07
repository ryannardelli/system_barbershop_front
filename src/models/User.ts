import type { Timestamp } from "firebase/firestore";

export type UserRole = "client" | "admin" | "barber";

export type User = {
  uid: string;
  name: string;
  email: string;
  picture: string | null;
  role: UserRole;
  createdAt: Timestamp;
}

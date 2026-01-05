import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import app from "./config";

const db = getFirestore(app);

// Funções genéricas
export const addDocument = (collectionName, data) => addDoc(collection(db, collectionName), data);
export const getCollection = (collectionName) => getDocs(collection(db, collectionName));
export const updateDocument = (collectionName, docId, data) => updateDoc(doc(db, collectionName, docId), data);
export const deleteDocument = (collectionName, docId) => deleteDoc(doc(db, collectionName, docId));

export default db;

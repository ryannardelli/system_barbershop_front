import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import app from "./config";

const storage = getStorage(app);

export const uploadFile = async (path, file) => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export default storage;

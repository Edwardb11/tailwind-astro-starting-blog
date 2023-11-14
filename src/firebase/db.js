import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);
const pruebasCollection = collection(db, "pruebas");
const querySnapshot = await getDocs(pruebasCollection);
export const firebaseData = [];
querySnapshot.forEach((doc) => {
    firebaseData.push({ id: doc.id, ...doc.data() });
});
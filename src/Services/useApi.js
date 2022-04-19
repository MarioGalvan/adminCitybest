import { doc, deleteDoc, setDoc, getFirestore } from "firebase/firestore";

export const ServiceDelete = async (id, colection) => {
    await deleteDoc(doc(id, colection));
}

export const ServiceAdd = async (colection, data) => {
    const db = getFirestore();
    return  setDoc(doc(db, colection, data._id), data);
}
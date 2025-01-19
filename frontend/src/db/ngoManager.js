import { getDocs } from "firebase/firestore";
import { ngoCollection } from "./firebase";

const getAllNgoData = async () => {
  try {
    const docs = await getDocs(ngoCollection);
    const ngos = [];
    docs.forEach((doc) => ngos.push({ ...doc.data(), id: doc.id }));
    return ngos;
  } catch (error) {
    console.error("Error retrieving ngo data:", error);
  }
};

export { getAllNgoData };

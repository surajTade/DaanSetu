import { useState, useEffect } from "react";
import { db } from "../db/firebase";
import {
  collection,
  addDoc,
  doc,
  query,
  where,
  getDocs,
  deleteDoc,
  onSnapshot,
} from "firebase/firestore";

export default function Requirements() {
  const [itemName, setItemName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [requirements, setRequirements] = useState([]);
  const [ngoRefId, setNgoRefId] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user?.uid) {
      setNgoRefId(user.uid);
      fetchRequirements(user.uid);
    }
  }, []);

  const fetchRequirements = async (ngoId) => {
    if (!ngoId) return;
    const q = query(
      collection(db, "ngo-requirements"),
      where("ngo_ref", "==", doc(db, "users", ngoId))
    );

    onSnapshot(q, (snapshot) => {
      const reqList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRequirements(reqList);
    });
  };

  const handleAddRequirement = async () => {
    if (
      itemName.length <= 0 ||
      itemDescription.length <= 0 ||
      additionalInfo.length <= 0
    ) {
      return;
    }
    try {
      if (!ngoRefId) {
        alert("NGO Reference ID not found!");
        return;
      }

      const ngoRef = doc(db, "users", ngoRefId);
      await addDoc(collection(db, "ngo-requirements"), {
        name: itemName,
        description: itemDescription,
        additionalInfo: additionalInfo,
        ngo_ref: ngoRef,
      });

      setItemName("");
      setItemDescription("");
      setAdditionalInfo("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add requirement.");
    }
  };

  const handleDeleteRequirement = async (id) => {
    try {
      await deleteDoc(doc(db, "ngo-requirements", id));
      setRequirements(requirements.filter((req) => req.id !== id));
    } catch (error) {
      console.error("Error deleting document: ", error);
      alert("Failed to delete requirement.");
    }
  };

  return (
    <div>
      <div>
        <form className="space-y-4">
          <div>
            <label className="font-bold text-black">Item Name</label>
            <input
              required
              type="text"
              name="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="border p-2 w-full text-black rounded-md"
            />
          </div>
          <div>
            <label className="font-bold text-black">Item Description</label>
            <input
              required
              type="text"
              name="itemDescription"
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              className="border p-2 w-full text-black rounded-md"
            />
          </div>
          <div>
            <label className="font-bold text-black">Additional Info</label>
            <input
              required
              type="text"
              name="AdditionalInfo"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="border p-2 w-full text-black rounded-md"
            />
          </div>
        </form>
        <button
          onClick={handleAddRequirement}
          className="bg-transparent border-2 text-xl font-bold border-cyan-700 w-full text-cyan-700 mt-5 py-4 rounded-xl hover:bg-cyan-100"
        >
          Add
        </button>
      </div>
      <hr className="mt-10" />

      {/* Displaying the list of added requirements */}
      <div>
        <h2 className="text-lg font-bold text-black mt-5">
          Added Requirements
        </h2>
        {requirements.length > 0 ? (
          <ul className="space-y-3 mt-3">
            {requirements.map((req) => (
              <li
                key={req.id}
                className="border p-3 flex justify-between items-center rounded-md"
              >
                <div>
                  <p className="text-black font-semibold">{req.name}</p>
                  <p className="text-gray-600">{req.description}</p>
                  <p className="text-red-500">{req.additionalInfo}</p>
                </div>
                <button
                  onClick={() => handleDeleteRequirement(req.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 mt-3">No requirements added yet.</p>
        )}
      </div>
    </div>
  );
}

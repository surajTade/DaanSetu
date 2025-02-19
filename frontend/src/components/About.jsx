import { useState, useEffect } from "react";
import { db } from "../db/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

export default function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [userType, setUserType] = useState(""); // Track user type (user/ngo)
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null); // Store user data
  const [userId, setUserId] = useState(""); // Store user ID

  useEffect(() => {
    // Fetch user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.uid) {
      setUserId(storedUser.uid);
      setUserType(storedUser.userType);
      fetchUserData(storedUser.uid);
    } else {
      setLoading(false); // Stop loading if no user found
    }
  }, []);

  // Fetch User Data from Firebase
  const fetchUserData = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, "users", uid));
      if (userDoc.exists()) {
        setFormData(userDoc.data()); // Store user data in state
      } else {
        console.error("No user found!");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = () => setEditMode(true);

  const handleSaveClick = async () => {
    if (userId && formData) {
      try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, formData);
        
        // ✅ Show success alert after updating
        alert("User data updated successfully!");
  
        setEditMode(false);
      } catch (error) {
        console.error("Error updating user data:", error);
        alert("Failed to update data. Please try again.");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (loading) return <p>Loading user data...</p>;

  return (
    <div className="p-8 bg-gray-200 min-h-screen">
      {formData ? (
        <form className="space-y-4">
          {/* USER FIELDS (Only for Normal Users) */}
          {userType === "normal" && (
            <>
              <div>
                <label className="font-bold text-black">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="font-bold text-black">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="font-bold text-black">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="font-bold text-black">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
            </>
          )}

          {/* Common Field (For Both User & NGO) */}
          <div>
            <label className="font-bold text-black">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email || ""}
              className="border p-2 w-full text-black rounded-md"
              disabled
            />
          </div>

          {/* NGO FIELDS (Only for NGO Users) */}
          {userType === "ngo" && (
            <>
              <h2 className="text-2xl font-bold pt-5 pb-4 text-black">
                NGO Details
              </h2>

              <div>
                <label className="font-bold text-black">Name of NGO</label>
                <input
                  type="text"
                  name="ngoName"
                  value={formData.ngoName || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>

              <div>
                <label className="font-bold text-black">Type of NGO</label>
                <input
                  type="text"
                  name="ngoType"
                  value={formData.ngoType || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="font-bold text-black">Date of Registration</label>
                <input
                  type="date"
                  name="registrationDate"
                  value={formData.registrationDate || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
              <div>
                <label className="font-bold text-black">Office Address</label>
                <input
                  type="text"
                  name="officeAddress"
                  value={formData.officeAddress || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>

              <div>
                <label className="font-bold text-black">FCRA Number</label>
                <input
                  type="text"
                  name="fcraNumber"
                  value={formData.fcraNumber || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>

              <div>
                <label className="font-bold text-black">Bank Detail</label>
                <input
                  type="text"
                  name="bankDetails"
                  value={formData.bankDetails || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>

              <div>
                <label className="font-bold text-black">UPI Id</label>
                <input
                  type="text"
                  name="upiDetails"
                  value={formData.upiDetails || ""}
                  onChange={handleChange}
                  className="border p-2 w-full text-black rounded-md"
                  disabled={!editMode}
                />
              </div>
            </>
          )}
        </form>
      ) : (
        <p className="text-black">No user data found.</p>
      )}

      {/* Edit/Save Button */}
      <button
        onClick={editMode ? handleSaveClick : handleEditClick}
        className="bg-cyan-700 text-white font-bold py-2 px-4 mt-4 rounded-lg hover:bg-cyan-800 transition"
      >
        {editMode ? "Save" : "Edit"}
      </button>
    </div>
  );
}

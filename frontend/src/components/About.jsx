import { useState, useEffect } from "react";
import { db } from "../db/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const [editMode, setEditMode] = useState(false);
  const [userType, setUserType] = useState(""); // Track user type (user/ngo)
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState(null); // Store user data

  useEffect(() => {
    // Fetch user details from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email) {
      setUserType(storedUser.userType);
      fetchUserData(storedUser.uid);
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
  const handleSaveClick = () => setEditMode(false);

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
                  name="phoneNumber"
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
                <label className="font-bold text-black">
                  Date of Registration
                </label>
                <input
                  type="date"
                  name="dateOfRegistration"
                  value={formData.dateOfRegistration || ""}
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

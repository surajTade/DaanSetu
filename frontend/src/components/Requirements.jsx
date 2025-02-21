import { Form } from "react-router-dom";

export default function Requirements() {
    return (
      <div>
        <form className="space-y-4">
            <div>
                <label className="font-bold text-black">Item Name</label>
                <input
                  type="text"
                  name="itemName"
                  value=""
                  className="border p-2 w-full text-black rounded-md"
                  
                />
            </div>
            <div>
                <label className="font-bold text-black">Item Description</label>
                <input
                  type="text"
                  name="itemDescription"
                  value=""
                  className="border p-2 w-full text-black rounded-md"
                  
                />
            </div>
            <div>
                <label className="font-bold text-black">Additional Info</label>
                <input
                  type="text"
                  name="AdditionalInfo"
                  value=""
                  className="border p-2 w-full text-black rounded-md"
                  
                />
            </div>
          
        </form>
        <button className="bg-transparent border-2 text-xl font-bold border-cyan-700 w-full text-cyan-700 mt-5 py-4 rounded-xl hover:bg-cyan-100">
            Add
        </button>

        
        
      </div>
    );
}
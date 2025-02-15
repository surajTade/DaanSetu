import { useState } from 'react';

export default function About({ userType }) {
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        firstName: 'Vibhanshu',
        lastName: 'Vaibhav',
        email: 'hello@abc.com',
        phoneNumber: '7857811232',
        address1: '',
        address2: '',
        city: '',
        state: '',
        pincode: '',
        ngoType: '',
        description: '',
        title: '',
        dateOfRegistration: '',
        issuedAddress: '',
        fcraNumber: '',
        alternatePhoneNumber: '',
        websiteLink: '',
        bankAccountNumber: '',
        ifscCode: '',
        upiId: '',
        pass: '',
    });

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <div className="text-2xl font-bold pt-5 pb-4">About</div>
            <form className="space-y-2">
                <div className='my-4'>
                    <label className='font-bold ' >First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Email Address</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Phone Number</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Address 1</label>
                    <input type="text" name="address1" value={formData.address1} onChange={handleChange} placeholder="Address 1" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Address 2</label>
                    <input type="text" name="address2" value={formData.address2} onChange={handleChange} placeholder="Address 2" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label  className='font-bold '>City/Town</label>
                    <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City/Town" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>State</label>
                    <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Pincode</label>
                    <input type="text" name="pincode" value={formData.pincode} onChange={handleChange} placeholder="Pincode" className="border p-2 w-full" disabled={!editMode} />
                </div>
                <div className='my-4'>
                    <label className='font-bold '>Password</label>
                    <input type="password" name="password" value={formData.pass} onChange={handleChange} placeholder="Password" className="border p-2 w-full" disabled={!editMode} />
                </div>
                {userType === "ngo" && (
                    <>
                    <div className="text-2xl font-bold pt-5 pb-4 ">NGO Data</div>
                        <div className='my-4'>
                            <label className='font-bold '>Type of NGO</label>
                            <input type="text" name="ngoType" value={formData.ngoType} onChange={handleChange} placeholder="Type of NGO" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        
                        
                        <div className='my-4'>
                            <label className='font-bold '>Image (jpg)</label>
                            <input type="file" accept="image/jpg" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Title</label>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Description</label>
                            <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="border p-2 w-full" disabled={!editMode}></textarea>
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Date of Registration</label>
                            <input type="date" name="dateOfRegistration" value={formData.dateOfRegistration} onChange={handleChange} placeholder="Date of Registration" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Issued Address</label>
                            <input type="text" name="issuedAddress" value={formData.issuedAddress} onChange={handleChange} placeholder="Issued Address" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>FCRA Number</label>
                            <input type="text" name="fcraNumber" value={formData.fcraNumber} onChange={handleChange} placeholder="FCRA Number" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Alternate Phone Number</label>
                            <input type="text" name="alternatePhoneNumber" value={formData.alternatePhoneNumber} onChange={handleChange} placeholder="Alternate Phone Number" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Website Link</label>
                            <input type="url" name="websiteLink" value={formData.websiteLink} onChange={handleChange} placeholder="Website Link" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Address proof: Utility bill/rental agreement (pdf*)</label>
                            <input type="file" accept="application/pdf" placeholder="Address Proof" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>Registration Certificate (pdf*)</label>
                            <input type="file" accept="application/pdf" placeholder="Registration Certificate" className="border p-2 w-full" disabled={!editMode} />
                        </div>

                        <div className="text-2xl font-bold pt-5 pb-4 ">Bank Details</div>
                        <div className='my-4'>
                            <label className='font-bold '>Bank Account Number</label>
                            <input type="text" name="bankAccountNumber" value={formData.bankAccountNumber} onChange={handleChange} placeholder="Bank Account Number" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>IFSC Code</label>
                            <input type="text" name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="IFSC Code" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                        <div className='my-4'>
                            <label className='font-bold '>UPI ID</label>
                            <input type="text" name="upiId" value={formData.upiId} onChange={handleChange} placeholder="UPI ID" className="border p-2 w-full" disabled={!editMode} />
                        </div>
                    </>
                )}
            </form>
            <button
                onClick={editMode ? handleSaveClick : handleEditClick}
                className="bg-transparent border-2 text-xl font-bold border-cyan-700 w-[12vh] text-cyan-700 mt-5 py-2 rounded-xl hover:bg-cyan-100"
            >
                {editMode ? 'Save' : 'Edit'}
            </button>
        </div>
    );
}
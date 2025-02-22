import React, { useState } from 'react';

export default function Contact({ userType, contactInfo, address, hasDonation }) {
    const [message, setMessage] = useState('');

    const handleOrderReceived = () => {
        setMessage('Order received message sent to donor.');
    };

    const handleCancelDonation = () => {
        setMessage('Donation has been cancelled.');
    };

    return (
        <div>
            {hasDonation ? (
                <>
                    {userType === 'ngo' ? (
                        <>
                            <h2>Donor Contact Info</h2>
                            <p>{contactInfo}</p>
                            <h2>Donor Address</h2>
                            <p>{address}</p>
                            <button onClick={handleOrderReceived} className="bg-transparent border-2 text-xl font-bold border-cyan-700 w-full text-cyan-700 mt-5 py-4 rounded-xl hover:bg-cyan-100">
                            Order Recieved
                            </button>
                        </>
                    ) : (
                        <>
                            <h2>NGO Contact Info</h2>
                            <p>{contactInfo}</p>
                            <h2>NGO Address</h2>
                            <p>{address}</p>
                            <button onClick={handleOrderReceived} className="bg-transparent border-2 text-xl font-bold border-cyan-700 w-full text-cyan-700 mt-5 py-4 rounded-xl hover:bg-cyan-100">
                            Cancle Donation
                            </button>
                        </>
                    )}
                </>
            ) : (
                <p>NNNN</p>
            )}
            {message && <p>{message}</p>}
        </div>
    );
}
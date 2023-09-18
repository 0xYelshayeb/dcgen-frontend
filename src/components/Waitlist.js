// src/components/Information.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Information = () => {

    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false); // New state to track if the input has been touched
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        if (!isTouched) {
            setIsTouched(true);
        }
        const value = e.target.value;
        setEmail(value);
        setIsValid(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
    };

    const handleSubmit = async (e) => {
        let apiResponse = { status: null, message: null }; // Initialize a variable to store the API response
        if (isValid) {
            try {
                const response = await axios.post('https://api.dcgen.finance/joinWaitlist', { email });
                apiResponse.status = "success";
                apiResponse.message = response.data; // Assuming the API returns a message
            } catch (err) {
                apiResponse.status = "error";
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    apiResponse.message = err.response.data;
                } else if (err.request) {
                    // The request was made but no response was received
                    apiResponse.message = "No response from server";
                } else {
                    // Something happened in setting up the request that triggered an Error
                    apiResponse.message = "An error occurred";
                }
            }
            navigate('/waitlist', { state: { apiResponse } }); // Pass the API response as state
        }
    };

    return (

        <div className="content-section centered" id="waitlist-section">
            <h2>Unveiling the Future: DCgen's Index-Linked Innovations.</h2>
            <p>Step into tomorrow with DCgen. The soon-to-launch index products are second to none, set to elevate market benchmarks. Stay tuned for a transformative reveal!</p>
            <input
                type="text"
                value={email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className={`email-input ${isTouched ? (isValid ? "valid" : "invalid") : ""}`}
            />
            <button onClick={handleSubmit} className={`special-button waitlist`}>
                Join Waitlist
            </button>
        </div>
    );
};

export default Information;

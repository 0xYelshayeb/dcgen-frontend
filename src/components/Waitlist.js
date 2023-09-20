// src/components/Information.js
import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';

const Information = () => {

    const [email, setEmail] = useState("");
    const [response, setResponse] = useState({ status: null, message: null });
    const [isValid, setIsValid] = useState(false);
    const [isTouched, setIsTouched] = useState(false); // New state to track if the input has been touched

    const handleInputChange = (e) => {
        if (!isTouched) {
            setIsTouched(true);
        }
        const value = e.target.value;
        setEmail(value);
        setIsValid(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid) {
            try {
                const response = await axios.post('https://api.dcgen.finance/joinWaitlist', { email });
                setResponse({ status: "success", message: response.data })
            } catch (err) {
                setResponse({ status: "error", message: null })
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setResponse({ message: err.response.data })
                } else if (err.request) {
                    // The request was made but no response was received
                    setResponse({ message: "No response from server" })
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setResponse({ message: "An error occurred" })
                }
            }
        }
    };

    return (

        <div className="content-section centered" id="waitlist-section">
            <h2>Unveiling the Future: DCgen's Index-Linked Innovations.</h2>
            <p>Step into tomorrow with DCgen. The soon-to-launch index products are second to none, set to elevate market benchmarks. Stay tuned for a transformative reveal!</p>
            <div className="waitlist-container">
                <input
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    className={`email-input ${isTouched ? (isValid ? "valid" : "invalid") : ""}`}
                />
                <button onClick={handleSubmit} className="special-button" id="waitlist">
                    {response.status !== null ? (response.status === "success" ? <><i className="fas fa-check check"></i> Added</> : "Error") : "Stay Updated"}
                </button>
            </div>
            {response.message !== null && (
                <p id="response-message">
                    {response.message}
                </p>
            )}
        </div>
    );
};

export default Information;

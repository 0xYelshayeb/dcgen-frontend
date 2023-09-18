// src/pages/Verification.js
import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import "../styles/waitlist.css"
import axios from 'axios'; // Import axios

const Verification = () => {

    const [apiResponse, setApiResponse] = useState({ status: null, message: null });

    useEffect(() => {
        // Parse URL to get the token parameter
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        const processToken = async () => {
            try {
                const response = await axios.post('https://api.dcgen.finance/processToken', { token });
                setApiResponse({ status: "success", message: response.data });
                console.log("success")
            } catch (error) {
                console.log("error")
                const errorMessage = error.response?.data || "An error occurred";
                setApiResponse({ status: "error", message: errorMessage });
            }
        };

        // Call the function if token exists
        if (token) {
            processToken();
        }

    }, []);

    const schema = {
        "@context": "https://dcgen.finance/coming-soon",
        "@type": "WebPage",
        "name": "Waitlist",
        "description": "Waitlist Page",
    };
    return (
        <Layout title="Verification" name="Verification page" description="Page that renders when you want to verify your email" schema={schema}>
            <div className="waitlist-content">
                <h1>Thank you for signing up to our Waitlist</h1>
                {console.log(apiResponse)}
                {
                    apiResponse.status === "success" ? (
                        <p>You will be notified about future DCgen research developments and updates!</p>
                    ) : (
                        <p>{apiResponse.message || "An error occurred. Please try again."}</p>
                    )
                }
            </div>
        </Layout>
    );
};

export default Verification;
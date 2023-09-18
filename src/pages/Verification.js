// src/pages/Verification.js
import React, { useEffect, useState } from 'react';
import Layout from "../components/Layout";
import "../styles/waitlist.css"

const Verification = () => {

    const [apiResponse, setApiResponse] = useState({ status: "success", message: null });

    useEffect(() => {
        // Parse URL to get the token parameter
        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        // Send token to your backend for processing
        if (token) {
            fetch('https://api.dcgen.finance/processToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token })
            })
                .then(response => response.json())
                .then(data => {
                    // Handle the response from your backend
                    setApiResponse({ status: "success", message: data });
                })
                .catch(_ => {
                    // Handle errors
                    setApiResponse({ status: "error", message: "An error occurred" });
                });
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
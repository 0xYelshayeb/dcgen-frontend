// src/pages/Waitlist.js
import React from 'react';
import Layout from "../components/Layout";
import "../styles/waitlist.css"
import { useLocation, Link } from 'react-router-dom';

const WaitlistPage = () => {

    const location = useLocation();
    const apiResponse = location.state?.apiResponse; // Access the API response passed as state

    const schema = {
        "@context": "https://dcgen.finance/waitlist",
        "@type": "WebPage",
        "name": "Waitlist",
        "description": "Waitlist Page",
    };

    console.log(apiResponse?.message)

    return (
        <Layout title="Waitlist" name="Waitlist page" description="Page that renders when you request to enter the waitlist" schema={schema}>
            <div className="waitlist-content">
                <h1>Thank you for signing up to our Waitlist</h1>
                {
                    apiResponse?.status === "success" ? (
                        <p>Please check your inbox to verify your email address</p>
                    ) : (
                        <p>{apiResponse?.message || "An error occurred. Please try again."}</p>
                    )
                }
                <Link to="/">Go Back Home</Link>
            </div>
        </Layout>
    );
};

export default WaitlistPage;
// src/pages/Waitlist.js
import React from "react";
import Layout from "../components/Layout";
import "../styles/waitlist.css"

const Waitlist = () => {
    const schema = {
        "@context": "https://dcgen.finance/coming-soon",
        "@type": "WebPage",
        "name": "Waitlist",
        "description": "Waitlist Page",
    };
    return (
        <Layout title="Waitlist" name="Waitlist page" description="Page that renders when you request to enter the waitlist" schema={schema}>
            <div className="waitlist-content">
                <h1>Thank you for signing up to our Waitlist</h1>
                <p>Please check your inbox to verify your email address</p>
            </div>
        </Layout>
    );
};

export default Waitlist;
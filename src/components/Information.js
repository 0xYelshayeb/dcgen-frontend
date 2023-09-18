// src/components/Information.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import preview1 from "../images/preview1.jpg"
import preview2 from "../images/preview2.jpg"

const Information = () => {

    const [constituents, setConstituents] = useState([]);  // Added state to store data
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
    };

    const handleSubmit = async (e) => {
        // e.preventDefault();
        console.log("here")
        if (isValid) {
            try {
                await axios.post('https://api.dcgen.finance/joinWaitlist', { email });
                alert('You have successfully joined the waitlist.');
            } catch (err) {
                alert('An error occurred.');
            }
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.dcgen.finance/constituents`);
                setConstituents(response.data.slice(0, 3));  // Fetch only first 3 objects
            } catch (error) {
                console.error("Failed to fetch data", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section id="information-container">
            <div className="content-section centered" id="hero-section">
                <h2>The Premier Capitalization-Weighted Index for the Ethereum Ecosystem.</h2>
                <p>
                    Navigate the Ethereum landscape with unmatched clarity. DCgen's unique lens offers profound insights into Ethereum's market dynamics, guiding you towards informed and confident investment decisions.
                </p>
            </div>
            <hr style={{ borderColor: "#D0D1D3" }} />
            <div className="content-section wide-section" id="preview-section">
                <div>
                    <h2>Empowering Insights: DCgen's Research-Centric Approach.</h2>
                    <p>With a commitment to clarity and precision, DCgen combines advanced research with real-world price movements, curating an index you can confidently rely on.
                    </p>
                </div>
                <Link to="/research" id="document-container">
                    <div id="document-preview">
                        <img src={preview1} alt="Preview 1"></img>
                    </div>
                    <div id="document-preview">
                        <img src={preview2} alt="Preview 2"></img>
                    </div>
                </Link>
            </div>

            <hr style={{ borderColor: "#D0D1D3" }} />

            <div className="content-section wide-section" id="tokens-section">
                <div>
                    <h2>Spotlight on Excellence: Top 30 Ethereum Ecosystem Tokens.</h2>
                    <p>Curated with DCgen's precision-driven classification algorithm and upholding rigorous eligibility criteria, these 30 tokens are the hallmark of value for Ethereum enthusiasts, encapsulating the very essence of every DCgen index.</p>
                </div>
                <Link to="/ethereum-constituents" id="tokens-container">
                    {constituents.map((item, index) => (
                        <div className="token" key={index}>
                            <div className="left-group">
                                {console.log(item.logoURI)}
                                <img src={item.logoURI} alt={`icon${index + 1}`} />
                                <span className="token-name">{item.Name}</span>
                            </div>
                            <span className="token-change">
                                {parseFloat(item["Allocation %"]).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} %
                            </span>
                        </div>
                    ))}
                    <div className="redirect-button-container">
                        <div>
                            <i className="fas fa-angle-right" style={{ color: 'black' }}></i>
                        </div>
                    </div>
                </Link>
            </div>

            <hr style={{ borderColor: "#D0D1D3" }} />

            <div className="content-section centered" id="waitlist-section">
                <h2>Unveiling the Future: DCgen's Index-Linked Innovations.</h2>
                <p>Step into tomorrow with DCgen. The soon-to-launch index products are second to none, set to elevate market benchmarks. Stay tuned for a transformative reveal!</p>
                <input
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={`email-input ${isValid ? "valid" : "invalid"}`}
                />
                <button onClick={handleSubmit} className={`special-button waitlist`}>
                    Join Waitlist
                </button>
            </div>
        </section>
    );
};

export default Information;

// src/components/Information.js
import React from 'react';

const Information = () => {
    return (
        <section id="information-container">
            <div className="content-section centered">
                <h2>A capitalization-weighted index tracking the Ethereum ecosystem.</h2>
                <p>
                DCE provides a comprehensive picture of the market trends and performance metrics within the Ethereum space.lorem ipsum, important information
                </p>
            </div>

            <hr style={{borderColor: "#D0D1D3"}} />


            <div className="content-section wide-section">
                <div>
                    <h2>Research-backed index methodology with rigorous inclusion criteria:</h2>
                    <p>Lorem ipsum, lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
                </div>
                <div id="document-preview">
                    Document Preview
                <button>Download</button>
                </div>
            </div>

            <hr style={{borderColor: "#D0D1D3"}} />

            <div className="content-section wide-section">
                <div>
                    <h2>Index constituents: The index contains 30 leading tokens of the Ethereum ecosystem.</h2>
                    <p>The tokens undergo a rigorous process to be eligible for index conclusion. We work together with ITSA’s ITC classification framework.</p>
                </div>
                <div id="document-preview">
                    Document Preview
                <button>Download</button>
                </div>
            </div>

            <hr style={{borderColor: "#D0D1D3"}} />

            <div className="content-section centered">
                <h2>Index-linked products</h2>
                <p>DCgen is currently working on index products that track the Ethereum index. Available soon.</p>
                <a href="/waitlist">Join Waitlist</a>
            </div>
        </section>
    );
};

export default Information;

// src/components/Information.js
import React from 'react';

const Information = () => {
    return (
        <section id="information-container">
            <div className="content-section centered">
                <h2>Navigate the Ethereum landscape with unmatched clarity. DCgen presents the leading capitalization-weighted Index tracking the Ethereum Ecosystem.</h2>
                <p>
                Delve deeper with DCgen. A unique lens provides unmatched insights into Ethereum's market dynamics, guiding you towards informed and confident investment decisions.</p>
            </div>

            <hr style={{borderColor: "#D0D1D3"}} />
            <div className="content-section wide-section">
                <div>
                    <h2>Empowering Insights: DCgen's Research-Centric Approach.</h2>
                    <p>With a commitment to clarity and precision, DCgen combines advanced research with real-world price movements, curating an index you can confidently rely on.
                    </p>
                </div>
                <div id="document-preview">
                    Document Preview
                <button>Download</button>
                </div>
            </div>

            <hr style={{borderColor: "#D0D1D3"}} />

            <div className="content-section wide-section">
                <div>
                    <h2>Spotlight on Excellence: Top 30 Ethereum Ecosystem Tokens.</h2>
                    <p>Curated with DCgen's precision-driven classification algorithm and upholding rigorous eligibility criteria, these 30 tokens are the hallmark of value for Ethereum enthusiasts, encapsulating the very essence of every DCgen index.</p>
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

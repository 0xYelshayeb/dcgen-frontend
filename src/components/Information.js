// src/components/Information.js
import React from 'react';
import { Link } from 'react-router-dom';
import uniswap from "../images/uniswap.png"
import aave from "../images/aave.png"
import makerdao from "../images/makerdao.png"
import preview1 from "../images/preview1.jpg"
import preview2 from "../images/preview2.jpg"

const Information = () => {

    const [constituents, setConstituents] = useState([]);  // Added state to store data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api.dcgen.finance/constituents`);
                setConstituents(response.data);  // Set state with fetched data
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
                    <div className="token">
                        <div className="left-group">
                            <img src={uniswap} alt="icon1" />
                            <span className="token-name">Uniswap</span>
                        </div>
                        <span className="token-change">13.45%</span>
                    </div>
                    <div className="token">
                        <div className="left-group">
                            <img src={aave} alt="icon2" />
                            <span className="token-name">Aave</span>
                        </div>
                        <span className="token-change">11.25%</span>
                    </div>
                    <div className="token">
                        <div className="left-group">
                            <img src={makerdao} alt="icon3" />
                            <span className="token-name">MakerDAO</span>
                        </div>
                        <span className="token-change">8.72%</span>
                    </div>
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
                <Link to="/waitlist" className="special-button waitlist">
                    Join Waitlist
                </Link>
            </div>
        </section>
    );
};

export default Information;

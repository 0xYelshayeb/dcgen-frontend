// src/pages/Research.js
import React from "react";
import Layout from "../components/Layout";
import preview1 from "../images/preview1-hd.png"
import preview2 from "../images/preview2-hd.png"
import "../styles/research.css"

const Research = () => {

    const papers = [
        {
          title: "Ethereum Ecosystem Index: A Comprehensive Study of Index Construction and Performance.",
          description: "In the multifaceted cryptocurrency ecosystem, the need for accurate benchmarks has never been more pressing. This study introduces an index for the Ethereum ecosystem, comparing capitalization-weighted (CW) and equal-weighted (EW) methodologies. Utilizing data from January 2021 to April 2023, the research reveals CW indices outperform EW by an average total return of 127.63%. The proposed CW30 index surpasses existing, widely adopted benchmarks. This research paper serves as a foundational cornerstone for DCgen Index Research, shaping our approach and index methodologies. It also provides any market participants with a robust, data-backed framework for understanding and engaging with the Ethereum ecosystem.",
          img: preview1
        },
        {
          title: "Analyzing the Quantitative Impact of Constituent Counts and Rebalancing Intervals on Ethereum Market Index Performance Metrics.",
          description: "This study dives deep into the Capitalization-Weighted (CW) Ethereum Market Index to reveal the quantitative significance of varying constituent counts and rebalancing intervals. Using data from January 2020 to July 2023, the paper concludes that an index with 30 constituents and an 8-week rebalancing interval exhibits superior performance across multiple metrics, including Total Return, Mean Return, and key risk-adjusted ratios like Sharpe and Sortino. This specific configuration accounts for an astounding 73.6% variation in total returns, serving as a milestone for those aiming for balanced and optimal portfolio performance. This research serves as a foundation for DCgen Index Research.",
          img: preview2
        }
      ];

    const schema = {
        "@context": "https://dcgen.finance/research",
        "@type": "WebPage",
        "name": "DCGen Research Page",
        "description": "Page containing all the Research for the Ethereum Ecosystem Index",
      };
      return (
        <Layout title="Research" name="Research Page" description="Page including research papers released by dcgen" schema={schema}>
        <div className="main">
          <section className="hero-section">
            <h1>Research</h1>
            <p>Delve into DCgen's research, where in-depth analysis meets the complexities of crypto index construction and performance. Browse our collection of research papers, each shedding light on the nuances of index metrics, composition, and the Ethereum ecosystem's dynamics.</p>
          </section>
          <hr style={{borderColor: "#D0D1D3"}} />
          {papers.map((paper, index) => (
            <section key={index} className="paper-section">
              <div className="description">
                <h2>{paper.title}</h2>
                <p>{paper.description}</p>
              </div>
              <div className="document-preview">
                <img src={paper.img} alt={paper.title} />
                <button>Download</button>
              </div>
            </section>
          ))}
        </div>
        </Layout>
      );
};

export default Research;
// src/pages/ComingSoon.js
import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/Layout";

const Research = () => {
    const schema = {
        "@context": "https://dcgen.finance/coming-soon",
        "@type": "WebPage",
        "name": "Coming Soon",
        "description": "Coming Soon page for DCgen",
      };
    return (
        <Layout title="Coming Soon" name="DCgen Coming Soon" description="Page that renders when a feature coming soon is requested" schema={schema}>
            <ComingSoon/>
        </Layout>
    );
};

export default Research;
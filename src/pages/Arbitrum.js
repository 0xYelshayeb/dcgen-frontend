// src/pages/Arbitrum.js
import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/Layout";

const Arbitrum = () => {
    const schema = {
        "@context": "https://dcgen.finance/arbitrum-index",
        "@type": "WebPage",
        "name": "Arbitrum Index",
        "description": "An index tracking the Arbitrum ecosystem",
      };
    return (
        <Layout title="Arbitrum Index" name="Arbitrum Ecosystem Index" description="Page laying out Arbitrum Ecosystem Index" schema={schema}>
            <ComingSoon/>
        </Layout>
    );
};

export default Arbitrum;
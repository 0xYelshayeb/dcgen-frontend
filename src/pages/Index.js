// src/pages/Index.js
import React from "react";
import ChartSection from "../components/ChartSection";
import Information from "../components/Information"
import IndexName from "../components/IndexName";
import Layout from "../components/Layout";

const Index = () => {
    const schema = {
      "@context": "https://dcgen.finance",
      "@type": "WebPage",
      "name": "Ethereum Index",
      "description": "An index tracking the Ethereum ecosystem",
    };
    return (
        <Layout title="DCGen" name="DCGen index page" description="Index page of DCGen Research showcasing the ethereum ecosystem index" schema={schema}>
          <IndexName />
          <ChartSection />
          <Information />
        </Layout>
    );
};

export default Index;
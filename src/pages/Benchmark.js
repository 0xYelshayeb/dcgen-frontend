// src/pages/Index.js
import React from "react";
import OverviewAndPerformance from "../components/product-overview";
import Layout from "../components/Layout";
import { VStack } from '@chakra-ui/react';

const Benchmark = () => {
  const schema = {
    "@context": "https://dcgen.finance",
    "@type": "WebPage",
    "name": "Ethereum Index",
    "description": "An index tracking the Ethereum ecosystem",
  };
  return (
    <Layout title="DCgen" name="DCgen index page" description="Index page of DCgen Research showcasing the ethereum ecosystem index" schema={schema}>
      <VStack pt={15} pb={15} gap={20}>
        <OverviewAndPerformance/>
      </VStack>
    </Layout>
  );
};

export default Benchmark;
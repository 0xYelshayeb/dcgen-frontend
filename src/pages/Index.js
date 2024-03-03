// src/pages/Index.js
import React from "react";
import CallToAction from "../components/CallToAction";
// import FoundationalElements from "../components/FoundationalElements";
import ScientificApproach from "../components/ScientificApproach";
import Returns from "../components/Returns";
import Mission from "../components/Mission";
import Layout from "../components/Layout";
import Waitlist from "../components/Waitlist";
import NewFinance from "../components/NewFinance";
import ZeroFee from "../components/ZeroFee";
import Costly from "../components/Costly";
import { VStack } from '@chakra-ui/react';

const Index = () => {
  const schema = {
    "@context": "https://dcgen.finance",
    "@type": "WebPage",
    "name": "Ethereum Index",
    "description": "An index tracking the Ethereum ecosystem",
  };
  return (
    <Layout title="DCgen" name="DCgen index page" description="Index page of DCgen Research showcasing the ethereum ecosystem index" schema={schema}>
      <VStack pt={15} pb={15} gap={15}>
        <CallToAction />
        <Costly />
        <ZeroFee />
        <Returns />
        <NewFinance />
        <Mission />
        <ScientificApproach />
        <Waitlist />
      </VStack>
    </Layout>
  );
};

export default Index;
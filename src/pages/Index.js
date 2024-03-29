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
import Costly from "../components/Costly";
import ZeroFee from "../components/ZeroFee";
import { VStack, useBreakpointValue } from '@chakra-ui/react';

const Index = () => {
  const schema = {
    "@context": "https://dcgen.finance",
    "@type": "WebPage",
    "name": "Ethereum Index",
    "description": "An index tracking the Ethereum ecosystem",
  };

  const stackPadding = useBreakpointValue({ base: 8, md: 15 });
  const stackGap = useBreakpointValue({ base: 10, md: 20 });

  return (
    <Layout title="DCgen" name="DCgen index page" description="Index page of DCgen Research showcasing the ethereum ecosystem index" schema={schema}>
      <VStack pt={stackPadding} pb={stackPadding} gap={stackGap}>
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
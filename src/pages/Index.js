// src/pages/Index.js
import React from "react";
import CallToAction from "../components/CallToAction";
import FoundationalElements from "../components/FoundationalElements";
import ScientificApproach from "../components/ScientificApproach";
import Returns from "../components/Returns";
import Mission from "../components/Mission";
import Layout from "../components/Layout";
import Waitlist from "../components/Waitlist";
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
          <VStack p={15}>
            <CallToAction />
            <ScientificApproach />
            <Returns />
            <FoundationalElements />
            <Mission />
            <Waitlist />
          </VStack>
        </Layout>
    );
};

export default Index;
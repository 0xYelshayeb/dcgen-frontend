import { Box, Text, Stack } from '@chakra-ui/react';

import ChartSection from './ChartSection.js';
import ConstituentWeights from './ConstituentWeights.js';
import QuickFacts from './QuickFacts.js';
import Characteristics from './Characteristics.js';

const OverviewAndPerformance = () => {
  return (
    <Box background="white" p="40px" mb="40px" width={{ base: "95%", lg: "70%" }}>
      <Text fontSize="xxl" fontWeight="bold" mb="4">
        Ethereum Governance Index
      </Text>
      <Text fontSize="lg" color="black" mb="80px">
        The Ethereum Governance Index by DCgen is a market-capitalization weighted benchmark tracking the top thirty governance tokens on Ethereum, offering a dynamic measure of this segment's performance.
      </Text>
      <Stack spacing={32}>
        <ChartSection />
        <QuickFacts />
        <Characteristics />
        <ConstituentWeights />
      </Stack>
    </Box>
  );
};

export default OverviewAndPerformance;

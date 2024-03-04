import { Box, Text } from '@chakra-ui/react';

import ChartSection from './ChartSection.js';
import InfoSection from './InfoSection.js';
import QuickFacts from './QuickFacts.js';

const OverviewAndPerformance = () => {
  return (
    <Box background="#FCFCFC" p="24px" mb="24px" width="70%">
      <Text fontSize="lg" fontWeight="bold" mb="4">
        Overview
      </Text>
      <Text fontSize="md" color="gray.600" mb="8">
        DCG is a structured product that tracks the performance of the leading governance tokens on Ethereum. 
        There are no fees to the product besides potential gas fees. The product is built upon conducted research and uses 
        SetProtocol&apos;s smart contract infrastructure. Buy on Arbitrum.
      </Text>
      <ChartSection />
      <QuickFacts />
      <InfoSection />
    </Box>
  );
};

export default OverviewAndPerformance;

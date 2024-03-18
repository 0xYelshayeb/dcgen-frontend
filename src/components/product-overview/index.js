import { Box, Text } from '@chakra-ui/react';

import ChartSection from './ChartSection.js';
import InfoSection from './InfoSection.js';
import QuickFacts from './QuickFacts.js';
import Characteristics from './Characteristics.js';

const OverviewAndPerformance = () => {
  return (
    <Box background="#FCFCFC" p="24px" mb="24px" width={{ base: "95%", lg: "70%" }}>
      <Text fontSize="lg" fontWeight="bold" mb="4">
        Ethereum Governance Index
      </Text>
      <Text fontSize="md" color="gray.600" mb="8">
        The Ethereum Governance Index by DCgen is a market-capitalization weighted benchmark tracking the top thirty governance tokens on Ethereum, offering a dynamic measure of this segment's performance.
      </Text>
      <ChartSection />
      <QuickFacts />
      <Characteristics />
      <InfoSection />
    </Box>
  );
};

export default OverviewAndPerformance;

import React from 'react';
import { Box, Text, SimpleGrid, Divider, Heading, } from '@chakra-ui/react';

const QuickFacts = () => {
  const quickFacts = {
    'Constituents': '30',
    'Weighting Method': 'market-capitalization',
    'Rebalancing Frequency': 'two-month interval',
    'Launch Date': '14.02.2024',
    'Market': 'Ethereum',
    'AUM': '$ 30,536,531.65',
  };

  return (
    <Box>
      <Heading fontSize={{base:"lg", lg:"xl"}} fontWeight="bold" mb="4">
        Quick Facts
      </Heading>
      <SimpleGrid columns={{base: 2, lg: 3}} spacing={4}>
        {Object.entries(quickFacts).map(([key, value]) => (
          <Box key={key}>
            <Text fontSize={{base:"sm", lg:"md"}}>
              {key}:
            </Text>
            <Text fontSize={{base:"sm", lg:"md"}} fontWeight="bold">{value}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Divider my="4" />
    </Box>
  );
};

export default QuickFacts;

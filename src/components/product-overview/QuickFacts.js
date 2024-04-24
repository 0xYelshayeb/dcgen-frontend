import React from 'react';
import { Box, Text, SimpleGrid, Heading, } from '@chakra-ui/react';

const QuickFacts = () => {
  const quickFacts = {
    'Index Constituents': '30',
    'Weighting Method': 'capitalization-weighted',
    'Rebalancing Frequency': 'two-month interval',
    'Launch Date': '14.02.2024',
    'Market': 'Ethereum',
    'Index-linked products': 'DCgen Governance Core',
  };

  return (
    <Box>
      <Heading fontSize={{base:"lg", lg:"xl"}} fontWeight="bold" mb="8">
        Quick Facts
      </Heading>
      <SimpleGrid columns={{base: 2, lg: 3}} spacing={4}>
        {Object.entries(quickFacts).map(([key, value]) => (
          <Box key={key} pb='8'>
            <Text fontSize={{base:"sm", lg:"md"}} fontWeight="bold" color='#757575' >
              {key}
            </Text>
            <Text fontSize={{base:"md", lg:"lg"}} fontWeight="bold">{value}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QuickFacts;

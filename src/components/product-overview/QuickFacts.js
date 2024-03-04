// InfoSection.js
import React from 'react';
import { Box, Text, VStack, Divider } from '@chakra-ui/react';

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
      <Text fontSize="2xl" fontWeight="bold" mb="4">
        Quick Facts
      </Text>
      <Divider mb="4" />
      <VStack align="start" spacing={4}>
        {Object.entries(quickFacts).map(([key, value]) => (
          <Text key={key} fontSize="md">
            <Text as="span" fontWeight="bold">{key}: </Text>
            {value}
          </Text>
        ))}
      </VStack>
      <Divider my="4" />
    </Box>
  );
};

export default QuickFacts;

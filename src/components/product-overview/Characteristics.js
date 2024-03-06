import React from 'react';
import { Box, Text, SimpleGrid, Divider, Heading, } from '@chakra-ui/react';

const Characteristics = () => {
  const characteristics = {
    'Largest Market Cap': '30,582 m$',
    'Smallest Market Cap': '30,582 m$',
    'Mean Market Cap': '30,582 m$',
    'Launch Date': '14.02.2024',
    'Market': 'Ethereum',
    'AUM': '$ 30,536,531.65',
  };

  return (
    <Box>
      <Heading fontSize="xl" fontWeight="bold" mb="4">
        Characteristics
      </Heading>
      <SimpleGrid columns={3} spacing={4}>
        {Object.entries(characteristics).map(([key, value]) => (
          <Box key={key}>
            <Text fontSize="md">
              {key}:
            </Text>
            <Text fontSize="md" fontWeight="bold">{value}</Text>
          </Box>
        ))}
      </SimpleGrid>
      <Divider my="4" />
    </Box>
  );
};

export default Characteristics;

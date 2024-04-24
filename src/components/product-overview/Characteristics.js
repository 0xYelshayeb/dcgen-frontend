import React from 'react';
import { Box, Text, SimpleGrid, Heading, } from '@chakra-ui/react';

const Characteristics = () => {
  const characteristics = {
    'Largest Market Cap': '30,582 m$',
    'Smallest Market Cap': '30,582 m$',
    'Mean Market Cap': '30,582 m$',
    'Last Rebalancing': '14.02.2024',
    'Next Rebalancing': '05.04.2024',
  };

  return (
    <Box>
      <Heading fontSize={{base:"lg", lg:"xl"}} fontWeight="bold" mb="8">
        Index Characteristics
      </Heading>
      <SimpleGrid columns={{base: 2, lg: 3}} spacing={4}>
        {Object.entries(characteristics).map(([key, value]) => (
          <Box key={key} pb='8'>
            <Text fontSize="md" fontWeight="bold" color='#757575'>
              {key}
            </Text>
            <Text fontSize="lg" fontWeight="bold">{value}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Characteristics;

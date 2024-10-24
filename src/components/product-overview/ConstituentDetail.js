// src/components/product-overview/ConstituentDetail.js
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ConstituentDetail = ({ name, percentage }) => {
  
  const progressColor = '#050A30';
  const progressWidth = `${10 + percentage * 5}%`;

  return (
    <Box position="relative" borderRadius="md" height="48px" width="100%" bg="#F7F7F7" overflow="hidden">
      <Box 
        height="100%" 
        width={progressWidth} 
        bg={progressColor} 
        borderRadius="md"
      />
      <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" justifyContent="space-between" alignItems="center" px={4}>
        <Text fontSize="md" fontWeight="bold" color="white">{name}</Text>
        <Text fontSize="md" color={'#757575'} fontWeight="bold">{percentage} %</Text>
      </Box>
    </Box>
  );
};

export default ConstituentDetail;

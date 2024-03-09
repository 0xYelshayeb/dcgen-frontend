import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { colors } from '../../styles/theme';

const ConstituentDetail = ({ name, percentage }) => {
  
  const progressColor = colors.t1Blue;
  const progressWidth = `${10 + percentage * 3}%`;

  return (
    <Box position="relative" borderRadius="md" height="40px" width="100%" bg="gray.200" overflow="hidden">
      <Box 
        height="100%" 
        width={progressWidth} 
        bg={progressColor} 
        borderRadius="md"
      />
      <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" justifyContent="space-between" alignItems="center" px={4}>
        <Text fontSize="md" fontWeight="bold" color="white">{name}</Text>
        <Text fontSize="md" color={colors.gray_content} fontWeight="bold">{percentage} %</Text>
      </Box>
    </Box>
  );
};

export default ConstituentDetail;

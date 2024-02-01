// src/components/ScientificApproach.js
import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react';

import { colors } from '../styles/theme';

const ScientificApproach = () => {

    return (
        <VStack p={10} align="left" width="70%" gap={5}>
            <Text fontSize="xxl" fontWeight="600" marginBottom={5} width="60%" lineHeight="xxl">We take a scientific approach to constructing high-quality products.</Text>
            <Flex width="full" justifyContent="space-between" gap="5">
                <Box flex="40%" backgroundColor={colors.gray}>
                    <Box height={400}></Box>
                    <Heading fontSize="xl">Market Research</Heading>
                    <Text>We synthesize and conduct in-depth market research to publish actionable insights and comprehensive benchmarks tailored for the professional investor.</Text>
                </Box>
                <Box flex="60%" backgroundColor={colors.gray}>
                    <Box height={400}></Box>
                    <Heading fontSize="xl">Structured Products</Heading>
                    <Text>Enhance your portfolio with our automated strategies designed for crypto professionals. Capitalize on dynamic rebalancing and the power of compounding effects.</Text>
                </Box>
            </Flex>
        </VStack>
    );
};

export default ScientificApproach;

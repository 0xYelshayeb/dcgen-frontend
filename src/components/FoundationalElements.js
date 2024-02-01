// src/components/FoundationalElements.js
import React from 'react';
import {
    Box,
    VStack,
    Heading,
    Text,
    Flex,
} from '@chakra-ui/react';

import { colors } from '../styles/theme';

const FoundationalElements = () => {

    return (
        <VStack p={10} align="left" width="70%" gap={5}>
            <Text fontSize="xxl" fontWeight="600" marginBottom={5} width="60%" lineHeight="xxl">We take a scientific approach to constructing high-quality products.</Text>
            <Flex width="full" justifyContent="space-between" gap="5">
                <Box flex="40%" backgroundColor={colors.gray}>
                    <Box height={400}></Box>
                    <Heading fontSize="xl">Built on SetProtocol</Heading>
                    <Text>DCgen leverages SetProtocol's infrastructure to ensure robust and secure tokenization of products. SetProtocol has been audited meticulously.</Text>
                </Box>
                <Box flex="60%" backgroundColor={colors.gray}>
                    <Box height={400}></Box>
                    <Heading fontSize="xl">Roadmap to Decentralization</Heading>
                    <Text>We are steadily progressing towards becoming a community-governed protocol, reflecting our commitment to decentralization and community empowerment.</Text>
                </Box>
            </Flex>
        </VStack>
    );
};

export default FoundationalElements;

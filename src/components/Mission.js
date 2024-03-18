// src/components/Mission.js
import React from 'react';
import {
    VStack,
    Heading,
    Text,
} from '@chakra-ui/react';

import { colors } from '../styles/theme';

const Mission = () => {

    return (
        <VStack p={10} gap={5} align="left" width="100%" background={colors.t1Blue} textColor="white"
            pl={{ base: 10, md: `calc(15% + 40px)` }}
            pr={{ base: 10, md: `calc(15% + 40px)` }}
            pt={{ base: 20, md: 75 }}
            pb={{ base: 20, md: 75 }}>
            <Heading>Our Mission</Heading>
            <Text fontSize="xl">Making financial products a basic public good. Universally free and accessible.</Text>
        </VStack>
    );
};

export default Mission;

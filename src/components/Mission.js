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
        <VStack 
            p={10} 
            gap={5} 
            align="left" 
            justify="center"
            width="100%" 
            height='350px' 
            background={colors.t2Blue} 
            textColor="white"
            pl={{ base: 10, md: `calc(15% + 40px)` }}
            pr={{ base: 10, md: `calc(15% + 40px)` }}
            pt={{ base: 20, md: 75 }}
            pb={{ base: 20, md: 75 }}
        >
            <Heading fontSize="lggg">Our Mission</Heading>
            <Text fontSize="xxxl" width="90%" fontWeight='medium' >Making financial products a basic public good. Universally free and accessible.</Text>
        </VStack>
    );
};

export default Mission;

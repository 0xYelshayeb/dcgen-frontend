// src/components/ZeroFee.js
import React from 'react';
import {
    VStack,
    Heading,
    Text,
} from '@chakra-ui/react';

import { colors } from '../styles/theme';

const ZeroFee = () => {

    return (
        <VStack p={10} gap={5} align="left" width="100%" background={colors.t1Blue} textColor="white" pl={`calc(15% + 40px)`} pr={`calc(15% + 40px)`} pt={75} pb={75}>
            <Heading fontSize="xxxl">0% Fees.</Heading>
            <Text fontSize="xl">At DCgen, we build products that cost you nothing.</Text>
        </VStack>
    );
};

export default ZeroFee;

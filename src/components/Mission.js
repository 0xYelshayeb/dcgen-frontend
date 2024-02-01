// src/components/Mission.js
import React from 'react';
import {
    VStack,
    Heading,
    Text,
} from '@chakra-ui/react';

const Mission = () => {

    return (
        <VStack p={10} gap={5} align="left" width="70%">
            <Heading>Our Mission</Heading>
            <Text>DCgen is committed to providing unparalleled value to our users and future stakeholders through universally free and accessible financial products. Our vision is to foster a paradigm shift toward a more efficient financial system by redesigning the foundational infrastructure of financial products. By bridging the gap between traditional asset classes and decentralized finance, we aim to create a new blueprint for the asset managers of tomorrow.</Text>
        </VStack>
    );
};

export default Mission;

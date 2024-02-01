// src/components/CallToAction.js
import React from 'react';
import {
    VStack,
    Heading,
    Text,
    Button,
} from '@chakra-ui/react';

import dcgen_blue from "../icons/DCgen_blue.svg";
import dcgen_black from "../icons/DCgen_black.svg";


const CallToAction = () => {
    return (
        <VStack align="center" p={10}>
            <Heading fontSize="xxxl" width="70%" textAlign="center" marginBottom={7}>
                Grow Your Portfolio with{" "}
                <img
                    src={dcgen_blue}
                    alt="DCgen"
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                        height: '1em',
                        fill: 'blue'
                    }}
                />
                {" "}Products.
            </Heading>
            <Text fontSize="xl" fontWeight="600"  marginBottom={5} width="40%" textAlign={'center'} lineHeight="xl">Unlock Genuine Alpha with DCgen's Structured Products.</Text>
            <Button>Invest Now</Button>
        </VStack>
    );
};

export default CallToAction;

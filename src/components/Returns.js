import React from 'react';
import {
    VStack,
    Heading,
    Text,
    SimpleGrid
} from '@chakra-ui/react';

import { colors } from '../styles/theme';

const Returns = () => {
    return (
        <VStack align="left" p={10} width="70%">
            <Heading fontSize="xxl" fontWeight="600" mb={10} lineHeight="xxl" width="60%">
                Maximize Your Returns with DCgen's Diverse Offer of Products.
            </Heading>
            <SimpleGrid columns={2} spacing={10} width="full">
                <VStack align="left" spacing={4}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Zero Fees</Text>
                    <Text>
                        Investing in any DCgen product incurs no fees. No expense ratios, no issuance and redemption fees. Gas fees may apply, but remain low on Arbitrum.
                    </Text>
                </VStack>
                <VStack align="left" spacing={4}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Automated</Text>
                    <Text>
                        DCgen products are automatically reconstituted and rebalanced according to their methodology. Research shows that rebalancing strategies outperform buy and hold strategies.
                    </Text>
                </VStack>
                <VStack align="left" spacing={4}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Methodology</Text>
                    <Text>
                        All methodologies developed for DCgen products are derived from extensive research insights. From capitalization-weighted indexes to narrow sector products, our methodologies form the backbone.
                    </Text>
                </VStack>
                <VStack align="left" spacing={4}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Protocol Interaction</Text>
                    <Text>
                        Connect your wallet of choice and directly interact with the protocol infrastructure using our dApp. No need for swapping through DEXs.
                    </Text>
                </VStack>
            </SimpleGrid>
        </VStack>
    );
};

export default Returns;

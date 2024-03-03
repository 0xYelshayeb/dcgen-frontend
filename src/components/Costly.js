import { React } from 'react';
import {
    VStack,
    Heading,
    Text,
    Image,
    Flex
} from '@chakra-ui/react';

import { colors } from '../styles/theme';
import { motion } from 'framer-motion';

import ChartSVG from "../images/product-chart.svg";

const MotionVStack = motion(VStack);

const Costly = () => {

    return (
        <VStack align="left" p={10} width="70%">
            <Heading fontSize="xxl" fontWeight="600" mb={10} lineHeight="xxl" width="60%">
                Investing Can Be Costly.
            </Heading>
            <Flex gap={100}>
                <Image src={ChartSVG} alt="Typical Fees for Financial Products" />
                <MotionVStack align="left" spacing={4} initial="hidden">
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Silent Profit Eater</Text>
                    <Text>
                        Hidden fees stealthily chip away at potential profits, culminating in significant underperformance over time.
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Deferred Shock of Fees</Text>
                    <Text>
                        The true magnitude of fees emerges over time, as the compounding effect escalates their impact, silently but substantially reducing long-term investment gains.
                    </Text>
                </MotionVStack>
            </Flex>
        </VStack>
    );
};

export default Costly;

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

import ChartSVG from "../images/landing-bar-chart.svg";

const MotionVStack = motion(VStack);

const Returns = () => {

    return (
        <VStack align="left" p={10} width="70%">
            <Heading fontSize="xxl" fontWeight="600" mb={10} lineHeight="xxl" width="60%">
                Maximize Your Returns with DCgen's Diverse Offer of Products.
            </Heading>
            <Flex gap={100}>
                <Image src={ChartSVG} alt="Typical Fees for Financial Products" />
                <MotionVStack align="left" spacing={4} initial="hidden">
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>A Commitment to Zero fees</Text>
                    <Text>
                        DCgen offers universally free products to maximise your returns in the long run. With our infrastructure we enter a new era for financial products.
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Strategic Edge of Rebalancing</Text>
                    <Text>
                        DCgen's products leverage research-backed strategies that dynamically recalibrate to market conditions through rebalancing procedures.
                    </Text>
                </MotionVStack>
            </Flex>
        </VStack>
    );
};

export default Returns;

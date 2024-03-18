import { React } from 'react';
import {
    VStack,
    Heading,
    Text,
    Image,
    Flex,
    useBreakpointValue
} from '@chakra-ui/react';

import { colors } from '../styles/theme';
import { motion } from 'framer-motion';

import ChartSVG from "../images/landing-bar-chart.svg";

const MotionVStack = motion(VStack);

const Returns = () => {

    const gap = useBreakpointValue({ base: 5, md: 10, lg: 100 });


    return (
        <VStack align="left" p={{ base: 4, md: 8, lg: 10 }} width={{ base: "90%", md: "70%" }}>
            <Heading
                fontSize={{ base: "xl", md: "xxl" }}
                fontWeight="600"
                mb={10}
                lineHeight="shorter"
                width={{ base: "100%", lg: "60%" }}
            >
                Maximize Your Returns with DCgen's Diverse Offer of Products.
            </Heading>
            <Flex direction={{ base: 'column', xl: 'row' }} gap={gap} align="left">
                <Image src={ChartSVG} alt="Typical Fees for Financial Products" 
                width={{ base: "90%", md: "70%", xl: "70%" }}
                />
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

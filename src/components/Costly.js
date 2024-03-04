import React, { useEffect } from 'react';
import {
    VStack,
    Heading,
    Text,
    Image,
    Flex,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { colors } from '../styles/theme';

import ChartSVG from "../images/product-chart.svg";

const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

const Costly = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 1 }); // Adjust threshold as needed

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const item = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <VStack align="left" p={10} width="70%">
            <Heading fontSize="xxl" fontWeight="600" mb={10} lineHeight="xxl" width="60%">
                Investing Can Be Costly.
            </Heading>
            <MotionFlex gap={10} ref={ref} initial="hidden" animate={controls}>
                <Image src={ChartSVG} alt="Typical Fees for Financial Products" />
                <MotionVStack align="left" spacing={4} variants={item}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Silent Profit Eater</Text>
                    <Text>
                        Hidden fees stealthily chip away at potential profits, culminating in significant underperformance over time.
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Deferred Shock of Fees</Text>
                    <Text>
                        The true magnitude of fees emerges over time, as the compounding effect escalates their impact, silently but substantially reducing long-term investment gains.
                    </Text>
                </MotionVStack>
            </MotionFlex>
        </VStack>
    );
};

export default Costly;

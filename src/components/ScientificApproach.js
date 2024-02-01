import React from 'react';
import {
    VStack,
    Heading,
    Text,
    Flex,
    Box,
    Image
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { colors } from '../styles/theme';
import triangles from "../icons/triangles.svg";
import chart from "../images/chart.png";

const MotionBox = motion(Box);

const ScientificApproach = () => {

    // Animation controls to start the animations when the element is in view
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });

    // Start the animation when the element comes into view
    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // Define the initial and animate properties for the motion component
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
        <VStack p={10} align="left" width="70%" gap={5}>
            <Text fontSize="xxl" fontWeight="600" mb={5} width="60%" lineHeight="xxl">
                We take a scientific approach to constructing high-quality products.
            </Text>
            <Flex width="full" justifyContent="space-between" gap="5" ref={ref}>
                <MotionBox
                    flex="40%"
                    backgroundColor={colors.gray}
                    variants={item}
                    initial="hidden"
                    animate={controls}
                >
                    <Image src={triangles} height={400} filter="blur(5px)"></Image>
                    <Heading fontSize="xl">Market Research</Heading>
                    <Text>We synthesize and conduct in-depth market research to publish actionable insights and comprehensive benchmarks tailored for the professional investor.</Text>
                </MotionBox>
                <MotionBox
                    flex="60%"
                    backgroundColor={colors.gray}
                    variants={item}
                    initial="hidden"
                    animate={controls}
                >
                    <Image src={chart} height={400} filter="blur(5px)"></Image>
                    <Heading fontSize="xl">Structured Products</Heading>
                    <Text width="70%">Enhance your portfolio with our automated strategies designed for crypto professionals. Capitalize on dynamic rebalancing and the power of compounding effects.</Text>
                </MotionBox>
            </Flex>
        </VStack>
    );
};

export default ScientificApproach;

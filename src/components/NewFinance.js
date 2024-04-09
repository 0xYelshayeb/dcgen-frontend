import { React, useEffect } from 'react';
import {
    VStack,
    Heading,
    Text,
    SimpleGrid,
    useBreakpointValue
} from '@chakra-ui/react';

import { colors } from '../styles/theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionVStack = motion(VStack);

const NewFinance = () => {

    // Animation controls to start the animations when the element is in view
    const controls = useAnimation();

    const inViewThreshold = useBreakpointValue({ base: 0.4, md: 0.8 });

    const { ref, inView } = useInView({ threshold: inViewThreshold });

    // Start the animation when the element comes into view
    useEffect(() => {
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
                type: "tween",
                ease: "anticipate",
                duration: 1.2
            }
        }
    };

    return (
        <VStack align="left" p={{ base: 4, md: 8, lg: 10 }} width={{ base: "90%", md: "70%"}}>
            <Heading fontSize={{ base: "xl", md: "xxl" }} fontWeight="600" mb={10} lineHeight="xxl" width={{ base: "100%", md: "70%" }}>
                Building a New Finance with Decentralized Infrastructure.
            </Heading>
            <SimpleGrid
                ref={ref}
                columns={{ base: 1, md: 2 }}
                spacing={10}
                width="full"
                initial="hidden"
            >
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Breaking Down Barriers</Text>
                    <Text>
                        We're cutting loose from the outdated structures that have long impeded financial markets. Building upon DeFi infrastructure eliminates intermediaries, translating into direct gains for investors.
                    </Text>
                </MotionVStack>
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Empowering Investors</Text>
                    <Text>
                        Our products give you full control. By facilitating direct interaction with protocols, we place the power back into your hands.
                    </Text>
                </MotionVStack>
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Advancing Financial Democracy</Text>
                    <Text>
                        We believe financial products should be basic public goods that are governed by its community. This is a testament to our belief in a decentralized, democratic financial system.
                    </Text>
                </MotionVStack>
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Bridging the Gap</Text>
                    <Text>
                        We're relentless in our pursuit to bridge the gap between traditional asset classes and DeFi, charting a new course for financial products.
                    </Text>
                </MotionVStack>
            </SimpleGrid>
        </VStack>
    );
};

export default NewFinance;

import { React, useEffect } from 'react';
import {
    VStack,
    Heading,
    Text,
    SimpleGrid,
} from '@chakra-ui/react';

import { colors } from '../styles/theme';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MotionVStack = motion(VStack);

const Returns = () => {

    // Animation controls to start the animations when the element is in view
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 0.8 });

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
                type: "spring",
                bounce: 0.4,
                duration: 0.8
            }
        }
    };

    return (
        <VStack align="left" p={10} width="70%">
            <Heading fontSize="xxl" fontWeight="600" mb={10} lineHeight="xxl" width="60%">
                Maximize Your Returns with DCgen's Diverse Offer of Products.
            </Heading>
            <SimpleGrid
                ref={ref}
                columns={2}
                spacing={10}
                width="full"
                initial="hidden"
            >
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Zero Fees</Text>
                    <Text>
                        Investing in any DCgen product incurs no fees. No expense ratios, no issuance and redemption fees. Gas fees may apply, but remain low on Arbitrum.
                    </Text>
                </MotionVStack>
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Automated</Text>
                    <Text>
                        DCgen products are automatically reconstituted and rebalanced according to their methodology. Research shows that rebalancing strategies outperform buy and hold strategies.
                    </Text>
                </MotionVStack>
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Methodology</Text>
                    <Text>
                        All methodologies developed for DCgen products are derived from extensive research insights. From capitalization-weighted indexes to narrow sector products, our methodologies form the backbone.
                    </Text>
                </MotionVStack>
                <MotionVStack align="left" spacing={4} initial="hidden" variants={item} animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>Protocol Interaction</Text>
                    <Text>
                        Connect your wallet of choice and directly interact with the protocol infrastructure using our dApp. No need for swapping through DEXs.
                    </Text>
                </MotionVStack>
            </SimpleGrid>
        </VStack>
    );
};

export default Returns;

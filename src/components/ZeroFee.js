import React from 'react';
import { VStack, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { colors } from '../styles/theme';

const MotionSpan = motion.span; // Create a motion component for the span

const ZeroFee = () => {
    // Define the animation variants
    const wiggleVariant = {
        wiggle: {
            y: [0, -5, 5, -5, 0], // Move up and down
            transition: {
                duration: 0.5, // Duration of one cycle of the wiggle
                ease: "linear", // Apply a linear transition for consistent speed
                times: [0, 0.2, 0.4, 0.6, 0.8], // Adjust timing of each movement point
                repeatDelay: 1, // Delay in seconds before repeating the animation
                repeat: Infinity,
                repeatType: "loop" // Loop the animation indefinitely
            }
        }
    };

    return (
        <VStack gap={5} align="left" width="100%" background={colors.t2Blue} textColor="white" 
            pl={{ base: 10, md: `calc(15% + 40px)` }}
            pr={{ base: 10, md: `calc(15% + 40px)` }}
            pt={{ base: 20, md: 75 }}
            pb={{ base: 20, md: 75 }}
            >
            <Heading fontSize={{ base: "xl", md: "xxxxxl" }}>
                <MotionSpan variants={wiggleVariant} animate="wiggle" style={{ display: 'inline-block', fontSize: '1.5em' }}>0%</MotionSpan> Fees.
            </Heading>
            <Text fontSize="xl">At DCgen, we build products that cost you nothing.</Text>
        </VStack>
    );
};

export default ZeroFee;

import React from 'react';
import { VStack, Heading, Text, Flex, Box, Image } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import triangles from "../icons/triangles.svg"; // Make sure path is correct
import chart from "../images/chart.png"; // Make sure path is correct
import { Link } from 'react-router-dom';

import '../styles/MingCute.css'; // Make sure path is correct

const MotionBox = motion(Box);

const ScientificApproach = () => {
    const controls = useAnimation();
    const inViewThreshold = 0.8;
    const { ref, inView } = useInView({ threshold: inViewThreshold });

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const boxVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: "tween",
            ease: "anticipate",
            duration: 1.2
          }
        },
        hover: {
          scale: 1.03,
          transition: {
            type: "tween",
            ease: "easeInOut",
            duration: 0.2
          },
        },
      };

    return (
        <VStack p={{ base: 5, md: 10 }} align="left" width={{ base: "90%", lg: "70%" }} gap={5}>
            <Text fontSize={{ base: "xl", lg: "xxl" }} fontWeight="600" mb={5} lineHeight="medium">
                Delve into Our Research. Invest in Your Future With Our Structured Products.
            </Text>
            <Flex width="full" justifyContent="space-between" gap="5" ref={ref} direction={{ base: 'column', md: 'row' }}>
                <MotionBox
                    flex={{ base: "1 1 auto", md: "45%" }}
                    backgroundColor='#F5F5F5'
                    borderRadius='8px'
                    mb={{ base: 5, md: 0 }}
                    variants={boxVariants}
                    initial="hidden"
                    animate={controls}
                    whileHover="hover"
                    as={Link}
                    to="/research"
                    cursor="pointer"
                    position="relative"
                    _hover={{
                        textDecoration: 'none', // Remove underline on hover
                        backgroundColor: '#F5F5F5'
                    }}
                    style={{ color: 'inherit' }}
                >
                    <Image src={triangles} height={{ base: 150, md: 300 }} filter="blur(20px)" />
                    <Heading fontSize="md" pb='2' pl='4'>Research</Heading>
                    <Text fontSize="sm" pl='4' pb='4' width='90%'>
                        We synthesize and conduct in-depth market research to publish indices and research papers tailored for the professional investor.
                    </Text>
                    <Box as="span" position="absolute" bottom="4" right="4" className="mgc_external_link_line icon-external-link-darkblue" />
                </MotionBox>
                <MotionBox
                    flex="55%"
                    backgroundColor='#F5F5F5'
                    borderRadius='8px'
                    mb={{ base: 5, md: 0 }}
                    variants={boxVariants}
                    initial="hidden"
                    animate={controls}
                    whileHover="hover"
                    as="a"
                    href="https://app.dcgen.finance"
                    target="_blank"
                    rel="noopener noreferrer"
                    cursor="pointer"
                    position="relative"
                    _hover={{
                        textDecoration: 'none', // Remove underline on hover
                        scale: 1.05, // Pop effect
                        backgroundColor: '#F5F5F5'
                    }}
                    style={{ color: 'inherit' }}
                >
                    <Image src={chart} height={{ base: 150, md: 300 }} filter="blur(20px)" />
                    <Heading fontSize="md" pb='2' pl='4'>Structured Products</Heading>
                    <Text width="90%" fontSize="sm" pl='4' pb='4'>
                        Enhance your portfolio with our automated strategies designed for crypto professionals. Capitalize on dynamic rebalancing and the power of compounding effects.
                    </Text>
                    <Box as="span" position="absolute" bottom="4" right="4" className="mgc_external_link_line icon-external-link-blue" />
                </MotionBox>
            </Flex>
        </VStack>
    );
};

export default ScientificApproach;
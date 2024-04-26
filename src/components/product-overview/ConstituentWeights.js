// src/components/product-overview/ConstituentWeights.js
import React, { useState, useEffect } from 'react';
import {
    Box, Text, Image, HStack, VStack, Heading, Flex,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody,
    useDisclosure, Button
} from '@chakra-ui/react';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

// import PieChart from './PieChart'; 
import ConstituentDetail from './ConstituentDetail';
import '../../styles/MingCute.css';
import { color } from 'highcharts';

const MotionBox = motion(Box);

const boxVariants = {
    hidden: { x: 100, opacity: 0 },
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


const ConstituentWeights = () => {
    const [tokens, setTokens] = useState([]);
    const [allTokens, setAllTokens] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    
    useEffect(() => {
    const fetchTokens = async () => {
        try {
        const response = await axios.get('https://api.dcgen.finance/constituents');
        const sortedTokens = response.data.sort((a, b) => b['Allocation %'] - a['Allocation %']);
        setAllTokens(sortedTokens); // Store all tokens

        const topSixTokens = sortedTokens.slice(0, 5); // Get the top 6 tokens
        setTokens(topSixTokens); // Store top 6 tokens
        } catch (error) {
        console.error('Error fetching tokens:', error);
        }
    };

    fetchTokens();
    }, []);


  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.8 });

    useEffect(() => {
    if (inView) {
        controls.start("visible");
    }
    }, [controls, inView]);

    return (
        <VStack spacing={8} align="stretch">
                {/* First Column: Constituent Weights */}
                <Box width={{ base: "100%", md: "100%" }} mb={'32'}>
                    <Heading fontSize="xl" mb={8} >Constituent Weights</Heading>
                    <VStack align="left" pr='24' spacing={'4'} >
                        {tokens.map((token, index) => (
                            <ConstituentDetail
                                key={index}
                                name={token.Name}
                                percentage={token['Allocation %'].toFixed(2)}
                            />
                        ))}
                    </VStack>
                    <Button pl='16px' mt={4} onClick={onOpen} color='#276EF1' backgroundColor={'white'} _hover={{ backgroundColor: 'white' }}>
                        Show All
                    </Button>
                </Box>


                {/* Second Column: Index-linked Products */}
                <Box width={{ base: "40%", md: "40%" }} mb={'40'}>
                    <Heading fontSize="xl" mb={8}>Index-linked Products</Heading>
                    <MotionBox
                        as="a"
                        display="block"
                        href=""
                        target="_blank"
                        rel="noopener noreferrer"
                        p='4'
                        ref={ref}
                        variants={boxVariants}
                        initial="hidden"
                        animate={controls}
                        whileHover="hover"
                        borderRadius="8px"
                        background="#F7F7F7"
                        cursor={'pointer'}
                        position="relative"
                        _hover={{
                            textDecoration: 'none', // Remove underline on hover
                            scale: 1.05, // Pop effect
                            backgroundColor: '#F5F5F5',
                        }}
                        style={{ color: 'inherit' }}
                    >
                    <Text fontSize="md" fontWeight="bold" color='#757575'>
                        ERC-20 Token
                    </Text>
                    <Text fontSize="lg" fontWeight="bold">DCgen Governance Core (DCG)</Text>
                    <Box as="span" position="absolute" bottom="4" right="4" className="mgc_external_link_line icon-black" />
                    </MotionBox>
                </Box>


            {/* Constituent Weights Modal */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="100%">
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent width="70%" marginTop="80px" >
                    <ModalHeader fontSize={'xl'}>Constituent Weights</ModalHeader>
                    <Box
                    position="relative" // Ensure the parent has a non-static position
                    >
                    <Box
                        as="button"
                        position="absolute"
                        top="-48px" // Adjust as needed for your design
                        right="20px" // Adjust as needed for your design
                        className="mgc_close_line icon-black"
                        onClick={onClose} // Attach the onClose event handler
                    />
                    </Box>        
                    <ModalBody>
                        <VStack spacing={4} paddingTop={'4'}>
                            {allTokens.map((token, index) => (
                                <ConstituentDetail
                                    key={index}
                                    name={token.Name}
                                    percentage={token['Allocation %'].toFixed(2)}
                                />
                            ))}
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </VStack>
    );
};

export default ConstituentWeights;
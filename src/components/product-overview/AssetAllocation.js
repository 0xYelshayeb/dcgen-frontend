import React, { useState, useEffect } from 'react';
import {
    Box, Text, Image, HStack, VStack, Heading, Flex,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    useDisclosure
} from '@chakra-ui/react';
import axios from 'axios';
import PieChart from './PieChart'; // Assume this is your custom pie chart component
import ConstituentDetail from './ConstituentDetail';
import '../../styles/MingCute.css';


const TokenDetail = ({ name, image, constituency, color }) => {

    return (
        <HStack borderRadius="12" alignItems="center" p={2} width="full" justify="space-between">
            <HStack spacing={2}>
                <Image
                    boxSize="45px"
                    objectFit="cover"
                    src={image}
                    alt={name}
                    borderRadius="50%"
                    boxShadow="2px 2px 4px rgba(0, 0, 0, 0.2)" />
                <VStack alignItems="start" spacing={1}>
                    <Text fontWeight="bold" fontSize="sm" color={color}>{name}</Text>
                </VStack>
            </HStack >
            <VStack alignItems="start" spacing={1}>
                <Text fontWeight="bold" fontSize="sm" color={color}>{constituency}</Text>
            </VStack>
        </HStack>
    );
};

const AssetAllocation = () => {
    const [tokens, setTokens] = useState([]);
    const [allTokens, setAllTokens] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await axios.get('https://api.dcgen.finance/constituents');
                const sortedTokens = response.data.sort((a, b) => b['Allocation %'] - a['Allocation %']);
                setAllTokens(sortedTokens); // Store all tokens
                const topThreeTokens = sortedTokens.slice(0, 3);
                const othersPercentage = sortedTokens.slice(3).reduce((acc, token) => acc + token['Allocation %'], 0);
                const tokensWithOthers = [...topThreeTokens]; // Clone the array before pushing

                if (sortedTokens.length > 3) {
                    tokensWithOthers.push({
                        Name: 'Others',
                        'Allocation %': othersPercentage,
                        Color: '#E0E0E0',
                        logoURI: 'https://dcgen.finance/others.svg',
                    });
                }

                setTokens(tokensWithOthers);
            } catch (error) {
                console.error('Error fetching tokens:', error);
            }
        };

        fetchTokens();
    }, []);

    return (
        <VStack spacing={8} align="stretch">
            <Heading fontSize="xl" mb={4}>Asset Allocation</Heading>
            <VStack
                align="stretch"
                as="button"
                onClick={onOpen}
                cursor="pointer" // Changes cursor to pointer when hovering over the section
                borderRadius="8px"
                background={'#F7F7F7'}
                p='8'
                _focus={{ outline: "none" }} // Removes the blue outline on focus
                width={{ base: "80%", md: "60%", lg: "38%" }}
            >
                {tokens.map((token, index) => (
                    <TokenDetail
                        key={index}
                        name={token.Name}
                        image={token.logoURI}
                        color={token.Color}
                        constituency={`${token['Allocation %'].toFixed(2)}%`}
                    />
                ))}
            </VStack>
            <Modal isOpen={isOpen} onClose={onClose} isCentered size="100%">
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent width="70%" marginTop="80px" >
                    <ModalHeader fontSize={'xl'}>Asset Allocation Ethereum Governance Index</ModalHeader>
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

export default AssetAllocation;
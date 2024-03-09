import React, { useState, useEffect } from 'react';
import {
    Box, Text, Image, HStack, VStack, Heading, Divider, Flex,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody,
    useDisclosure
} from '@chakra-ui/react';
import axios from 'axios';
import PieChart from './PieChart'; // Assume this is your custom pie chart component
import ConstituentDetail from './ConstituentDetail';

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

const InfoSection = () => {
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
            <Flex gap="30%">
                <Box flex="3">
                    <PieChart tokens={tokens} />
                </Box>
                <VStack
                    flex="4.5"
                    align="stretch"
                    as="button"
                    onClick={onOpen}
                    cursor="pointer" // Changes cursor to pointer when hovering over the section
                    _hover={{ shadow: "lg" }} // Applies larger shadow on hover to indicate clickability
                    boxShadow="md" // Applies default medium shadow around the section to indicate it's clickable
                    transition="box-shadow 0.2s ease" // Smooth transition for the shadow effect
                    p={4}
                    borderRadius="20"
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
            </Flex>
            <Divider />

            <Modal isOpen={isOpen} onClose={onClose} isCentered size="100%">
                <ModalOverlay backdropFilter="blur(10px)" />
                <ModalContent width="70%">
                    <ModalHeader>Full Asset Allocation</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <VStack spacing={4}>
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

export default InfoSection;
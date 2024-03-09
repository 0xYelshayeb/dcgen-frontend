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
                    _focus={{ outline: "none" }} // Removes the blue outline on focus

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
            <Flex direction='column'>
                <Text fontSize={'2xs'}>
                    Disclaimer: This content is for informational purposes only and is not
                    legal, tax, investment, financial, or other advice. You should not take,
                    or refrain from taking, any action based on any information contained
                    herein, or any other information that we make available at any time,
                    including blog posts, data, articles, links to third-party content,
                    discord content, news feeds, tutorials, tweets, and videos. Before you
                    make any financial, legal, technical, or other decisions, you should seek
                    independent professional advice from a licensed and qualified individual
                    in the area for which such advice would be appropriate. This information
                    is not intended to be comprehensive or address all aspects of Index or its
                    products. There is additional documentation on Index's website about the
                    functioning of Index Coop, and its ecosystem and community.
                    <br />
                    <br />
                    You shall not purchase or otherwise acquire our restricted tokens if you
                    are: a citizen, resident (tax or otherwise), green card holder,
                    incorporated in, owned or controlled by a person or entity in, located in,
                    or have a registered office or principal place of business in the U.S. (a
                    “U.S. Person”), or if you are a person in any jurisdiction in which such
                    offer, sale, and/or purchase of any of our token products is unlawful,
                    prohibited, or unauthorized (together with U.S. Person, a “Restricted
                    Person”). The term “Restricted Person” includes, but is not limited to,
                    any natural person residing in, or any firm, company, partnership, trust,
                    corporation, entity, government, state or agency of a state, or any other
                    incorporated or unincorporated body or association, association or
                    partnership (whether or not having separate legal personality) that is
                    established and/or lawfully existing under the laws of, a jurisdiction in
                    which such offer, sale, and/or purchase of any of our token products is
                    unlawful, prohibited, or unauthorized). You shall not resell or otherwise
                    transfer our restricted tokens to any Restricted Person. The transfer or
                    resale of our restricted tokens to any Restricted Person is not permitted.
                </Text>
            </Flex>
        </VStack>
    );
};

export default InfoSection;
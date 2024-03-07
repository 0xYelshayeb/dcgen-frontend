import React, { useState, useEffect } from 'react';
import {
    Box,
    Text,
    Image,
    HStack,
    VStack,
    Heading,
    Divider,
    Flex
} from '@chakra-ui/react';
import axios from 'axios';
import PieChart from './PieChart'; // Assume this is your custom pie chart component

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

    useEffect(() => {
        const fetchTokens = async () => {
            try {
                const response = await axios.get('https://api.dcgen.finance/constituents');
                const sortedTokens = response.data.sort((a, b) => b['Allocation %'] - a['Allocation %']);
                const topThreeTokens = sortedTokens.slice(0, 3);
                const othersPercentage = sortedTokens.slice(3).reduce((acc, token) => acc + token['Allocation %'], 0);
                const tokensWithOthers = topThreeTokens;

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
                <VStack flex="4.5" align="stretch">
                    {tokens.map((token, index) => (
                        <TokenDetail
                            key={index}
                            name={token.Name}
                            image={token.logoURI}
                            color={token.Color}
                            constituency={`${token['Allocation %'].toFixed(2)}%`} // Accessing Allocation % with bracket notation
                        />
                    ))}
                </VStack>
            </Flex>
            <Divider />
        </VStack>
    );
};

export default InfoSection;

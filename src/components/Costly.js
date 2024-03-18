import React, { useEffect, useState } from 'react';
import {
    VStack,
    Heading,
    Text,
    Image,
    Flex,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    useColorModeValue,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { colors } from '../styles/theme';
import axios from 'axios'; // Import axios for API requests
import ChartSVG from "../images/product-chart.svg";

const MotionVStack = motion(VStack);
const MotionImage = motion(Image);

const Costly = () => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ threshold: 1 });
    const [prices, setPrices] = useState({
        bitcoin: { current: '...', diluted: '...' },
        ethereum: { current: '...', diluted: '...' },
        xrp: { current: '...', diluted: '...' }
    });
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }

        const fetchPrices = async () => {
            // Calculate years since launch for dilution calculation; replace with actual launch years
            const bitcoinYears = new Date().getFullYear() - 2009; // Replace with actual launch year
            const ethereumYears = new Date().getFullYear() - 2015; // Replace with actual launch year
            const xrpYears = new Date().getFullYear() - 2012; // Replace with actual launch year

            const ids = ['bitcoin', 'ethereum', 'ripple'];
            const years = [bitcoinYears, ethereumYears, xrpYears];
            const fetchedPrices = {};

            for (let id of ids) {
                try {
                    console.log(`https://api.dcgen.finance/coingecko/simple/price?ids=${id}&vs_currencies=usd`)
                    const response = await axios.get(`https://api.dcgen.finance/coingecko/simple/price?ids=${id}&vs_currencies=usd`);
                    console.log(`https://api.dcgen.finance/coingecko/simple/price?ids=${id}&vs_currencies=usd`)
                    const currentPrice = response.data.price;
                    // make this only show 2 decimal places
                    let dilutedPrice = currentPrice * Math.pow((1 - 0.02), years[ids.indexOf(id)]);
                    dilutedPrice = dilutedPrice.toFixed(2);
                    console.log(currentPrice);
                    fetchedPrices[id] = {
                        current: currentPrice,
                        diluted: dilutedPrice
                    };
                } catch (error) {
                    console.error(`Error fetching ${id} price:`, error);
                }
            }

            setPrices(fetchedPrices);
        };

        fetchPrices();
    }, [controls, inView]);

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

    const borderColor = useColorModeValue('gray.200', 'gray.600');


    return (
        <VStack align="left" p={{ base: 4, md: 10 }} width={{ base: "90%", md: "70%" }}>
            <Heading
                fontSize={{ base: "xl", md: "xxl" }}
                fontWeight="600"
                mb={10}
                lineHeight="shorter"
                width={{ base: "70%", md: "60%" }}
            >
                Investing Can Be Costly.
            </Heading>
            <Flex
                direction={{ base: "column", xl: "row" }}
                gap={10}
                ref={ref}
            >
                <MotionImage
                    variants={item}
                    initial="hidden"
                    animate={controls}
                    src={ChartSVG}
                    alt="Typical Fees for Financial Products"
                    width={{ base: "100%", md: "100%", xl: "70%" }}
                />
                <MotionVStack align="left" spacing={4} variants={item} initial="hidden" animate={controls}>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Silent Profit Eater</Text>
                    <Text>Hidden<Text as="span" fontWeight="bold" > streaming fees</Text> stealthily chip away at potential profits, culminating in <Text as="span" fontWeight="bold" >significant underperformance</Text> over time.</Text>
                    <Table variant="simple" size="md" bg="transparent">
                        <Thead bgColor={borderColor}>
                            <Tr bg="transparent">
                                <Th>Cryptocurrency</Th>
                                <Th>Current Value</Th>
                                <Th>2% Diluted Value</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {Object.entries(prices).map(([key, value]) => (
                                <Tr key={key}>
                                    <Td>{key.charAt(0).toUpperCase() + key.slice(1)}</Td>
                                    <Td>${new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value.current)}</Td>
                                    <Td>${new Intl.NumberFormat('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).format(value.diluted)}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                    <Text>
                        Understanding the impact: from <Text as="span" fontWeight="bold" >${prices.bitcoin.current}</Text> to <Text as="span" fontWeight="bold" >${prices.bitcoin.diluted}</Text>, every penny lost to fees is a chunk of your future eroded. Don't let the invisible drain your potential; <Text as="span" fontWeight="bold">witness the difference and act to safeguard your growth</Text>.
                    </Text>
                </MotionVStack>
            </Flex>
        </VStack>
    );
};

export default Costly;

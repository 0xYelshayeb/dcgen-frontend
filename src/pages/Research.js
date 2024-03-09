// src/pages/Research.js
import React from 'react';
import {
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Image,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import chartlines from "../images/chart-lines.svg";
import '@fortawesome/fontawesome-free/css/all.css';


import { colors } from '../styles/theme';
import { Link } from 'react-router-dom';


// Assuming you have these images in your project's public directory or imported
// import marketChartImg from '../images/market-chart.svg';

const Research = () => {
  const papers = [
    {
      topic: 'Index Methodology',
      title: 'An empirical approach and practical framework for a decentralized Ethereum Ecosystem Index (EEI)',
      description: 'This research introduces a new index for the Ethereum ecosystem, analyzing the performance differences between capitalization-weighted and equal-weighted index strategies.',
    },
    {
      topic: 'Index Optimization',
      title: 'Analyzing the Quantitative Impact of Constituent Counts and Rebalancing Intervals on Ethereum Market Index Performance Metrics.',
      description: 'This study investigates the effects of varying the number of constituents and rebalancing intervals on the performance of Ethereum market indices.',
    },
  ];

  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Layout>
      <VStack pt={15} pb={15} gap={15}>
        <VStack p={10} align="left" width="70%" gap={5}>
          <Box>
            <Heading size="lg" mb={4}>Research & Insights</Heading>
            <Text>
              Dive into the heart of crypto insights with our thorough analyses. Discover our research papers that unravel the intricacies of index construction, product performance, and the fast-changing world of the Ethereum ecosystem.
            </Text>
          </Box>

          <Table variant="simple" size="md" bg="transparent">
            <Thead bgColor={borderColor}>
              <Tr bg="transparent">
                <Th borderColor={borderColor}>Topic</Th>
                <Th borderColor={borderColor}>Title</Th>
                <Th borderColor={borderColor}>Summary</Th>
              </Tr>
            </Thead>
            <Tbody>
              {papers.map((paper, index) => (
                <Tr key={index} bg="transparent">
                  <Td borderColor={borderColor}>{paper.topic}</Td>
                  <Td borderColor={borderColor}>{paper.title}</Td>
                  <Td borderColor={borderColor}>{paper.description}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>

        </VStack>

        <Divider orientation="horizontal" />

        <VStack p={10} align="left" width="70%" gap={5}>
          <Heading size="lg" mb={4}>Market Benchmarks</Heading>
          <HStack spacing={10}>
            <VStack
              align="start"
              borderRadius="8px"
              boxShadow="0px 5px 10px rgba(0, 0, 0, 0.25)"
              width="120%"
              height="100%"
              as={Link}
              to={"/benchmark"}
              p={2}
            >
              <Image src={chartlines}></Image>
              <Divider orientation="horizontal" mb={0} pb={0} />
              <Flex justify="space-between" align="center" width="100%" p={2}>
                <Text fontWeight={'Bold'}>Ethereum Governance Index</Text>
                <span className="external-link-icon">
                  <i className="fas fa-external-link-alt"></i>
                </span>
              </Flex>
            </VStack>
            <VStack align="start" gap={7}>
              <VStack align="start" gap={3}>
                <Text fontWeight="bold" color={colors.gray_content}>Summary</Text>
                <Text>The Ethereum Governance Index by DCgen is a market-capitalization weighted benchmark tracking the top thirty governance tokens on Ethereum, offering a dynamic measure of this segment's performance.</Text>
              </VStack>
              <VStack width="50%" align="start" gap={3}>
                <Text fontWeight="bold" color={colors.gray_content}>Index Level</Text>
                <HStack width="100%" justify="space-between">
                  <Box>
                    <Text fontWeight="bold" fontSize="xl">$ 142.56</Text>
                    <Text fontWeight="bold" color={colors.gray_content}>NAV</Text>
                  </Box>
                  <Box>
                    <Text color="green.500" fontWeight="bold" fontSize="xl">32.63%</Text>
                    <Text fontWeight="bold" color={colors.gray_content}>1M Change</Text>
                  </Box>
                </HStack>
              </VStack>
              <VStack align="start" gap={3}>
                <Text fontWeight="bold" color={colors.gray_content} m={0}>Weighting Method</Text>
                <Text fontWeight="bold" fontSize="xl" m={0}>capitalization-weighted</Text>
              </VStack>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </Layout >
  );
};

export default Research;

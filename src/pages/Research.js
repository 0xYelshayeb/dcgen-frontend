// src/pages/Research.js
import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  SimpleGrid,
  Image,
  useColorModeValue,
} from '@chakra-ui/react';
import Layout from '../components/Layout';

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

          <Table variant="simple" colorScheme="transparent" size="md">
            <Thead bgColor={borderColor}>
              <Tr>
                <Th borderColor={borderColor}>Topic</Th>
                <Th borderColor={borderColor}>Title</Th>
                <Th borderColor={borderColor}>Summary</Th>
              </Tr>
            </Thead>
            <Tbody>
              {papers.map((paper, index) => (
                <Tr key={index}>
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
          <Box>
            <Heading size="lg" mb={4}>Market Benchmarks</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <Image src="" alt="Market Benchmark Chart" />
              <VStack align="start">
                <Text fontWeight="bold">Summary</Text>
                <Text>The Ethereum Governance Index by DCgen is a market-capitalization weighted benchmark tracking the top thirty governance tokens on Ethereum, offering a dynamic measure of this segment's performance.</Text>
                <Box>
                  <Text fontWeight="bold">Index Level</Text>
                  <Text>$ 142.56</Text>
                </Box>
                <Box>
                  <Text fontWeight="bold">1M Change</Text>
                  <Text color="green.500">32.63%</Text>
                </Box>
                <Text fontWeight="bold">Weighting Method</Text>
                <Text>capitalization-weighted</Text>
                {/* <Link href="#" isExternal>
                More details <ExternalLinkIcon mx="2px" />
              </Link> */}
              </VStack>
            </SimpleGrid>
          </Box>
        </VStack>
      </VStack>
    </Layout >
  );
};

export default Research;

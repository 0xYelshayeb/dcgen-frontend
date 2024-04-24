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
  Flex,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import '../styles/MingCute.css';
import '../styles/index.css';

const MotionBox = motion(Box);


const popAnimationVariants = {
  initial: { scale: 0.2 },
  animate: { scale: 1 },
  hover: {
    scale: 1.03,
        transition: {
          type: "tween",
          ease: "easeInOut",
          duration: 0.2
        },
  }
};

const Research = () => {
  const papers = [
    {
      topic: 'Index Construction',
      title: 'CRIX an Index for cryptocurrencies',
      description: 'The study proposes a dynamic index construction method that adapts to the rapidly changing cryptocurrency market, offering a statistically robust model for evaluating market performance and guiding investment decisions.',
      url: 'https://www.sciencedirect.com/science/article/pii/S0927539818300616?casa_token=IQAHT5L89xUAAAAA:WWWgU74DzEr4EdDtx-ABLJyePYyADhPCG7O5hA4hRSBIthj09IbHphXm6RbWbCnWcdCdZj5CvQ'
    },
    {
      topic: 'Index Methodology',
      title: 'An empirical approach and practical framework for a decentralized Ethereum Ecosystem Index (EEI)',
      description: 'This research introduces a new index for the Ethereum ecosystem, analyzing the performance differences between capitalization-weighted and equal-weighted index strategies.',
      url: 'https://peerj.com/articles/cs-1766/'
    },
    {
      topic: 'Index Methodology',
      title: 'Analyzing the Quantitative Impact of Constituent Counts and Rebalancing Intervals on Ethereum Market Index Performance Metrics.',
      description: 'This study investigates the effects of varying the number of constituents and rebalancing intervals on the performance of Ethereum market indices.',
      url: 'https://drive.google.com/file/d/12ChszVtNeKSvjWNOAFy13pbuf-BLKr8E/view?usp=sharing'
    },
    {
      topic: 'Index Evaluation',
      title: 'Indices on cryptocurrencies: an evaluation',
      description: 'The study investigates the dynamics of various cryptocurrency indices, revealing that simple market cap-weighted indices are generally more effective than others at tracking the fast-evolving sector.',
      url: 'https://link.springer.com/article/10.1007/s42521-022-00048-8'
    },
  ];


  return (
    <Layout>
      <VStack pt={15} pb={300} gap={100}>
        
        
        {/* DCgen Indices Section */}
        <VStack p={10} align="left" width={{ base: "100%", lg: "70%" }} gap={0}>
          <Heading 
            fontSize="xxl" 
            mb={4}
            >
             Our Indices
          </Heading>
          <Text fontSize="lg" mb={'60px'}>
            Explore our diverse range of cryptocurrency indices, meticulously crafted to offer strategic insights and a thorough overview of market dynamics within the crypto ecosystem. We construct these indices to be transparent and accessible, allowing any market participant to track them freely.
          </Text>
          
          {/* Flex container for the boxes */}
          <Flex 
            direction={{ base: "column", md: "row" }} 
            width="100%" 
            justify="space-between" 
            align="flex-start" 
            gap={{ base: 5, md: 2 }}
          >
            {/* First box */}
            <MotionBox
              to="/benchmark"
              as={Link}
              whileHover="hover"
              variants={popAnimationVariants}
              initial="initial"
              animate="animate"
              p={4}
              bg="#050A30"
              color="white"
              borderRadius="8px"
              width={{ base: "100%", md: "30%" }} // 30% width on medium screens and above, 100% on base
              height='200px'
              textAlign="left"
              display="flex"
              alignItems="flex-end"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight={{ base: "normal", md: "semibold" }}
              style={{ color: 'white' }}
              flexDirection="column" // Arrange children vertically
              justifyContent="space-between" // Align children along the vertical axis
            >
              <Box
                as="span"
                style={{
                  alignSelf: 'flex-end',
                  marginRight: 4,
                  marginTop: 4
                }}
                className="mgc_ethereum_fill icon-box"
              />
              <Box
                alignSelf="flex-start" // Align this child to the start of the row
              >
                Ethereum Governance Index
              </Box>            
            </MotionBox>

            {/* Second box */}
            <MotionBox
              to=""
              as={Link}
              whileHover="hover"
              variants={popAnimationVariants}
              initial="initial"
              animate="animate"
              p={4}
              bg="rgba(5, 10, 48, 0.5)"
              color="white"
              borderRadius="8px"
              width={{ base: "100%", md: "30%" }} // 30% width on medium screens and above, 100% on base
              height='200px'
              textAlign="left"
              display="flex"
              alignItems="flex-end"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight={{ base: "normal", md: "semibold" }}
              style={{ color: 'white' }}
              flexDirection="column" // Arrange children vertically
              justifyContent="space-between" // Align children along the vertical axis
            >
              <Box
                as="span"
                style={{
                  alignSelf: 'flex-end',
                  marginRight: 4,
                  marginTop: 4
                }}
                className="mgc_question_fill icon-box"
              />
              <Box
                alignSelf="flex-start" // Align this child to the start of the row
              >
                Coming Soon
              </Box>            
            </MotionBox>

            {/* Third box */}
            <MotionBox
              to=""
              as={Link}
              whileHover="hover"
              variants={popAnimationVariants}
              initial="initial"
              animate="animate"
              p={4}
              bg="rgba(5, 10, 48, 0.5)"
              color="white"
              borderRadius="8px"
              width={{ base: "100%", md: "30%" }} // 30% width on medium screens and above, 100% on base
              height='200px'
              textAlign="left"
              display="flex"
              alignItems="flex-end"
              fontSize={{ base: "sm", md: "md" }}
              fontWeight={{ base: "normal", md: "semibold" }}
              style={{ color: 'white' }}
              flexDirection="column" // Arrange children vertically
              justifyContent="space-between" // Align children along the vertical axis
            >
              <Box
                as="span"
                style={{
                  alignSelf: 'flex-end',
                  marginRight: 4,
                  marginTop: 4
                }}
                className="mgc_question_fill icon-box"
              />
              <Box
                alignSelf="flex-start" // Align this child to the start of the row
              >
                Coming Soon
              </Box>            
            </MotionBox>
          </Flex>
        </VStack>



        {/* Research & Insights Section */}
        <VStack p={10} align="left" width={{ base: "100%", lg: "70%" }} gap={5}>
            <Box pb='10'>
              <Heading fontSize="xxl" mb={4}>Research & Insights</Heading>
              <Text fontSize="lg" >
                Access comprehensive research that underpins the development of innovative cryptocurrency index strategies, enhancing understanding in constructing these indices—from their conception through methodology to evaluation.
              </Text>
            </Box>
            <Table variant="simple" size="md" style={{ borderCollapse: 'collapse', border: 'none' }}>
                <Thead>
                    <Tr style={{ borderTop: '2px solid #EEEEEE', borderBottom: '2px solid #EEEEEE' }} bg='white'>
                        <Th px={{ base: 1, md: 3 }} fontSize="12px" color="#757575" style={{ border: 'none' }}>Topic</Th>
                        <Th px={{ base: 1, md: 3 }} fontSize="12px" color="#757575" style={{ border: 'none' }}>Title</Th>
                        <Th px={{ base: 1, md: 3 }} fontSize="12px" color="#757575" style={{ border: 'none' }}>Summary</Th>
                    </Tr>
                </Thead>
                <Tbody bg='white'>
                    {papers.map((paper, index) => (
                        <Tr style={{ borderTop: '2px solid #EEEEEE', borderBottom: '2px solid #EEEEEE' }} key={index} > 
                            <Td px={{ base: 1, md: 3 }} fontSize={{ base: "sm", md: "md" }} style={{ border: 'none' }}>{paper.topic}</Td>
                            <Td px={{ base: 1, md: 3 }} fontSize={{ base: "sm", md: "md" }} style={{ border: 'none' }}>
                                <a href={paper.url} style={{ color: 'black', textDecoration: 'underline black', fontWeight:'semibold' }}>{paper.title}</a> 
                            </Td>
                            <Td px={{ base: 1, md: 3 }} fontSize={{ base: "sm", md: "md" }} style={{ border: 'none' }}>{paper.description}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
          </VStack>


      </VStack>
    </Layout>
  );
};

export default Research;
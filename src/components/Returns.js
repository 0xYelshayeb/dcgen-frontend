import React from 'react';
import { VStack, Heading, Text, Grid, GridItem, Box, useBreakpointValue } from '@chakra-ui/react';
import { colors } from '../styles/theme';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LabelList, Tooltip } from 'recharts';
import arrowHanddrawn from '../icons/arrow_handdrawn.png';

const MotionVStack = motion(VStack);
const MotionBox = motion(Box);

const data = [
    { name: 'Active Funds', Fees: 1.5 },
    { name: 'Crypto Indexes', Fees: 0.95 },
    { name: 'Robo Advisors', Fees: 0.75 },
    { name: 'ETFs', Fees: 0.45 },
    { name: 'DCgen', Fees: 0.0 },
];

const CustomLabel = (props) => {
    const { x, y, width, value, index } = props;
    const isDCgen = data[index].name === 'DCgen';

    return (
        <motion.text 
            x={x + width / 2} 
            y={y - 8} 
            fill={isDCgen ? colors.t2Blue : '#757575'} 
            fontSize={isDCgen ? 24 : 16} 
            fontWeight="bold" 
            textAnchor="middle" 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
        >
            {value !== 0 ? `${value}%` : isDCgen ? '0%' : ''}
        </motion.text>
    );
};

const glowAnimation = {
    initial: { 
        filter: "drop-shadow(0 0 8px rgba(0,0,0,0.2))"  // Subtle shadow for a glowing effect
    },
    hover: { 
        rotate: [0, 5, -5, 0],  // Rotate slightly on hover
        transition: {
            duration: 0.5,  // Half-second rotation
            yoyo: Infinity,  // Goes back and forth
        }
    }
};


const Returns = () => {
    const gap = useBreakpointValue({ base: 5, md: 10, lg: 100 });

    return (
        <VStack align="left" p={{ base: 4, md: 8, lg: 10 }} width={{ base: "90%", md: "70%" }}>
            <Heading
                fontSize={{ base: "xl", md: "xxl" }}
                fontWeight="600"
                mb={10}
                lineHeight="medium"
                width="75%"
            >
                Maximize Your Returns with DCgen's Diverse Offer of Products.
            </Heading>
            <Grid templateColumns={{ xl: "repeat(2, 1fr)" }} gap={gap} width="full">
                <GridItem>
                    <Heading fontSize="lg" mb={5}>
                        Typical Fees for Financial Products
                    </Heading>
                    <div style={{ position: 'relative' }}>
                        <ResponsiveContainer width="100%" height={310}>
                            <BarChart 
                                data={data} 
                                margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                            >
                                <XAxis 
                                    dataKey="name" 
                                    stroke={colors.gray[400]} 
                                    interval={0} 
                                    angle={-45} 
                                    textAnchor="end" 
                                    height={60}                             
                                    tickFormatter={(value) => value}
                                    tickLine={false}
                                    axisLine={false}
                                    tick={props => {
                                        const { x, y, payload } = props;
                                        const isDCgen = payload.value === 'DCgen';
                                        return (
                                            <g transform={`translate(${x},${y})`}>
                                                <text
                                                    x={0}
                                                    y={0}
                                                    dy={16}
                                                    fill={isDCgen ? colors.t2Blue : '#666'}
                                                    textAnchor="end"
                                                    transform="rotate(-45)"
                                                    fontSize={isDCgen ? 20 : 14}
                                                    fontWeight={isDCgen ? 'bold' : 'normal'}                                        >
                                                    {payload.value}
                                                </text>
                                            </g>
                                        );
                                    }}
                                />
                                <YAxis domain={[0, 'dataMax + 0.1']} hide={true} />
                                <Bar dataKey="Fees" fill="#D0D2D4" radius={[10, 10, 0, 0]}>
                                    <LabelList dataKey="Fees" content={<CustomLabel />} />
                                </Bar>
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '12px', fontWeight:'semibold' }}
                                    labelStyle={{ color: 'black' }}
                                    itemStyle={{ color: 'black' }}
                                    content={({ active, payload, label }) => {
                                        if (active && payload && payload.length) {
                                            return (
                                                <div style={{ backgroundColor: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '12px', fontWeight:'semibold', color: 'black' }}>
                                                    <p>{`${label}`}</p>
                                                    <p>{`Fees: ${payload[0].value}%`}</p>
                                                </div>
                                            );
                                        }

                                        return null;
                                    }}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                        <MotionBox 
                            position="absolute" 
                            right="-7%" 
                            bottom="45%" 
                            zIndex={2} 
                            variants={glowAnimation}
                            initial="initial"
                            whileHover="hover"
                            >
                                <img src={arrowHanddrawn} alt="Arrow pointing at DCgen" style={{ width: '120px', height: 'auto' }} />
                        </MotionBox>
                    </div>
                </GridItem>
                <GridItem>
                    <MotionVStack align="left" spacing={10} initial="hidden" width="100%">
                        <VStack align="left" spacing={2}>
                            <Text fontSize="md" fontWeight="bold" color={colors.t2Blue}>A Commitment to Zero fees</Text>
                            <Text fontSize="lg">
                                DCgen offers universally free products to maximise your returns in the long run. With our infrastructure we enter a new era for financial products.
                            </Text>
                        </VStack>
                        <VStack align="left" spacing={2}>
                            <Text fontSize="md" fontWeight="bold" color={colors.t2Blue}>The Strategic Edge of Rebalancing</Text>
                            <Text fontSize="lg">
                                DCgen's products leverage research-backed strategies that dynamically recalibrate to market conditions through rebalancing procedures.
                            </Text>
                        </VStack>
                    </MotionVStack>
                </GridItem>
            </Grid>
        </VStack>
    );
};

export default Returns;
import React from 'react';
import { 
    VStack, 
    Heading, 
    Text, 
    Flex, 
    useBreakpointValue 
} from '@chakra-ui/react';
import { colors } from '../styles/theme';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from 'recharts';

const MotionVStack = motion(VStack);

const data = [
    { name: 'Active Funds', Fees: 1.5 },
    { name: 'Crypto Indexes', Fees: 0.95 },
    { name: 'Robo Advisors', Fees: 0.75 },
    { name: 'ETFs', Fees: 0.45 },
    { name: 'DCgen', Fees: 0.00 },
];

const CustomLabel = (props) => {
    const { x, y, width, value, dataKey, index } = props;
    const isDCgen = data[index].name === 'DCgen';

    return (
        <motion.text 
            x={x + width / 2} 
            y={y - 8} 
            fill={isDCgen ? colors.t2Blue : '#757575'} 
            fontSize="18" 
            fontWeight="bold" 
            textAnchor="middle" 
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
        >
            {value !== 0 ? `${value}%` : isDCgen ? '0%' : ''}
        </motion.text>
    );
};

const Returns = () => {
    const gap = useBreakpointValue({ base: 5, md: 10, lg: 100 });

    return (
        <VStack align="left" p={{ base: 4, md: 8, lg: 10 }} width={{ base: "90%", md: "70%" }}>
            <Heading
                fontSize={{ base: "xl", md: "xxl" }}
                fontWeight="600"
                mb={5}
                lineHeight="shorter"
                width="75%"
            >
                Maximize Your Returns with DCgen's Diverse Offer of Products.
            </Heading>
            <Heading
                fontSize="lg"
                mb={5}
                width="100%"
            >
                Typical Fees for Financial Products
            </Heading>
            <Flex direction={{ base: 'column', xl: 'row' }} gap={gap} align="left">
                <ResponsiveContainer width="100%" height={350}>
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
                            tick={{ fontSize: 12 }} 
                            tickFormatter={(value) => value === 'DCgen' ? 'DCgen' : value }
                        />
                        <YAxis domain={[0, 1.8]} hide={true} />
                        <Bar dataKey="Fees" radius={[10, 10, 0, 0]}>
                            <LabelList dataKey="Fees" content={<CustomLabel />} />
                            {
                                data.map((entry, index) => (
                                    <Cell 
                                        key={`cell-${index}`} 
                                        fill={entry.name === 'DCgen' ? colors.t2Blue : '#D0D2D4'}
                                    />
                                ))
                            }
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
                <MotionVStack align="left" spacing={4} initial="hidden">
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>A Commitment to Zero fees</Text>
                    <Text>
                        DCgen offers universally free products to maximise your returns in the long run. With our infrastructure we enter a new era for financial products.
                    </Text>
                    <Text fontSize="lg" fontWeight="bold" color={colors.t2Blue}>The Strategic Edge of Rebalancing</Text>
                    <Text>
                        DCgen's products leverage research-backed strategies that dynamically recalibrate to market conditions through rebalancing procedures.
                    </Text>
                </MotionVStack>
            </Flex>
        </VStack>
    );
};

export default Returns;

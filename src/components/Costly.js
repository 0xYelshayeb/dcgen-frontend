import React from 'react';
import { VStack, Heading, Text, Grid, GridItem, useBreakpointValue } from '@chakra-ui/react';
import { colors } from '../styles/theme';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Label, Legend, Tooltip } from 'recharts';

const MotionVStack = motion(VStack);

// Sample data for the line chart based on the provided image.
const lineData = [
    { year: 0, zeroFees: 100, onePercentFees: 100, twoPercentFees: 100 },
    { year: 1, zeroFees: 107.0, onePercentFees: 105.93, twoPercentFees: 104.86 },
    { year: 2, zeroFees: 114.49, onePercentFees: 112.21, twoPercentFees: 109.96 },
    { year: 3, zeroFees: 122.5, onePercentFees: 118.87, twoPercentFees: 115.3 },
    { year: 4, zeroFees: 131.08, onePercentFees: 125.91, twoPercentFees: 120.9 },
    { year: 5, zeroFees: 140.26, onePercentFees: 133.38, twoPercentFees: 126.78 },
    { year: 6, zeroFees: 150.07, onePercentFees: 141.29, twoPercentFees: 132.94 },
    { year: 7, zeroFees: 160.58, onePercentFees: 149.67, twoPercentFees: 139.4 },
    { year: 8, zeroFees: 171.82, onePercentFees: 158.54, twoPercentFees: 146.18 },
    { year: 9, zeroFees: 183.85, onePercentFees: 167.95, twoPercentFees: 153.28 },
    { year: 10, zeroFees: 196.72, onePercentFees: 177.91, twoPercentFees: 160.73 },
    { year: 11, zeroFees: 210.49, onePercentFees: 188.46, twoPercentFees: 168.54 },
    { year: 12, zeroFees: 225.22, onePercentFees: 199.63, twoPercentFees: 176.73 },
    { year: 13, zeroFees: 240.98, onePercentFees: 211.47, twoPercentFees: 185.32 },
    { year: 14, zeroFees: 257.85, onePercentFees: 224.01, twoPercentFees: 194.33 },
    { year: 15, zeroFees: 275.9, onePercentFees: 237.29, twoPercentFees: 203.77 },
    { year: 16, zeroFees: 295.22, onePercentFees: 251.36, twoPercentFees: 213.68 },
    { year: 17, zeroFees: 315.88, onePercentFees: 266.27, twoPercentFees: 224.06 },
    { year: 18, zeroFees: 337.99, onePercentFees: 282.06, twoPercentFees: 234.95 },
    { year: 19, zeroFees: 361.65, onePercentFees: 298.79, twoPercentFees: 246.37 },
    { year: 20, zeroFees: 386.97, onePercentFees: 316.5, twoPercentFees: 258.34 },
    { year: 21, zeroFees: 414.06, onePercentFees: 335.27, twoPercentFees: 270.9 },
    { year: 22, zeroFees: 443.04, onePercentFees: 355.15, twoPercentFees: 284.06 },
    { year: 23, zeroFees: 474.05, onePercentFees: 376.22, twoPercentFees: 297.87 },
    { year: 24, zeroFees: 507.24, onePercentFees: 398.52, twoPercentFees: 312.35 },
    { year: 25, zeroFees: 542.74, onePercentFees: 422.16, twoPercentFees: 327.53 },
    { year: 26, zeroFees: 580.74, onePercentFees: 447.19, twoPercentFees: 343.44 },
    { year: 27, zeroFees: 621.39, onePercentFees: 473.71, twoPercentFees: 360.14 },
    { year: 28, zeroFees: 664.88, onePercentFees: 501.8, twoPercentFees: 377.64 },
    { year: 29, zeroFees: 711.43, onePercentFees: 531.56, twoPercentFees: 395.99 },
    { year: 30, zeroFees: 761.23, onePercentFees: 563.08, twoPercentFees: 415.24 }
];

const renderLegend = (props) => {
    const { payload } = props;
    return (
        <ul style={{ listStyleType: 'none' }}>
            {payload.map((entry, index) => (
                <li key={`item-${index}`} style={{ color: entry.color, fontSize: '10px', fontWeight:'semibold'}}>
                    <span style={{ display: 'inline-block', marginRight: '4px', marginBottom: '2px',width: '20px', borderBottom: `2px solid ${entry.color}` }}></span>
                    {entry.value}
                </li>
            ))}
        </ul>
    );
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ backgroundColor: 'white', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '12px', fontWeight:'semibold' }}>
                <p style={{ color: 'black' }}>{`Year ${label}`}</p>
                <p style={{ color: colors.t2Blue }}>{`0% Fees: ${payload[2].value}`}</p>
                <p style={{ color: '#FFC043' }}>{`1% Fees: ${payload[1].value}`}</p>
                <p style={{ color: '#E11900' }}>{`2% Fees: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
}

const InvestmentGrowth = () => {
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
                Investing Can Be Costly.
            </Heading>
            <Grid templateColumns={{ xl: "repeat(2, 1fr)" }} gap={gap} width="full">
                <GridItem width={{ base: "100%", md: "110%" }} >
                    <Heading fontSize="md" mb={5} width="95%" lineHeight={6} >
                        The Compounding Advantage of Zero Fees
                    </Heading>
                    <ResponsiveContainer width="100%" height={320}>
                        <LineChart data={lineData} margin={{ top: 4, right: 4, bottom: 16, left: 4 }}>
                            <CartesianGrid horizontal={true} vertical={false} stroke="#EEEEEE" />
                            <XAxis dataKey="year" interval={Math.floor(lineData.length / 5)} stroke="#EEEEEE" tick={{ fill: '#757575', fontSize: 10 }} tickLine={false}>
                                <Label value="Year" offset={0} position="insideBottom" fill="#757575" fontSize={10} />
                            </XAxis>
                            <YAxis orientation="right" axisLine={false} stroke="#EEEEEE" tick={{ fill: '#757575', fontSize: 10 }} tickLine={false}>
                                <Label value="Value in $" angle={-90} position="insideRight" dy={-25} dx={-15} fill="#757575" fontSize={10} />
                            </YAxis>
                            <Line type="monotone" dataKey="twoPercentFees" stroke="#E11900" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="onePercentFees" stroke="#FFC043" strokeWidth={2} dot={false} />
                            <Line type="monotone" dataKey="zeroFees" stroke={colors.t2Blue} strokeWidth={3} dot={false} />
                            <Legend content={renderLegend} layout="vertical" wrapperStyle={{ top: 0, left: 0 }} payload={[
                                { value: '0% Fees', type: 'line', id: 'zeroFees', color: colors.t2Blue },
                                { value: '1% Fees', type: 'line', id: 'onePercentFees', color: '#FFC043' },
                                { value: '2% Fees', type: 'line', id: 'twoPercentFees', color: '#E11900' },
                            ]} />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'lightgray', strokeWidth: 2 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </GridItem>
                <GridItem marginLeft={{ base: "0", md: "0%" }}>
                    <MotionVStack align="left" spacing={14} initial="hidden" width="100%">
                        <VStack align="left" spacing={2}>
                            <Text fontSize="md" fontWeight="bold" color={colors.t2Blue}>The Silent Profit Eater</Text>
                            <Text fontSize="lg" >
                            Hidden fees stealthily chip away at potential profits, culminating in significant underperformance over time.
                            </Text>
                        </VStack>
                        <VStack align="left" spacing={2}>
                            <Text fontSize="md" fontWeight="bold" color={colors.t2Blue}>The Deferred Shock of Fees</Text>
                            <Text fontSize="lg">
                            The true magnitude of fees emerges over time, as the compounding effect escalates their impact, silently but substantially reducing long-term investment gains.
                            </Text>
                        </VStack>
                    </MotionVStack>
                </GridItem>
            </Grid>
        </VStack>
    );
};

export default InvestmentGrowth;
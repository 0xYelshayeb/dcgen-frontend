import React, { useState, useEffect } from 'react';
import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import dcgen_blue from "../icons/DCgen_blue.svg";
import dcgen_black from "../icons/DCgen_black.svg";

const MotionImg = motion.img; // Directly use motion with the img tag

const CallToAction = () => {
    const [icon, setIcon] = useState(dcgen_blue);

    const controls = useAnimation();

    // Motion variants for the animations
    const variants = {
        wiggle: {
            y: [0, -5, 5, -5, 0],
            transition: { duration: 0.3 }
        },
        change: {
            opacity: 0,
            transition: { duration: 0.1 }
        },
        visible: {
            opacity: 1,
            transition: { duration: 0.2 }
        }
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            controls.start("wiggle").then(() => {
                // After the wiggle, start the change animation
                controls.start("change").then(() => {
                    // Change the icon after the fade out
                    setIcon(currentIcon => currentIcon === dcgen_blue ? dcgen_black : dcgen_blue);
                    // Fade back in with the new icon
                    controls.start("visible");
                });
            });
        }, 3000); // Change icon every 3 seconds

        return () => clearInterval(intervalId);
    }, [controls]);

    return (
        <VStack align="center" p={10}>
            <Heading
                fontSize={{ base: "xl", md: "xxl", lg: "xxxl" }} // Responsive font sizes
                width={{ base: "90%", sm: "85%", md: "70%" }} // Responsive widths
                textAlign="center"
                marginBottom={7}
            >
                Grow Your Portfolio with{" "}
                <MotionImg
                    src={icon}
                    alt="DCgen"
                    variants={variants}
                    animate={controls}
                    style={{
                        display: 'inline-block',
                        verticalAlign: 'bottom',
                        height: '1em',
                    }}
                />
                {" "}Products.
            </Heading>
            <Text
                fontSize={{ base: "l", md: "xl" }} // Responsive font sizes
                fontWeight="600"
                marginBottom={5}
                width={{ base: "95%", sm: "85%", md: "40%" }} // Responsive widths
                textAlign={'center'}
                lineHeight="tall"
            >
                Seize Market Alpha with DCgen's Fee-Free Structured Products.
            </Text>
            <Button
                as="a"
                href="https://app.dcgen.finance/swap"
                target="_blank"
                rel="noopener noreferrer"
                size={{ base: "sm", md: "lg" }} // Responsive button sizes
                _hover={{
                    bg: 'brand.600',
                    transform: 'scale(1.05)'
                }}
            >
                Invest Now
            </Button>
        </VStack>
    );
};

export default CallToAction;

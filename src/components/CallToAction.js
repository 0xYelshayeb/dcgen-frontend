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
            <Heading fontSize="xxxl" width="70%" textAlign="center" marginBottom={7}>
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
            <Text fontSize="xl" fontWeight="600" marginBottom={5} width="40%" textAlign={'center'} lineHeight="xl">
                Unlock Genuine Alpha with DCgen's Structured Products.
            </Text>
            <Button>Invest Now</Button>
        </VStack>
    );
};

export default CallToAction;

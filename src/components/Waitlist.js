// src/components/Information.js
import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';

import {
    VStack,
    Heading,
    Text,
    Box,
    Input,
    Button
} from '@chakra-ui/react';

const Information = () => {

    const [email, setEmail] = useState("");
    const [response, setResponse] = useState({ status: null, message: null });
    const [isValid, setIsValid] = useState(false);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value));
        setResponse({ status: null, message: null })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isValid) {
            try {
                const response = await axios.post('https://api.dcgen.finance/joinWaitlist', { email });
                setResponse({ status: "success", message: response.data })
            } catch (err) {
                setResponse({ status: "error", message: null })
                if (err.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    setResponse({ message: err.response.data })
                } else if (err.request) {
                    // The request was made but no response was received
                    setResponse({ message: "No response from server" })
                } else {
                    // Something happened in setting up the request that triggered an Error
                    setResponse({ message: "An error occurred" })
                }
            }
        }
        else {
            setResponse({ status: "error", message: "Please input a valid email address" })
        }
    };

    return (

        <VStack align="left" p={{ base: 4, md: 10 }} width={{ base: "90%", lg: "70%" }}>
            <Heading fontSize={{ base: "xl", md: "xxl" }} fontWeight="600" mb={3} width={{ base: "90%", lg: "60%" }}>
                Join Us On Building A New Financial System.
            </Heading>
            <Text pb={4}>Stay updated on the latest news, products and research. We will keep you posted with our latest suite of products and solutions.</Text>
            <Box display="flex" alignItems="center" borderRadius="10px" p="2" width={{ base: "100%", md: "400px" }} bg="#F7F7F7">
                <Input
                    type="text"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Email"
                    borderRadius="4px" // Rounded corners on the left side
                    border="none"
                    boxShadow="none"
                    _focus={{
                        boxShadow: 'none', // Removes the default focus outline
                    }}
                />
                <Button
                    onClick={handleSubmit}
                    borderRadius="7px" // Rounded corners on the right side
                    px="8" // Padding left and right
                >
                    Stay Updated
                </Button>
            </Box>
            {response.message !== null && (
                <p id="response-message">
                    {response.message}
                </p>
            )}
        </VStack>
    );
};

export default Information;

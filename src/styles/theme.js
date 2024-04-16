import { extendTheme } from '@chakra-ui/react';

import '@fortawesome/fontawesome-free/css/all.css';

const colors = {
    t2Blue: "#3751FF",
    t1Blue: "#050A30",
    gray: "#FCFCFC",
    gray_content: "#757575"
}

// 3. Customize the theme
const theme = extendTheme({
    colors: {
        brand: {
            500: colors.t2Blue,
            600: "#1530EE",
            900: colors.t1Blue,
        },
    },
    fonts: {
        heading: 'Your Custom Font, sans-serif', // Replace with your actual font family
        body: 'Your Custom Font, sans-serif', // Replace with your actual font family
    },
    fontSizes: {
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '24px',
        xxl: '32px',
        xxxl: '64px',
    },
    lineHeights: {
        sm: '20px',
        md: '24px',
        lg: '26px',
        xl: '32px',
        xxl: '40px',
        xxxl: '70px',
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'semibold',
                borderRadius: '8px',
            },
            defaultProps: {
                colorScheme: 'brand',
            },
            sizes: {
                md: {
                    fontSize: 'md',
                    padding: '12px 24px',
                },
            },
            variants: {
                solid: {
                    _hover: {
                        bg: 'brand.600', // assuming 'brand.600' is defined in your theme
                    },
                },
            },
        },
    },
    styles: {
        global: {
            'html, body': {
                color: 'black',
            },
        },
    },
});

export default theme;
export { colors };

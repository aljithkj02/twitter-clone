import { Box, Image } from '@chakra-ui/react';
import React from 'react';

const NotFound = () => {
    return (
        <Box w="100%" h="100vh">
            <Image src="https://th.bing.com/th?id=OIP.CN0zAYnSVuCX8ZyfD31jBwHaFw&w=283&h=220&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="Not found"
                w="full" h="full"
            />
        </Box>
    )
}

export default NotFound;

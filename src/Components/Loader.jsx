import { Box, Spinner } from '@chakra-ui/react'
import React from 'react'

const Loader = () => {
    return (
        <Box position="fixed" top="0" left="0" display="flex" w="full" h="full"
            justifyContent="center" alignItems="center" zIndex={5}
            bg="rgba(0, 0, 0, 0.2)"
        >
            <Spinner
                thickness='5px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Box>
    )
}

export default Loader

import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
        <Box position="fixed" w="full" zIndex={4}>
            <nav>
                <Box display="flex" justifyContent="space-between"
                    bgColor="black" color="white" px={10} py={5}
                >
                    <Box>
                        <Text>Twitter</Text>
                    </Box>
                    <Box>
                        <Text>Login</Text>
                    </Box>
                </Box>
            </nav >
        </Box>
    )
}

export default Navbar

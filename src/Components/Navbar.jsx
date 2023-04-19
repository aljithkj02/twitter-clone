import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
    return (
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
    )
}

export default Navbar

import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <Box display={['none', 'none', 'flex']}
            flexDir="column" justifyContent="space-between"
            py={6}
        >
            <Box display="flex" flexDir="column" gap={4}>
                <Link to="/">
                    <Text fontSize="1.5rem" fontWeight="500">Home</Text>
                </Link>
                <Link to="/">
                    <Text fontSize="1.5rem" fontWeight="500">My Tweets</Text>
                </Link>
            </Box>
            <Box>
                <Text fontSize="1.5rem" fontWeight="500"
                    cursor="pointer"
                >Logout</Text>
            </Box>
        </Box>
    )
}

export default SideBar

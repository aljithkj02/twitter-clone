import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const IndividualTweet = ({ tweet, author }) => {
    return (
        <Box m={4} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p={6}
            borderRadius={6}
        >
            <Box display="flex" alignItems="center" gap={4}>

                <Box w={10} borderRadius="50%">
                    <Image src="https://www.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="profile"
                    />
                </Box>
                <Text fontSize="16px">{author.username}</Text>
            </Box>
            <Box pl={14} py={2}>
                <Text fontSize="20px">{tweet}</Text>
            </Box>
        </Box>
    )
}

export default IndividualTweet

import { Box, Button, Image, Text } from '@chakra-ui/react'
import moment from 'moment'
import React from 'react'

const IndividualTweet = ({ tweet, author, createdAt, handleDelete, id }) => {
    const deletePost = () => {
        handleDelete(id);
    }
    return (
        <Box m={4} boxShadow="rgba(0, 0, 0, 0.2) 0px 5px 10px" p={6}
            borderRadius={6} cursor="pointer" transition=".2s ease" bg="#C7E7F6"
            _hover={{ boxShadow: "rgba(0, 0, 0, 0.4) 0px 5px 15px" }}
        >
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={3}>
                    <Box w={10} borderRadius="50%">
                        <Image src="https://www.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="profile"
                        />
                    </Box>
                    <Text fontSize="17px" fontWeight="bold">{author.username}</Text>
                    <Text fontSize="15px" color="gray.500">{moment(createdAt).fromNow()}</Text>
                </Box>
                {handleDelete && <Box>
                    <Button colorScheme="red" size="sm"
                        onClick={deletePost}
                    >
                        Delete
                    </Button>
                </Box>}
            </Box>
            <Box pl={14} py={2}>
                <Text fontSize="20px">{tweet}</Text>
            </Box>
        </Box>
    )
}

export default IndividualTweet

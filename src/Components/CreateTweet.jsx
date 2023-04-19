import { Box, Button, Image, Input } from '@chakra-ui/react';
import React, { useState } from 'react';

const CreateTweet = () => {
    const [tweet, setTweet] = useState('');
    const handleTweet = (e) => {
        setTweet(e.target.value);
    }

    const postTweet = () => {
        console.log(tweet);
    }
    return (
        <Box display="flex" gap={5} alignItems="center" mb={6}
            p="10px 20px"
        >

            <Box w={12} borderRadius="50%">
                <Image src="https://www.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="profile"
                />
            </Box>
            <Box w="full">
                <Input variant='flushed' placeholder="What's happening"
                    value={tweet} onChange={handleTweet}
                />
            </Box>
            <Box>
                <Button onClick={postTweet} colorScheme="twitter"
                    borderRadius={50} w="85px"
                >Tweet</Button>
            </Box>
        </Box >
    )
}

export default CreateTweet

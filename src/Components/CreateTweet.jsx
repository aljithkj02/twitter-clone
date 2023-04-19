import { Box, Button, Image, Input, useToast } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useActions } from '../Hooks/useActions';
import { useData } from '../Hooks/useData';
import { createNewTweet } from '../config';

const CreateTweet = () => {
    const [tweet, setTweet] = useState('');
    const toast = useToast();

    const { handleLoading, addTweet } = useActions();
    const { username, password } = useData();

    const handleTweet = (e) => {
        setTweet(e.target.value);
    }

    const postTweet = async (e) => {
        e.preventDefault();
        handleLoading(true);
        const res = await createNewTweet(tweet, username, password);
        if (res.success) {
            toast({
                title: res.message,
                status: 'success',
                isClosable: true,
                position: 'top'
            })
            setTweet('');
            const resultObj = { ...res.data };
            resultObj.author = {
                username
            }
            addTweet(resultObj);
        } else {
            toast({
                title: res.message,
                status: 'error',
                isClosable: true,
                position: 'top'
            });
        }
        handleLoading(false);
    }
    return (
        <Box mb={6}>
            <form onSubmit={postTweet}>
                <Box display="flex" gap={5} alignItems="center"
                    p="10px 20px"
                >


                    <Box w={12} borderRadius="50%">
                        <Image src="https://www.bing.com/th?id=OIP.Gfp0lwE6h7139625a-r3aAHaHa&w=150&h=150&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" alt="profile"
                        />
                    </Box>
                    <Box w="full">
                        <Input variant='flushed' placeholder="What's happening"
                            value={tweet} onChange={handleTweet} required={true}
                        />
                    </Box>
                    <Box>
                        <Button type='submit' colorScheme="twitter"
                            borderRadius={50} w="85px"
                        >Tweet</Button>
                    </Box>
                </Box >
            </form>
        </Box>
    )
}

export default CreateTweet

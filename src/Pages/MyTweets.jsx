import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Toast, useDisclosure, useToast } from '@chakra-ui/react';
import React, { useEffect, useRef } from 'react';
import IndividualTweet from '../Components/IndividualTweet';
import { useActions } from '../Hooks/useActions';
import { useData } from '../Hooks/useData';
import { deleteTweet } from '../config';

const MyTweets = () => {
    const { myTweets, username, password } = useData();
    const { dispatch, getMyTweets, handleLoading, deleteTweetHandler } = useActions();
    const toast = useToast();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();
    const tweetId = useRef(null);

    useEffect(() => {
        if (myTweets.length == 0) {
            getData();
        }
    }, [])

    const getData = () => {
        dispatch(getMyTweets(username, password, handleLoading));
    }

    const handleOpen = (id) => {
        tweetId.current = id;
        onOpen();
    }

    const handleDelete = () => {
        onClose();
        if (tweetId.current) {
            let res = deleteTweetHandler(tweetId.current, username, password);
            if (res.success) {
                toast({
                    title: res.message,
                    status: 'success',
                    isClosable: true,
                    position: 'top'
                })
            }
            tweetId.current = null;
        }
    }

    const cancelHandler = () => {
        onClose();
        tweetId.current = null;
    }

    return (
        <>
            <Box>
                {myTweets.map((ele) => {
                    return <IndividualTweet key={ele.id} {...ele} handleDelete={handleOpen} />
                })}
            </Box>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={cancelHandler}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={handleDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog >
        </>
    )
}

export default MyTweets

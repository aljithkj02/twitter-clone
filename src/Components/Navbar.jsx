import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Text, useDisclosure } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../Hooks/useActions';

const Navbar = () => {
    const { logoutHandler } = useActions();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();
    const logout = () => {
        onClose();
        logoutHandler();
    }
    return (
        <>
            <Box position="fixed" w="full" zIndex={4}>
                <nav>
                    <Box display="flex" justifyContent="space-between"
                        bgColor="black" color="white" px={10} py={5}
                    >
                        <Box>
                            <Link to="/"><Text>Twitter</Text></Link>
                        </Box>
                        <Box display="flex" gap={5}>
                            <Link to="/mytweets"><Text cursor="pointer">My Tweets</Text></Link>
                            <Text cursor="pointer" onClick={onOpen}>Logout</Text>
                        </Box>
                    </Box>
                </nav >
            </Box>

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Logout
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure?
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={logout} ml={3}>
                                Logout
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default Navbar

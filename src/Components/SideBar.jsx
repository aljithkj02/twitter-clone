import {
    AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader,
    AlertDialogOverlay, Box, Button, Text, useDisclosure
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../Hooks/useActions'

const SideBar = () => {
    const { logoutHandler } = useActions();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef();
    const logout = () => {
        onClose();
        logoutHandler();
    }
    return (
        <>
            <Box display={['none', 'none', 'flex']}
                flexDir="column" justifyContent="space-between"
                py={6} position="fixed" h="90vh"
            >
                <Box display="flex" flexDir="column" gap={4}>
                    <Link to="/">
                        <Text fontSize="1.4rem" fontWeight="500">Home</Text>
                    </Link>
                    <Link to="/mytweets">
                        <Text fontSize="1.4rem" fontWeight="500">My Tweets</Text>
                    </Link>
                </Box>
                <Box>
                    <Text fontSize="1.4rem" fontWeight="500"
                        cursor="pointer" onClick={onOpen}
                    >Logout</Text>
                </Box>
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

export default SideBar

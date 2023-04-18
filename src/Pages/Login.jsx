import { Box, Button, Heading, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/react';
import React, { useState } from 'react';

const Login = () => {
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const login = (e) => {
        e.preventDefault();
        console.log(data);
    }
    const handleClick = () => setShow(!show);
    return (
        <Box display="flex" alignItems="center" minH="100vh">
            <Box w="40%" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" px={8} py={16}
                m="auto" borderRadius={8}
            >
                <Heading textAlign="center">Login</Heading>
                <form onSubmit={login}>
                    <Stack spacing={5} mt={6}>
                        <Input variant='filled' placeholder='Enter username' required={true}
                            name="username" onChange={handleChange} value={data.username}
                        />
                        <InputGroup size='md'>
                            <Input variant='filled'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                required={true}
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button colorScheme='twitter' type="submit">Login</Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    )
}

export default Login

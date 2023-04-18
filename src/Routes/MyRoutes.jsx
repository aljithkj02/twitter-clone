import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'

const MyRoutes = () => {
    return (
        <Container maxW="95%" minH="100vh">
            <Routes>
                <Route path='/' element={<h1>HOME</h1>} />
                <Route path='/login' element={<Login />} />
                <Route path='/mytweets' element={<h1>My Tweets</h1>} />
            </Routes>
        </Container>
    )
}

export default MyRoutes

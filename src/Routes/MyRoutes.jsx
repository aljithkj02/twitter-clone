import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import Home from '../Pages/Home'
import Login from '../Pages/Login'

const Layout = () => {
    return (
        <Box>
            <Navbar />
            <Container maxW="95%" minH="90vh" display={["block", "block", "grid"]}
                gridTemplateColumns="1fr 3fr"
            >
                <SideBar />
                <Box px={8} py={6} borderLeft={["none", "none", "1px solid black"]}>
                    <Outlet />
                </Box>
            </Container>
        </Box>
    )
}

const MyRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Home />} />
                    <Route path='mytweets' element={<h1>My Tweets</h1>} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </Box>
    )
}

export default MyRoutes

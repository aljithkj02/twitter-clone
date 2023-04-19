import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Loader from '../Components/Loader'
import Navbar from '../Components/Navbar'
import SideBar from '../Components/SideBar'
import { useData } from '../Hooks/useData'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import MyTweets from '../Pages/MyTweets'
import PrivateRouter from './PrivateRouter'

const Layout = () => {
    return (
        <Box>
            <Navbar />
            <Container maxW="95%" minH="90vh" display={["block", "block", "grid"]}
                pt={14}
            >
                <SideBar />
                <Box px={[0, 2, 4, 8]} py={[2, 6]} borderLeft={["none", "none", "1px solid black"]}
                    ml={["0px", "0px", "200px"]}
                >
                    <Outlet />
                </Box>
            </Container>
        </Box>
    )
}

const MyRoutes = () => {
    const { isLoading } = useData();
    return (
        <Box>
            {isLoading && <Loader />}
            <Routes>
                <Route path='/' element={<PrivateRouter><Layout /></PrivateRouter>}>
                    <Route path='' element={<Home />} />
                    <Route path='mytweets' element={<MyTweets />} />
                </Route>
                <Route path='/login' element={<Login />} />
            </Routes>
        </Box>
    )
}

export default MyRoutes

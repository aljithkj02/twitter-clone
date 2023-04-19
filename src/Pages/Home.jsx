import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CreateTweet from '../Components/CreateTweet';
import IndividualTweet from '../Components/IndividualTweet';
import { useActions } from '../Hooks/useActions';
import { useData } from '../Hooks/useData';

const Home = () => {
    const { tweets, username, password } = useData();
    const { dispatch, getTweets, handleLoading } = useActions();

    useEffect(() => {
        if (tweets.length == 0) {
            getData();
        }
    }, [])

    const getData = async () => {
        dispatch(getTweets(username, password, handleLoading));
    }
    return (
        <Box w="full">
            <CreateTweet />

            {tweets.map((ele) => {
                return <IndividualTweet key={ele.id} {...ele} />
            })}
        </Box>

    )
}

export default Home

import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import CreateTweet from '../Components/CreateTweet';
import { useActions } from '../Hooks/useActions';
import { useData } from '../Hooks/useData';

const Home = () => {
    const { tweets, username, password } = useData();
    const { dispatch, getTweets, handleLoading } = useActions();

    useEffect(() => {
        if (tweets.length == 0) {
            getData();
        }
        console.log(tweets);
    }, [])

    const getData = async () => {
        dispatch(getTweets(username, password, handleLoading));
    }
    return (
        <Box>
            <CreateTweet />
            {
                tweets.map((ele) => {
                    return <h1>{ele.tweet}</h1>
                })
            }
            Home
        </Box>

    )
}

export default Home

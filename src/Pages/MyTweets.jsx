import { Box } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import IndividualTweet from '../Components/IndividualTweet';
import { useActions } from '../Hooks/useActions';
import { useData } from '../Hooks/useData';
import { deleteTweet } from '../config';

const MyTweets = () => {
    const { myTweets, username, password } = useData();
    const { dispatch, getMyTweets, handleLoading, deleteTweetHandler } = useActions();
    useEffect(() => {
        if (myTweets.length == 0) {
            getData();
        }
    }, [])

    const getData = () => {
        dispatch(getMyTweets(username, password, handleLoading));
    }

    const handleDelete = (id) => {
        deleteTweetHandler(id, username, password);
    }

    return (
        <Box>
            {myTweets.map((ele) => {
                return <IndividualTweet key={ele.id} {...ele} handleDelete={handleDelete} />
            })}
        </Box>
    )
}

export default MyTweets

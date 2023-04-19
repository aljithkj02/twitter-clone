import { useDispatch } from "react-redux";
import { getMyTweets, getTweets, handleDeleteTweet, handleNewTweet, isLoading, loginUser } from "../Redux/action/action";

export const useActions = () => {
    const dispatch = useDispatch();

    const handleLoading = (status) => {
        dispatch(isLoading(status));
    }


    const addTweet = (obj) => {
        dispatch(handleNewTweet(obj));
    }

    const deleteTweetHandler = (tweetId, username, password) => {
        dispatch(handleDeleteTweet(tweetId, handleLoading, username, password))
    }
    return {
        loginUser,
        dispatch,
        getTweets,
        handleLoading,
        addTweet,
        getMyTweets,
        deleteTweetHandler
    }
}
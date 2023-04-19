import { deleteTweet, getAllPost, getMyAllTweets } from "../../config"


export const loginUser = (data) => (dispatch) => {
    return dispatch({
        type: 'LOGIN',
        payload: data
    })
}

export const isLoading = (status) => (dispatch) => {
    return dispatch({
        type: 'LOADING_STATUS',
        payload: status
    })
}

export const getTweets = (username, password, handleLoading) => (dispatch, getState) => {
    if (getState().tweets.length == 0) {
        handleLoading(true);
        getAllPost(username, password).then((res) => {
            handleLoading(false);
            if (res.success) {
                return dispatch({
                    type: 'STORE_TWEETS',
                    payload: res.data
                })
            } else {
                console.log(res.message);
            }
        }).catch((err) => {
            console.log(err);
            handleLoading(false);
        })
    }
}

export const getMyTweets = (username, password, handleLoading) => (dispatch, getState) => {
    if (getState().myTweets.length == 0) {
        handleLoading(true);
        getMyAllTweets(username, password).then((res) => {
            handleLoading(false);
            if (res.success) {
                return dispatch({
                    type: 'STORE_MY_TWEETS',
                    payload: res.data
                })
            } else {
                console.log(res.message);
            }
        }).catch((err) => {
            console.log(err);
            handleLoading(false);
        })
    }
}

export const handleDeleteTweet = (tweetId, handleLoading, username, password) => (dispatch, getState) => {
    handleLoading(true);
    deleteTweet(tweetId, username, password).then((res) => {
        handleLoading(false);
        if (res.success) {
            return dispatch({
                type: 'DELETE_TWEET',
                payload: tweetId
            })
        } else {
            console.log(res.message);
        }
    }).catch((err) => {
        console.log(err);
        handleLoading(false);
    })
}

export const handleNewTweet = (obj) => (dispatch) => {
    return dispatch({
        type: 'ADD_TWEET',
        payload: obj
    })
}
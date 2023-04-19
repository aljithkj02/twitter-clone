import { getAllPost } from "../../config"


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
            return dispatch({
                type: 'STORE_TWEETS',
                payload: res.data
            })
        }).catch((err) => {
            console.log(err);
            handleLoading(false);
        })
    }
}
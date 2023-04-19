

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

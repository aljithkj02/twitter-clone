
const defaultData = {
    username: '',
    password: '',
    isLoading: false,
    tweets: [],
    isUser: false
}

const myReducer = (state = defaultData, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                isLoading: false
            }
        case 'LOADING_STATUS':
            return {
                ...state,
                isLoading: action.payload
            }

        default:
            return state;
    }
}

export default myReducer;
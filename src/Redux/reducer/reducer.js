import { isLoading } from "../action/action"

const defaultData = {
    username: '',
    password: '',
    isLoading: false,
    tweets: [],
    myTweets: [],
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
        case 'STORE_TWEETS':
            return {
                ...state,
                tweets: action.payload
            }
        case 'STORE_MY_TWEETS':
            return {
                ...state,
                myTweets: action.payload
            }
        case 'ADD_TWEET':
            return {
                ...state,
                tweets: [...state.tweets, action.payload],
                myTweets: [...state.myTweets, action.payload]
            }
        case 'DELETE_TWEET':
            return {
                ...state,
                isLoading: false,
                tweets: state.tweets.filter((ele) => ele.id != action.payload),
                myTweets: state.myTweets.filter((ele) => ele.id != action.payload)
            }

        default:
            return state;
    }
}

export default myReducer;
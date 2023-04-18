
const defaultData = {
    name: '',
    isLoading: false,
    tweets: [],
    isUser: false
}

const myReducer = (state = defaultData, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state
            }

        default:
            return state;
    }
}

export default myReducer;
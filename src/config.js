import axios from "axios";

const BASE_URL = 'http://172.105.58.224:3582';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})
// ajithk
// Ajith$789
export const login = async ({ username, password }) => {
    try {
        const response = await apiClient.post('/auth/login', { username, password });
        return {
            success: true,
            message: 'User loggedin successfully!'
        }
    } catch (err) {
        return {
            success: false,
            message: err.response.data.message
        }
    }
}

export const getAllPost = async () => {
    const response = await apiClient.get('/tweet/all');
    return response.data;
}

export const createNewTweet = async (content) => {
    const response = await apiClient.post('/tweet/new', { ...content });
    return response.data;
};

export const getMyTweets = async () => {
    const response = await apiClient.get('/tweet/my-all');
    return response.data;
};

export const deleteTweet = async (tweetId) => {
    const response = await apiClient.delete(`/tweet/${tweetId}`);
    return response.data;
};

export const getTweetDetails = async (tweetId) => {
    const response = await apiClient.get(`/tweet/${tweetId}`);
    return response.data;
};
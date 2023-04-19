
import axios from "axios";

const BASE_URL = 'http://172.105.58.224:3582';

const apiClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

const generateHeader = (username, password) => {
    const authString = username + ':' + password;
    const encodedAuthString = btoa(unescape(encodeURIComponent(authString)));
    const authHeader = 'Basic ' + encodedAuthString;
    return authHeader;
}

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
            message: err.response.data.message,
        }
    }
}

export const getAllPost = async (username, password) => {
    try {
        const authString = username + ':' + password;
        const encodedAuthString = btoa(unescape(encodeURIComponent(authString)));
        const authHeader = 'Basic ' + encodedAuthString;
        const response = await axios.get('http://172.105.58.224:3582/tweet/all', {
            headers: {
                'Authorization': authHeader
            }
        });
        return {
            success: true,
            message: 'Data fetched successfully!',
            data: response.data
        }
    } catch (err) {
        return {
            success: false,
            message: err.response.data
        }
    }
}

export const createNewTweet = async (tweet, username, password) => {
    try {
        const authHeader = generateHeader(username, password);
        const response = await apiClient.post('/tweet/new', { tweet }, {
            headers: {
                'Authorization': authHeader
            }
        });
        return {
            success: true,
            message: 'Tweeted successfully!',
            data: response.data
        }
    } catch (err) {
        return {
            success: false,
            message: err.response.data,
        }
    }
};

export const getMyAllTweets = async (username, password) => {
    try {
        const authHeader = generateHeader(username, password);
        const response = await apiClient.get('/tweet/my-all', {
            headers: {
                'Authorization': authHeader
            }
        });
        return {
            success: true,
            message: 'Data fetched successfully!',
            data: response.data
        }
    } catch (err) {
        return {
            success: false,
            message: err.response.data,
        }
    }
};

export const deleteTweet = async (tweetId, username, password) => {
    try {
        const authHeader = generateHeader(username, password);
        const response = await apiClient.delete(`/tweet/${tweetId}`, {
            headers: {
                'Authorization': authHeader
            }
        });
        return {
            success: true,
            message: 'Data fetched successfully!',
            data: response.data
        }
    } catch (err) {
        return {
            success: false,
            message: err.response.data,
        }
    }
};

export const getTweetDetails = async (tweetId, username, password) => {
    try {
        const authHeader = generateHeader(username, password);
        const response = await apiClient.get(`/tweet/${tweetId}`, {
            headers: {
                'Authorization': authHeader
            }
        });
        return {
            success: true,
            message: 'Data fetched successfully!',
            data: response.data
        }
    } catch (err) {
        return {
            success: false,
            message: err.response.data,
        }
    }
};
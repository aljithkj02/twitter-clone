import { useSelector } from "react-redux";


export const useData = () => {
    const { username, password, isLoading, tweets, isUser } = useSelector(data => data);
    return {
        username,
        password,
        isLoading,
        tweets,
        isUser
    }
}
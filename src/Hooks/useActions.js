import { useDispatch } from "react-redux";
import { getTweets, isLoading, loginUser } from "../Redux/action/action";

export const useActions = () => {
    const dispatch = useDispatch();

    const handleLoading = (status) => {
        dispatch(isLoading(status));
    }
    return {
        loginUser,
        dispatch,
        getTweets,
        handleLoading
    }
}
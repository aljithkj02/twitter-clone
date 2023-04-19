import { useDispatch } from "react-redux";
import { isLoading, loginUser } from "../Redux/action/action";

export const useActions = () => {
    const dispatch = useDispatch();
    return {
        loginUser,
        isLoading,
        dispatch
    }
}
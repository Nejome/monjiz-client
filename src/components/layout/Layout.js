import Header from "./Header";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios, {setAuthToken} from "../../lib/axios";

export default function Layout({children}) {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);

    useEffect(() => {
        if (state.access_token) {
            setAuthToken(state.access_token);
        }

        axios.interceptors.response.use(
            (response) => response,
            async (error) => {
                const { response } = error;

                if (response?.status === 401) {
                    dispatch({type: 'auth/logout'});
                }

                return Promise.reject(error);
            }
        );
    }, []);

    return (
        <div className="h-full">
            <Header />

            <div className="container mx-auto mt-8">
                {children}
            </div>
        </div>
    );
}
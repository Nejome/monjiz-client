import {createContext, useEffect} from "react";
import axios, { setAuthToken } from "../lib/axios";
import {useDispatch, useSelector} from "react-redux";

const AppContext = createContext({});

const AppProvider = ({children}) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);

    useEffect(() => {
        axios.get('/api/users/me')
            .then(response => {
                dispatch({type: 'auth/setUser', payload: response.data});

                setAuthToken(state.access_token);
            })
            .catch((error) => {
                const {response} = error;

                if (response.status === 401) {
                    dispatch({type: 'DESTROY_SESSION'});
                }
            });
    }, []);

    useEffect(() => {
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
        <AppContext.Provider value={state}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};
import {useState, useEffect} from "react";
import {api} from "../api";

export const useCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {

        api.get('/api/categories')
            .then(response => {
                setCategories(response.data.data.categories)
            });

    }, [])

    return {categories, setCategories}
};

export const useAuth = () => {
    const [auth, setAuth] = useState(null);

    useEffect(() => {
        let localAuth = localStorage.getItem('auth');

        if(!auth && localAuth){
            setAuth(JSON.parse(localAuth));
        }

        if(auth){
            localStorage.setItem('auth', JSON.stringify(auth));
        }
    }, [auth]);

    return {auth, setAuth}
}
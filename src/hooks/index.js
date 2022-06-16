import {useState, useEffect} from "react";
import {api} from "../api";
import {useSelectedCategoryValue, useAuthValue} from "../context";

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

export const useProviders = () => {
    const {selectedCategory} = useSelectedCategoryValue();
    const [providers, setProviders] = useState([]);

    useEffect(() => {
        var queryString = selectedCategory !== null ? '?category='+selectedCategory : '';

        api.get('api/providers'+queryString)
            .then(response => {
                setProviders(response.data.data.providers)
            });
    }, [selectedCategory]);

    return {providers, setProviders}
}

export const useGetProfile = () => {
    const {auth} = useAuthValue();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        api.get('api/providers/profile', {headers: {Authorization: `Bearer ${auth.token}`}})
            .then(response => {
                setProfile(response.data.data.profile)
            });
    }, []);

    return {profile}
}

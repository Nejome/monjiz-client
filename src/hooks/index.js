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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        api.get('/api/categories')
            .then(response => {
                setCategories(response.data.data.categories);

                setLoading(false);
            });
    }, [])

    return {categories, setCategories, loading}
};

export const useProviders = () => {
    const {selectedCategory} = useSelectedCategoryValue();
    const [providers, setProviders] = useState([]);
    const [loading, isLoading] = useState(false);

    useEffect(() => {
        isLoading(true);

        var queryString = selectedCategory !== null ? '?category='+selectedCategory : '';

        api.get('api/providers'+queryString)
            .then(response => {
                setProviders(response.data.data.providers)

                isLoading(false)
            });
    }, [selectedCategory]);

    return {providers, setProviders, loading}
}

export const useProfile = () => {
    const {auth} = useAuthValue();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        api.get('api/providers/profile', {headers: {Authorization: `Bearer ${auth.token}`}})
            .then(response => {
                setProfile(response.data.data.profile);

                setLoading(false);
            });
    }, []);

    return {profile, setProfile, loading}
}

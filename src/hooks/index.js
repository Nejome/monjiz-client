import { useState, useEffect } from "react";
import axios from "../lib/axios";

export const useProfile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        axios.get('api/providers/profile')
            .then(response => {
                setProfile(response.data);

                setLoading(false);
            });
    }, []);

    return {profile, setProfile, loading}
}

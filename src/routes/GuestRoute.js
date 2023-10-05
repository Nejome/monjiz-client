import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function GuestRoute() {
    const auth = useSelector(state => state.auth);

    if (auth.user) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
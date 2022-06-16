import {Navigate, Outlet} from "react-router-dom";
import {useAuthValue} from "../context";

export default function ProtectedRoute() {
    const {auth} = useAuthValue();

    if(!auth){
        return <Navigate to="/" replace/>;
    }

    return <Outlet />;
}
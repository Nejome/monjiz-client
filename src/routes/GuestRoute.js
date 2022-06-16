import {Navigate, Outlet} from "react-router-dom";
import {useAuthValue} from "../context";

export default function GuestRoute(){
    const {auth} = useAuthValue();

    if(auth){
        return <Navigate to="/" replace/>;
    }

    return <Outlet />;
}
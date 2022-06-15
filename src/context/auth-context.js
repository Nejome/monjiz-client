import {createContext, useContext} from "react";
import {useAuth} from "../hooks";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const {auth, setAuth} = useAuth();

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
        {children}
    </AuthContext.Provider>
  );
};

export const useAuthValue = () => useContext(AuthContext);
import  {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import {useProviders} from '../hooks'
import {AuthProvider} from "./auth-context";

export const ProvidersContext = createContext();

export const ProvidersProvider = ({children}) => {
    const {providers, setProviders} = useProviders();

    return (
        <ProvidersContext.Provider value={{providers, setProviders}}>
            {children}
        </ProvidersContext.Provider>
    );
};

export const useProvidersValue = () => useContext(ProvidersContext);

ProvidersProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

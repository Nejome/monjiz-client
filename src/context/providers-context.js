import  {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import {useProviders} from '../hooks'

export const ProvidersContext = createContext();

export const ProvidersProvider = ({children}) => {
    const {providers, setProviders, loading} = useProviders();

    return (
        <ProvidersContext.Provider value={{providers, setProviders, loading}}>
            {children}
        </ProvidersContext.Provider>
    );
};

export const useProvidersValue = () => useContext(ProvidersContext);

ProvidersProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

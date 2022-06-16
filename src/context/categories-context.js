import  {createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import {useCategories} from '../hooks'
import {AuthProvider} from "./auth-context";

export const CategoriesContext = createContext();

export const CategoriesProvider = ({children}) => {
    const {categories, setCategories} = useCategories();

    return (
        <CategoriesContext.Provider value={{categories, setCategories}}>
            {children}
        </CategoriesContext.Provider>
    );
};

export const useCategoriesValue = () => useContext(CategoriesContext);

CategoriesProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

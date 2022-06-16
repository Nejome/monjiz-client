import  {useState, createContext, useContext} from 'react';
import PropTypes from 'prop-types';
import {AuthProvider} from "./auth-context";

export const SelectedCategoryContext = createContext();

export const SelectedCategoryProvider = ({children}) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <SelectedCategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
            {children}
        </SelectedCategoryContext.Provider>
    );
};

export const useSelectedCategoryValue = () => useContext(SelectedCategoryContext);

SelectedCategoryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

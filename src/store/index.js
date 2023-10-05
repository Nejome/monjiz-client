import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authSlice from "./slices/auth-slice";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { apiSlice } from './slices/api/apiSlice';

const persistConfig = {
    key: 'monjiz',
    storage,
}

const appReducer = combineReducers({
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
});

const rootReducer = (state, action) => {
    if (action.type === 'DESTROY_SESSION') {
        state = undefined;
    }

    return appReducer(state, action);
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({serializableCheck: false})
            .concat(apiSlice.middleware);
    },

    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import useReducer from "../features/users/userSlice";

export default configureStore({
    reducer: {
        user: useReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
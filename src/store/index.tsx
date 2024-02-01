import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import userListReducer from "./userListSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { useDispatch, useSelector } from "react-redux";

const reducers = combineReducers({
    user: userReducer,
    userList : userListReducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({serializableCheck:false}),
});
export const useChatDispatch = () => useDispatch();
export const useChatSelector = useSelector;
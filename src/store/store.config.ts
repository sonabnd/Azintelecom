import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { IState } from "./store";
import rootReducer from './store.reducer';

export const store = configureStore({
    reducer: rootReducer,
})

export const useStore = (key: keyof IState) => {
    const data = useSelector((state: IState) => state[key]);
    return data;
};
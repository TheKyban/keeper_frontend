import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./reducers";

const Store = configureStore({
    reducer:{
        auth: AuthenticationReducer
    }
})

export default Store;
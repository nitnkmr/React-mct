import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice"

const store =configureStore({
    reducer:{
        cart:loginSlice,
    },
});
export default store;
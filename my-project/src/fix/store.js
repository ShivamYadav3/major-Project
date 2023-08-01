import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";
import UserLoginSlice from "../Component/header Component/PartnerLoginForm/UserLoginSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        auth:UserLoginSlice
    }
});

export default store;

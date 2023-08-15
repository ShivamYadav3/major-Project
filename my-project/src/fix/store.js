import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./redux/cartSlice";
import UserLoginSlice from "../Component/header Component/PartnerLoginForm/UserLoginSlice";
import inputSlice from "./redux/inputSlice";

const store = configureStore({
    reducer:{
        cart:cartSlice,
        auth:UserLoginSlice,
        inputValue:inputSlice
    }
});

export default store;

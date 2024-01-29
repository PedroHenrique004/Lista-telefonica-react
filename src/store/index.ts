import { configureStore } from "@reduxjs/toolkit";
import contatosReducer from "./redurcers/contatos";

const store = configureStore({
    reducer: {
        contatos: contatosReducer
    }
})

export type RootReducer = ReturnType <typeof store.getState>
export default store
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const contatoSlice = createSlice({
    name: 'contato',
    initialState: [
        new Contato('Pedro', '(11)111111111', 'pedro@gmail.com', 1),
        new Contato('Pedro', '(11)111111111', 'pedro@gmail.com', 1),
        new Contato('Pedro', '(11)111111111', 'pedro@gmail.com', 1)
    ],
    reducers: {
        remover: (state, action: PayloadAction<number>) => {
            state = state.filter(contato => contato.id != action.payload)
        }
    }
})

export const { remover } = contatoSlice.actions
export default contatoSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "view vy",
    user: []
};

export const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        login: state => {
            state.value = 'view login'
        },
        logout: state => {
            state.value = 'view logout'
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})


export const { login, logout, incrementByAmount } = userSlice.actions

export default userSlice.reducer
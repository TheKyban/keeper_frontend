import { createReducer } from '@reduxjs/toolkit'

const AuthenticationReducer = createReducer({
    isAuthenticated: false
}, {
    
    loginUser:(state, action) => {
        state.isAuthenticated = action.payload;
        
    },
    checkCookie:(state,action) => {
        const cookie = document.cookie

        if(cookie) {
            state.isAuthenticated = true
        } else {
            state.isAuthenticated = false
        }
    }
})

export default AuthenticationReducer



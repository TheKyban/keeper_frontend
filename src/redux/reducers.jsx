import {createReducer} from '@reduxjs/toolkit'

const authenticationReducer = createReducer({
    isAuthenticated:false
},{
    SignUp:(state,action) => {
        const {name,email,password} = action.payload;
    }
})
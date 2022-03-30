import {createSlice} from '@reduxjs/toolkit'
import { Action } from 'history';


export const counterSlice  = createSlice({
    name:"mode",
    initialState:{
        light:true,
        role:""
    },
    reducers:{
        changeLight:(state)=>{
            state.light =!state.light;
        },
        setRole:(state,action)=>{
            state.role =action.payload;
        },
        
    }
});

export const {changeLight,setRole,}=counterSlice.actions
export default counterSlice.reducer;
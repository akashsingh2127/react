import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login :(state,action)=>{
            state.status=true;
            state.userData=action.payload.userData;
        },
        // here we are not holding the entire inner code ina variable then pushing it in the state like we din in todoSlice because here state si an object and in todoSlice state was an array
        logout:(state)=>{
            state.status=false;
            state.userData=null;
        }
    }
})

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;
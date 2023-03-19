import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"login",
    initialState:[],
    reducers:{
        create(state,action){
            state.push(action.payload);
            console.log(state);
        },
        match(state,action){
            state=state.filter((item)=>item.id!==action.payload);
        },
    }
})
export const {create,match}=loginSlice.actions;
export default loginSlice.reducer;
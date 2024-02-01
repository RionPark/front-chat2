import { createSlice } from "@reduxjs/toolkit";

const enterUserSlice =createSlice({
    name:'enterUser',
    initialState: {
        uiNum : 0,
        uiName : ''
    },
    reducers:{
        setEnterUser:(state:any, action:any)=>{
            state.uiNum = action.payload.uiNum;
            state.uiName = action.payload.uiName;
        }
    }
});
export const {setEnterUser}=enterUserSlice.actions;
export default enterUserSlice.reducer;
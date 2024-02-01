import { createSlice } from "@reduxjs/toolkit";
import { User } from "../types/User.type";

const initialState:User={
    uiNum:0,
	uiId:'',
	uiPwd:'',
	uiName:'',
	uiEmail:'',
	uiPhone:'',
	uiBirth:'',
	uiGender:'',
	uiGrade:'',
	uiCredat:'',
	uiCretim:'',
	uiLmodat:'',
	uiLmotim:'',
	uiImgPath:'',
	sessionId:'',
	loginDate:'',
	riNum:0,
	token:'',
	login:false,
    authorities:[],
};
const userSlice =createSlice({
    name:'user',
    initialState: initialState,
    reducers:{
        setUser:(state:User, action:any)=>{
            state.uiNum = action.payload.uiNum;
            state.uiId = action.payload.uiId;
            state.uiName =  action.payload.uiName;
            state.token =  action.payload.token;
            state.uiPwd =  action.payload.uiPwd;
            state.uiEmail =  action.payload.uiEmail;
            state.uiPhone =  action.payload.uiPhone;
            state.uiBirth =  action.payload.uiBirth;
            state.uiGender =  action.payload.uiGender;
            state.uiGrade =  action.payload.uiGrade;
            state.uiCredat =  action.payload.uiCredat;
            state.uiCretim =  action.payload.uiCretim;
            state.uiLmodat =  action.payload.uiLmodat;
            state.uiLmotim =  action.payload.uiLmotim;
            state.uiImgPath =  action.payload.uiImgPath;
            state.sessionId =  action.payload.sessionId;
            state.loginDate =  action.payload.loginDate;
            state.riNum =  action.payload.riNum;
            state.login =  action.payload.login;
            state.login =  action.payload.login;
            state.authorities =  action.payload.authorities;
        },
        initUser:(state:User)=>{
            state.uiNum =initialState.uiNum;
            state.uiId =initialState.uiId;
            state.uiName = initialState.uiName;
            state.token = initialState.token;
            state.uiPwd = initialState.uiPwd;
            state.uiEmail = initialState.uiEmail;
            state.uiPhone = initialState.uiPhone;
            state.uiBirth = initialState.uiBirth;
            state.uiGender = initialState.uiGender;
            state.uiGrade = initialState.uiGrade;
            state.uiCredat = initialState.uiCredat;
            state.uiCretim = initialState.uiCretim;
            state.uiLmodat = initialState.uiLmodat;
            state.uiLmotim = initialState.uiLmotim;
            state.uiImgPath = initialState.uiImgPath;
            state.sessionId = initialState.sessionId;
            state.loginDate = initialState.loginDate;
            state.riNum = initialState.riNum;
            state.login = initialState.login;
            state.login = initialState.login;
            state.authorities = initialState.authorities;
        }
    }
});
export const {setUser,initUser}=userSlice.actions;
export default userSlice.reducer;
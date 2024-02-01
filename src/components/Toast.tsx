import { useChatDispatch, useChatSelector } from "../store"
import { setEnterUser } from "../store/enterUserSlice";
import { User } from "../types/User.type";

export const Toast = ()=>{
    const enterUser:any = useChatSelector((state:any)=>state.enterUser);
    const dispatch = useChatDispatch();
    const user:any = {uiNum:0,uiName:''};
    const hideDiv = ()=>{
        dispatch(setEnterUser(user));
    }
    return (
        <div>
            {enterUser.uiNum!=0?
                <div className="custom-toast">
                <p>{enterUser.uiName}님이 로그인 하였습니다.</p>
                <button onClick={hideDiv}>확인</button>
                </div>:''
            }
        </div>
    )
    
}
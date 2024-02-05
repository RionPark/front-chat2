import { Avatar, Conversation, ConversationList, Search, Sidebar } from "@chatscope/chat-ui-kit-react";
import { useEffect, useState } from "react";
import { useChatDispatch, useChatSelector } from "../store";
import { setSelectedUser } from "../store/selectedUserSlice";
import { axiosAuth } from "../api/axiosHttp";

export const UserList = () => {
  const dispatch = useChatDispatch();
  const tmpUsers = useChatSelector((state:any)=>state.userList);
  const user = useChatSelector((state:any)=>state.user);
  const [users, setUsers] = useState<any[]>([]);
  const selectUser = async (chatUser:any)=>{
    await axiosAuth.put('/message-log',{cmiSenderUiNum:chatUser.uiNum, cmiReceiveUiNum:user.uiNum});
    dispatch(setSelectedUser(chatUser));
  }
  useEffect(() => {
    setUsers(tmpUsers.list);
  }, [tmpUsers]);

  return (
    <Sidebar position="left" scrollable={false}>
      <Search placeholder="Search..." />
      <ConversationList>
        {users?users.map((chatUser: any, idx) => (
          <Conversation
            key={idx}
            name={chatUser.uiName}
            lastSenderName={chatUser.uiName}
            info="Yes i can do it for you"
            style={{ justifyContent: "start" }}
            onClick={()=>{
              selectUser(chatUser);
            }}
            unreadCnt={chatUser.unreadCnt}
          >
            <Avatar
              src={require("./images/ram.png")}
              name="Lilly"
              status={chatUser.login ? 'available' : 'dnd'}
            />
          </Conversation>
        )):''}

      </ConversationList>
    </Sidebar>
  );
}
import React, { useEffect } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Main } from './components/Main';
import { Login } from './components/Login';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { SignUp } from './components/SignUp';
import { Menu } from './components/Menu';
import { useChatDispatch, useChatSelector } from './store';
import { setUserList } from './store/userListSlice';
import { disconnectClient, initClient } from './service/ChatService';


function App() {
  const loginUser = useChatSelector((state:any)=>state.user);
  const dispatch = useChatDispatch();
  const config = {
    url: `/topic/enter-chat`,
    callback: (data: any) => {
      const tmpUsers = JSON.parse(data.body);
      console.log('callback=>',tmpUsers);
      dispatch(setUserList(tmpUsers));
    }
  }
  useEffect(()=>{
    disconnectClient();
    if(!loginUser.uiNum){
      return;
    }
    initClient(config);
  },[loginUser]);
  return (
    <BrowserRouter>
    
      <div className="App">
          <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={'/sign-in'}>
                Chatting
              </Link>
              <Menu/>
            </div>
          </nav>

          <div className="auth-wrapper">
              
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/sign-in" element={<Login />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/main" element={<Main />} />
              </Routes>
            </div>
          </div>
    </BrowserRouter>
  );
}

export default App;


import './App.css';

import React from 'react';
import {Routes,Route} from 'react-router-dom';
import WorkInOut from './saveTimeData';
import Login from "./login";
import Note from "./memo";
import My_community from "./community";
import User_report from "./report";
import UserDataPage from "./userpage";




function App() {
    return (
        <div className='App'>

                <Routes>
                    <Route path="/Attendance" element={<WorkInOut/>} />
                    <Route path="/" element={<Login/>} />
                    <Route path="/memo" element={<Note/>} />
                    <Route path="/commu" element={<My_community/>} />
                    <Route path="/report" element={<User_report/>} />
                    <Route path="mypage/" element={<UserDataPage/>} />

                </Routes>

        </div>
    );
}

export default App;

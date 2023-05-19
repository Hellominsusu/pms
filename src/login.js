//src/login.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function Login() {
    const movePage = useNavigate();

    function gomain() {
        movePage('/Attendance');
    }
    function goMemo() {
        movePage('/memo');
    }
    return (
        <div className="login">
            <p>로그인 페이지입니다</p>
            <button onClick={gomain}>
                출근부
            </button>
            <button onClick={goMemo}>
                메모장
            </button>
        </div>
    );
}
export default Login;
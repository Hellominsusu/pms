//src/login.js
import React from 'react';
import { useNavigate } from "react-router-dom";
import './App.css';

function My_community() {
    const movePage = useNavigate();

    function goMain() {
        movePage('/Attendance');
    }
    function goMemo() {
        movePage('/memo');
    }

    // 하단 페이지
    function goMypage() {
        movePage('/mypage');
    }
    function goCommunity() {
        movePage('/commu');
    }
    function goReport() {
        movePage('/report');
    }


    return (
        <div className="commu">
            <p>커뮤니티 페이지입니다</p>
            <button onClick={goMain}>
                출근부
            </button>
            <button onClick={goMemo}>
                메모장
            </button>


            <div className="bottom-buttons">
                <button  onClick={goReport} >
                    보고서
                </button>
                <button onClick={goCommunity} >
                    커뮤니티
                </button>
                <button onClick={goMain} >
                    근로
                </button>
                <button onClick={goMypage} >
                    마이페이지
                </button>
            </div>
        </div>

    );


}
export default My_community;

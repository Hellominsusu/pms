import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './App.css';


let memoScripts;
let save_memo;

function Note() {
    const movePage = useNavigate();

    function goMain() {
        movePage('/Attendance');
    }

    function goHome() {
        movePage('/');
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

    const [memos, setMemos] = useState([]);
    const [memo, setMemo] = useState("");

    function addMemo() {
        setMemos([...memos, memo]);
        setMemo("");
        save_memo = memoScripts;
    }

    const handleChange = (event) => {
        if(memo.length<=300) {
                setMemo(event.target.value);
        }
        if(memo.length===301){
            setMemo(memo.slice(0, -1));
        }

    };

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setMemo(memo + '\n');
        }

    };
    return (
        <div className="Momo">
            <p>메모장 페이지입니다</p>
            <ul>
                {memos.map((memo, index) => (
                    <li key={index}>{memo}</li>
                ))}
            </ul>

      <textarea style={{textAlign: 'center',verticalAlign: 'middle',
          resize: 'none',
          overflow: 'hidden',
          // paddingTop: `${(400 - memo.length) / 2}px`,
          width: "600px",height: "350px",fontSize: "24px" }}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={memo}
      />
            <p style={{left: '100%', transform:  'translate(270px)'}}>
                {memo.length}/300
            </p>

            <p><button onClick={addMemo}>저장</button></p>
            <button onClick={goMain}>
                    출근부
                   </button>
               <button onClick={goHome}>
                로그인
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

export default Note;
import React, {useState, useReducer} from 'react'
//import VisualizeOfficeIn from "./ShowWorkData";
import { useNavigate } from "react-router-dom";
import './App.css';

let WorkInTime = "00:00:00"; // 출근 시간 기록
let WorkOutTime = "00:00:00"; // 퇴근 시간 기록
let WorkingHour; // 일한 시간 (퇴근 시간 - 출근 시간)
let WorkingMinitue; // 일한 분(퇴근 시간 - 출근 시간)
let WorkingSec; // 일한 초(퇴근 시간 - 출근 시간)
let IsWork = false; // 출근 여부 확인
let IsOut = false;
let curTime;

// let IsWorkIn = false;
const reducer = (state, action) =>{
    switch(action.type) {
        case 'diposit-in':
            IsWork=true;
            curTime = Date();
            WorkInTime = curTime.split(" ")
            WorkOutTime = curTime.split(" ")

            // const name = action.payload.name;
            const newDate = {
                date: Date(),
                // name,
                isHere: false,
            }

            return {
                count: state.count+1,
                dayData: [...state.dayData, newDate]
            }
        case 'diposit-out':
            IsWork=false;
            IsOut = true;
            curTime = Date();
            WorkOutTime = curTime.split(" ")
            return {
                count: state.count,
                dayData: state.dayData.filter(
                    (WorkData) =>WorkData.isHere = !WorkData.isHere,
                ),
            }
        default:
            return state;
    }


}
const initialState ={
    count: 0,
    dayData : [
    ],

};
function loadFiles(){

}

function saveFiles(){
    if(IsWork===true) {
    }
    else{
        let inTime = WorkInTime[4].split(":");
        let outTime = WorkOutTime[4].split(":");
        WorkingHour = outTime[0]-inTime[0];
        WorkingMinitue = outTime[1]-inTime[1];
        WorkingSec = outTime[2]-inTime[2];
        if(WorkingHour<0)
        {
            WorkingHour = "17"-inTime[0];
            WorkingMinitue = "30"-inTime[1];
            WorkingSec = "00"-inTime[2];
        }
        if(WorkingSec<0)
        {
            WorkingMinitue-=1;
            WorkingSec+=60;
        }
        if(WorkingMinitue<0)
        {
            WorkingHour-=1;
            WorkingMinitue+=60;
        }
    }
}
function WorkInOut() {

    const [workTimeInfo, dispatch]  = useReducer(reducer, initialState);
    const movePage = useNavigate();

    function gohome() {
        IsOut = false;
        IsWork = false;
        movePage('/');
    }

    function goMain() {
        movePage('/Attendance');
    }
    function goMemo() {
        IsOut = false;
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

        if(IsWork===false&&IsOut === false) {
        saveFiles();
        return (
            <div className="WorkInOut">
                <h1>출근부</h1>
                <p style={{fontSize:"24px"}}>출근 시간</p>
                <p style={{fontSize:"36px"}}>{WorkInTime[4]}</p>

                <button
                    onClick={() => {
                        dispatch({type: 'diposit-in'})
                        //dispatch({type: 'diposit-in', payload: {name}})
                    }
                    } style={{
                    width: "90px",height: "36px",fontSize: "24px" }}>
                    출근
                </button>
                {/*{workTimeInfo.dayData.map((WorkData) => {*/}
                {/*    return (<VisualizeOfficeIn key={WorkData.id}*/}
                {/*                               dispatch={dispatch} id={WorkData.id}*/}
                {/*                               />)*/}
                {/*})}*/}

                <div className="bottom-buttons">
                    <button  onClick={goReport} >
                        보고서
                    </button>
                    <button onClick={goCommunity}>
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
    else if(IsOut === false)
    {
        return (
            <div className="WorkInOut">
                <h1>출근부</h1>
                <p style={{fontSize:"24px"}}>출근 시간</p>
                <p style={{fontSize:"36px"}}>{WorkInTime[4]}</p>
                <button
                    onClick={()=>{
                        dispatch({type: 'diposit-out'})}
                    } style={{
                    width: "90px",height: "36px",fontSize: "24px" }}>
                    퇴근
                </button>
                <div className="bottom-buttons">
                    <button  onClick={goReport} style={{
                        width: "120px",height: "36px",fontSize: "18px" }}>
                        보고서
                    </button>
                    <button onClick={goCommunity} style={{
                        width: "120px",height: "36px",fontSize: "18px" }}>
                        커뮤니티
                    </button>
                    <button onClick={goMain} style={{
                        width: "120px",height: "36px",fontSize: "18px" }}>
                        근로
                    </button>
                    <button onClick={goMypage} style={{
                        width: "120px",height: "36px",fontSize: "18px" }}>
                        마이페이지
                    </button>
                </div>
            </div>
        );
    }
    else
    {
        saveFiles();
        return (
            <div className="WorkInOut">
                <h1>출근부</h1>
                <p style={{fontSize:"24px"}}>출근 시간 : {WorkInTime[4]}</p>
                <p style={{fontSize:"24px"}}>퇴근 시간 : {WorkOutTime[4]}</p>
                <p style={{fontSize:"24px"}}>하루 근무 시간 : {WorkingHour}{"시간 "}{WorkingMinitue}{"분 "}{WorkingSec}{"초"}</p>
                <p><button onClick={gohome}>
                    로그아웃
                </button>
                    <button onClick={goMemo}>
                        메모장
                    </button>
            </p>
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
}
export default WorkInOut;
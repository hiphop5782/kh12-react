import { useState } from 'react';
import lionImage from '../assets/images/lion.gif';

function Exam02() {
    //이 화면의 상태(state)는 한 개이다.
    const [size, setSize] = useState(200);

    // function small(){
    //     //size = 100;//React 사용 불가
    //     setSize(100);//React스러운 방법
    // }
    // function normal() {
    //     setSize(200);
    // }
    // function big() {
    //     setSize(300);
    // }

    return (
        <>
            <h1>두 번째 예제</h1>
            <button onClick={()=>setSize(100)}>작게</button>
            <button onClick={()=>setSize(200)}>기본</button>
            <button onClick={()=>setSize(300)}>크게</button>
            <br/>
            <img src={lionImage} width={size} height={size}/>
        </>
    );
}

export default Exam02;
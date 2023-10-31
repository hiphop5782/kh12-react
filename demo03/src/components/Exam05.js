import { useEffect, useState } from "react";

const Exam05 = ()=>{
    //state를 3개로 보면 = (java, dbms, boot)
    //state를 5개로 보면 = (java, dbms, boot) → (total, avg)
    const [java, setJava] = useState(0);
    const [dbms, setDbms] = useState(0);
    const [boot, setBoot] = useState(0);
    const [total, setTotal] = useState(0);
    const [avg, setAvg] = useState(0);

    useEffect(()=>{
        setTotal(java + dbms + boot);
    }, [java,dbms,boot]);
    useEffect(()=>{
        setAvg(total/3);
    }, [total]);

    return (
        <>
            <h1>성적 계산기</h1>
            자바 <input type="number" value={java} onChange={e=>setJava(parseInt(e.target.value))}/> 점 <br/><br/>
            데이터베이스 <input type="number" value={dbms} onChange={e=>setDbms(parseInt(e.target.value))}/> 점 <br/><br/>
            스프링부트 <input type="number" value={boot} onChange={e=>setBoot(parseInt(e.target.value))}/> 점 <br/><br/>
            <hr/>
            총점 = {total}점 , 평균 = {avg}점
        </>
    );
};

export default Exam05;
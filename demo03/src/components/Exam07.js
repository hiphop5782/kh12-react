import { useState } from "react";

const Exam07 = ()=>{

    //객체로 상태 변수를 정의
    const [member, setMember] = useState({
        memberId:"",
        memberPw:"",
        memberPwRe:""
    });

    //객체의 상태를 한 번에 변경하는 함수를 구현
    const changeMember = (e)=>{
        setMember({
            ...member,
            [e.target.name] : e.target.value
        });
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    
                    {/* 점보트론 */}
                    <div className="p-4 text-light bg-dark rounded">
                        <h1>객체 상태 변수 문제</h1>
                    </div>

                    <form autoComplete="off">

                    <div className="row mt-4">
                        <div className="col">
                            <label className="form-label">아이디</label>
                            <input type="text" name="memberId" className="form-control"
                                    value={member.memberId} onChange={changeMember}/>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <label className="form-label">비밀번호</label>
                            <input type="password" name="memberPw" className="form-control"
                                    value={member.memberPw} onChange={changeMember}/>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <label className="form-label">비밀번호 확인</label>
                            <input type="password" name="memberPwRe" className="form-control"
                                    value={member.memberPwRe} onChange={changeMember}/>
                        </div>
                    </div>

                    </form>

                    <div className="row mt-4">
                        <div className="col">
                            <button type="button" className="btn btn-primary w-100">회원가입</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );    
};

export default Exam07;
import { useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Jumbotron from "./components/Jumbotron";
import { Modal } from "bootstrap";

function App() {
  //목록을 위한 state
  const [todoList, setTodoList] = useState([
      {no:1, title:"학원가기", type:"공부"},
      {no:2, title:"영어단어외우기", type:"공부"},
      {no:3, title:"헬스장가기", type:"운동"},
      {no:4, title:"친구만나기", type:"일상"}
  ]);
  //등록을 위한 state
  const [data, setData] = useState({title:"", type:""});
  //수정을 위한 state
  const [editData, setEditData] = useState({title:"", type:""});

  const bsModal = useRef();

  const changeData = (e)=>{
    setData({
      ...data,
      [e.target.name] : e.target.value
    });
  };

  const addTodoList = ()=>{
    //data의 내용을 todoList에 추가 후 data를 초기화

    //내용 검사 코드 추가 if(맘에안들면) return;
    if(data.title.length === 0 || data.type.length === 0) return;

    const last = todoList.length-1;
    const no = todoList.length === 0 ? 1 : todoList[last].no + 1;

    setTodoList([
      ...todoList, 
      {
        ...data, 
        no:no
      }
    ]);

    setData({title:"", type:""});
  };

  //todo 항목 삭제
  const deleteTodoList = (todo) => {
    const newTodoList = todoList.filter(t => t.no !== todo.no);
    setTodoList(newTodoList);
  };

  //todo 수정을 위한 선택
  const editTodoList = (todo) => {
    //setEditData(todo);//안되는 코드(얕은 복사, shallow copy)
    setEditData({...todo});//가능한 코드(깊은 복사, deep copy)

    openModal();
  };
  
  const changeEditData = e=>{
    setEditData({
      ...editData,
      [e.target.name] : e.target.value
    });
  };

  const clearEditData = ()=>{
    setEditData({title:"",type:""});
    closeModal();
  };

  const saveTodoList = ()=>{
    //editData의 내용을 todoList에 반영하고 초기화

    const newTodoList = todoList.map(t=>{
      if(t.no === editData.no) {
        return {...editData};
      }
      return t;
    });
    setTodoList(newTodoList);

    clearEditData();

    closeModal();
  };

  //Modal 제어 함수
  const openModal = ()=>{
    const modal = new Modal(bsModal.current);
    modal.show();
  };
  const closeModal = ()=>{
    const modal = Modal.getInstance(bsModal.current);
    modal.hide();
  };

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">

          {/* 점보트론을 만들면서 제목과 내용을 전달 */}
          <Jumbotron title="일정 관리 프로그램" content="KH정보교육원 수업자료"/>

          {/* 입력 화면 */}
          <div className="row mt-4">
            <div className="col-6">
              <input className="form-control" name="title" value={data.title}
                                                                            onChange={changeData}/>
            </div>
            <div className="col-3">
              <select className="form-select" name="type" value={data.type}
                                                                            onChange={changeData}>
                <option value="">선택</option>
                <option>일상</option>
                <option>약속</option>
                <option>취미</option>
                <option>공부</option>
              </select>
            </div>
            <div className="col-3">
              <button className="btn btn-success w-100" onClick={addTodoList}>
                <AiOutlinePlus/>
                추가
              </button>
            </div>
          </div>

          <hr/>

          {/* 출력 화면 */}
          <div className="row mt-4">
            {todoList.map(todo=>(
            <div className="col-12 fs-4 mb-2">
              <span className="badge bg-primary me-2">
                {todo.type}
              </span>
              {todo.title}

              {/* 수정버튼 */}
              <FaRegEdit className="text-warning ms-1" onClick={e=>editTodoList(todo)}/>
              {/* 삭제버튼 */}
              <FaXmark className="text-danger ms-1" onClick={e=>deleteTodoList(todo)}/>
            </div>
            ))}
          </div>

        </div>
      </div>

      {/* Modal */}
      <div className="modal fade" ref={bsModal} id="exampleModal" 
                data-bs-backdrop="static" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">일정 변경</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {/* 수정 화면 */}
                <div className="row">
                  <div className="col">
                    <label className="form-label">할일</label>
                    <input type="text" name="title" value={editData.title} 
                        className="form-control" onChange={changeEditData}/>
                  </div>
                </div>
                <div className="row mt-4">
                  <div className="col">
                    <label className="form-label">종류</label>
                    <select name="type" value={editData.type} onChange={changeEditData}
                        className="form-select">
                      <option>일상</option>
                      <option>약속</option>
                      <option>취미</option>
                      <option>공부</option>
                    </select>
                  </div>
                </div>
            </div>
            <div className="modal-footer">
                <button className="btn btn-secondary" onClick={clearEditData}>취소</button>
                <button className="btn btn-success" onClick={saveTodoList}>저장</button>
            </div>
            </div>
        </div>
        </div>

    </div>
  );
}

export default App;

import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import Jumbotron from "./components/Jumbotron";

function App() {
  const [todoList, setTodoList] = useState([
      {no:1, title:"학원가기", type:"공부"},
      {no:2, title:"영어단어외우기", type:"공부"},
      {no:3, title:"헬스장가기", type:"운동"},
      {no:4, title:"친구만나기", type:"일상"}
  ]);

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-md-8 offset-md-2">

          {/* 점보트론을 만들면서 제목과 내용을 전달 */}
          <Jumbotron title="일정 관리 프로그램" content="KH정보교육원 수업자료"/>

          {/* 입력 화면 */}

          {/* 출력 화면 */}
          <div className="row mt-4">
            {todoList.map(todo=>(
            <div className="col-12 fs-4 mb-2">
              <span className="badge bg-primary me-2">
                {todo.type}
              </span>
              {todo.title}
              <FaXmark className="text-danger"/>
            </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;

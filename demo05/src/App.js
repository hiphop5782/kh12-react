import { NavLink, Route, Routes } from "react-router-dom";
import Pocketmon from "./components/Pocketmon";
import Book from "./components/Book";
import Home from "./components/Home";

function App() {
  return (
    <div className="container-fluid">
      {/* 상단 메뉴 영역 */}
      <div>
        <NavLink to="/">홈</NavLink>
        <NavLink to="/pocketmon">포켓몬스터</NavLink>
        <NavLink to="/book">도서</NavLink>
      </div>

      {/* 본문 영역 */}
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route path="/pocketmon" element={<Pocketmon/>}></Route>
          <Route path="/book" element={<Book/>}></Route>
        </Routes>
      </div>

    </div>
  );
}

export default App;

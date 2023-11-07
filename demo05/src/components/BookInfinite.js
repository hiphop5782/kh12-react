import axios from "axios";
import { useEffect, useState } from "react";

const BookInfinite = (props)=>{
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(30);
    const [bookList, setBookList] = useState([]);

    const loadBook = ()=> {
        axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/page/${page}/size/${size}`,
            method:"get"
        })
        .then(response=>{
            //setBookList(response.data);//덮어쓰기
            setBookList([...bookList, ...response.data]);//spread 연산자
            //setBookList(bookList.concat(...response.data));//concat 함수
        });
    };
    useEffect(()=>{
        loadBook();
    }, [page]);

    //다음페이지
    const nextPage = ()=>{
        setPage(page+1);//페이지 1 증가
    };

    //개수가 변하면 페이지를 1로, 목록을 모두 지우고 다시 불러와야 한다
    useEffect(()=>{
        setPage(1);
        setBookList([]);
        //loadBook();
    }, [size]);

    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>무한 스크롤 예제</h1>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-2 offset-10">
                    <select value={size} onChange={e=>setSize(e.target.value)}>
                        <option value="20">20개씩 보기</option>
                        <option value="30">30개씩 보기</option>
                        <option value="50">50개씩 보기</option>
                        <option value="100">100개씩 보기</option>
                    </select>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>저자</th>
                                <th>출판사</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map(book=>(
                            <tr key={book.bookId}>
                                <td>{book.bookId}</td>
                                <td>{book.bookTitle}</td>
                                <td>{book.bookAuthor}</td>
                                <td>{book.bookPublisher}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* 더보기 버튼 */}
                
                <div className="row mt-2">
                    <div className="col">
                        <button className="btn btn-primary w-100" onClick={nextPage}>
                            {size}개 더보기
                        </button>
                    </div>
                </div>
                
                
            </div>
        </>
    );
};
export default BookInfinite;
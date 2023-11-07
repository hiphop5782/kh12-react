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
    }, []);

    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>무한 스크롤 예제</h1>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>제목</th>
                                <th>저자</th>
                                <th>출판사</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map(book=>(
                            <tr key={book.bookId}>
                                <td>{book.bookTitle}</td>
                                <td>{book.bookAuthor}</td>
                                <td>{book.bookPublisher}</td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export default BookInfinite;
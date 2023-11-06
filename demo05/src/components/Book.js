import { useEffect, useState } from "react";
import axios from "axios";

import "./Book.css";

const Book = (props)=>{
    const [bookList, setBookList] = useState([]);
    useEffect(()=>{
        //서버에 있는 도서 정보를 불러와서 state에 반영하는 코드
        axios({
            url:"http://localhost:8080/book/",
            method:"get"
        })
        .then(response=>{
            setBookList(response.data);
        })
        .catch(err=>{
            window.alert("통신 오류 발생");
        });
    }, []);

    return (
        <>
            <div className="row">
                <div className="col">
                    <h1>도서 관리 화면</h1>
                    <hr/>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="pc-only">코드</th>
                                <th>제목</th>
                                <th>저자</th>
                                <th>출판사</th>
                                <th className="pc-only">출간일</th>
                                <th>판매가</th>
                                <th className="pc-only">페이지</th>
                                <th className="pc-only">장르</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book, index)=>(
                                <tr>
                                    <td className="pc-only">{book.bookId}</td>
                                    <td>{book.bookTitle}</td>
                                    <td>{book.bookAuthor}</td>
                                    <td>{book.bookPublisher}</td>
                                    <td className="pc-only">{book.bookPublicationDate}</td>
                                    <td>{book.bookPrice}</td>
                                    <td className="pc-only">{book.bookPageCount}</td>
                                    <td className="pc-only">{book.bookGenre}</td>
                                    <td>
                                        {/* 아이콘 자리 */}
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>                    
                </div>
            </div>

        </>
    );
};

export default Book;
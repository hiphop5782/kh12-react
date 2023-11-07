import axios from "axios";
import { useEffect, useRef, useState } from "react";
import throttle from "lodash/throttle";//특정 함수의 발생 주기를 설정(강제 성능 하향)
//사용법 - throttle(원래쓰려고했던함수, 주기)
//import debounce from "lodash/debounce";//특정 이벤트의 마지막만 실행하도록 설정
//사용법 - debounce(원래쓰려고했던함수, 주기)

const BookInfinite = (props)=>{
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(30);
    const [bookList, setBookList] = useState([]);

    //ref를 이용해서 flag 변수를 생성(화면과는 무관)
    const loading = useRef(false);
    const loadBook = ()=> {
        loading.current = true;//로딩중으로 설정(순서 보장)
        axios({
            url:`${process.env.REACT_APP_REST_API_URL}/book/page/${page}/size/${size}`,
            method:"get"
        })
        .then(response=>{
            //setBookList(response.data);//덮어쓰기
            setBookList([...bookList, ...response.data]);//spread 연산자
            //setBookList(bookList.concat(...response.data));//concat 함수
            loading.current = false;//로딩완료로 설정(순서 보장)
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

    ////////////////////////////////////////////////////////////////////////////
    // 스크롤 이벤트 처리(scroll event handling)
    // - 화면이 실행되면 window에 scroll 이벤트 설정
    // - 화면이 해제되기 직전에 이벤트 해제
    ////////////////////////////////////////////////////////////////////////////
    useEffect(()=>{
        if(loading.current === true) {//로딩이 진행중인 상황
            return;//그만해
        }

        //화면 생성 시 할 작업
        const listener = throttle(()=>{
            //console.log("스크롤이 굴러간다!");
            const percent = calculateScrollPercentage();
            console.log("퍼센트 = " + percent);
            if(percent >= 60) {
                nextPage();
            }
        }, 750);
        window.addEventListener("scroll", listener);
        console.log("걸렸다");

        //화면 해제 시 할 작업
        return ()=>{
            window.removeEventListener("scroll", listener);
            console.log("풀렸다");
        };
    });

    //스크롤 퍼센트 구하는 함수(Feat.GPT)
    const calculateScrollPercentage = ()=>{
        // 현재 스크롤 위치
        var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      
        // 문서의 전체 높이
        var documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
      
        // 브라우저의 뷰포트 높이
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      
        // 스크롤 퍼센트 계산
        var scrollPercentage = (scrollPosition / (documentHeight - windowHeight)) * 100;
      
        return scrollPercentage;
      }

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
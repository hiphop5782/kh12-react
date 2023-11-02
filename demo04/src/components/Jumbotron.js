//컴포넌트 함수의 매개변수에 props를 적으면 전달되는 속성을 읽을 수 있다
//- 이를 통해 상위 화면에서 전달되는 데이터를 이용한 프로그래밍이 가능
const Jumbotron = (props)=>{
    return (
        <div className="p-4 text-light bg-dark rounded">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};

export default Jumbotron;
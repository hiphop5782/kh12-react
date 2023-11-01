import { useState } from "react";

const Exam10 = ()=>{
    const [items, setItems] = useState([
        {itemNo:1, itemName:"포켓몬스터빵", itemPrice:500, itemType:"식품", edit:false},
        {itemNo:2, itemName:"허니버터칩", itemPrice:1300, itemType:"식품", edit:false},
        {itemNo:3, itemName:"참이슬후레시", itemPrice:2200, itemType:"주류", edit:false},
        {itemNo:4, itemName:"카스", itemPrice:2500, itemType:"주류", edit:false},
        {itemNo:5, itemName:"테라", itemPrice:1300, itemType:"주류", edit:false},
        {itemNo:6, itemName:"켈리", itemPrice:1400, itemType:"주류", edit:false},
        {itemNo:7, itemName:"처음처럼", itemPrice:2000, itemType:"주류", edit:false},
        {itemNo:8, itemName:"오징어땅콩", itemPrice:3500, itemType:"식품", edit:false},
        {itemNo:9, itemName:"신라면", itemPrice:1500, itemType:"식품", edit:false},
        {itemNo:10, itemName:"하리보젤리", itemPrice:5500, itemType:"식품", edit:false}
    ]);

    //줄을 수정상태로 변경하는 함수
    //- 이 함수를 실행하려면 최소한 itemNo는 알아야 한다
    //- 함수를 호출할 때 이벤트정보(e) 대신 아이템정보(item)을 전달하여 처리하도록 처리
    const changeToEdit = (target)=>{
        //console.log(target);

        const newItems = items.map(item=>{
            if(item.itemNo === target.itemNo) {//target과 같은 번호의 상품만큼은
                return {
                    ...item,//다른건 그대로 둬도
                    edit:true//edit를 true로 바꿔라
                };
            }
            return item;//나머진 현상유지
        });
        
        setItems(newItems);
    };

    //줄의 데이터를 변경하는 함수
    //- 어떤 아이템인지(target)와 뭐라고 입력했는지(e)를 알아야 한다
    const changeItem = (target, e)=>{
        const newItems = items.map(item=>{
            if(item.itemNo === target.itemNo) {//같은 번호를 발견한다면
                return {
                    ...item,//나머지 정보는 그대로 두고
                    [e.target.name] : e.target.value//입력창의 이름에 해당하는 필드값을 입력값으로 바꿔라
                }
            }
            return item;
        });
        setItems(newItems);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 offset-md-1">

                    <div className="p-4 text-light bg-dark rounded">
                        <h1>상품 목록</h1>
                    </div>

                    <div className="row mt-4">
                        <div className="col">
                            <button type="button" className="btn btn-primary">추가</button>
                        </div>
                    </div>

                    <div className="row mt-4">
                        <div className="col">

                            <table className="table" data-bs-theme="light">
                                <thead>
                                    <tr>
                                        <th width="10%">번호</th>
                                        <th width="30%">상품명</th>
                                        <th width="20%">판매가</th>
                                        <th width="20%">분류</th>
                                        <th width="20%">관리</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item,index)=>(
                                        item.edit ? (
                                            <tr key={item.itemNo}>
                                                <td>{item.itemNo}</td>
                                                <td>
                                                    <input className="form-control" type="text" name="itemName"
                                                        value={item.itemName} onChange={e=>changeItem(item, e)}/>
                                                </td>
                                                <td>
                                                    <input className="form-control" type="text" name="itemPrice"
                                                        value={item.itemPrice} onChange={e=>changeItem(item, e)}/>
                                                </td>
                                                <td>
                                                    <input className="form-control" type="text" name="itemType" 
                                                        value={item.itemType} onChange={e=>changeItem(item, e)}/>
                                                </td>
                                                <td>
                                                    <button className="btn btn-sm btn-secondary">취소</button>
                                                    <button className="btn btn-sm btn-success ms-1">완료</button>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr key={item.itemNo}>
                                                <td>{item.itemNo}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.itemPrice}</td>
                                                <td>{item.itemType}</td>
                                                <td>
                                                    <button className="btn btn-sm btn-warning"
                                                            onClick={e=>changeToEdit(item)}>수정</button>
                                                    <button className="btn btn-sm btn-danger ms-1">삭제</button>
                                                </td>
                                            </tr>
                                        )
                                    ))}
                                </tbody>
                            </table>

                        </div>
                    </div>

                </div>
            </div>

            
        </div>
    );
};

export default Exam10;
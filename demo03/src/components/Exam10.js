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
                                        <th>번호</th>
                                        <th>상품명</th>
                                        <th>판매가</th>
                                        <th>분류</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item,index)=>(
                                        item.edit ? (
                                            <tr key={item.itemNo}>
                                                <td>{item.itemNo}</td>
                                                <td>
                                                    <input type="text" value={item.itemName}/>
                                                </td>
                                                <td>
                                                    <input type="text" value={item.itemPrice}/>
                                                </td>
                                                <td>
                                                    <input type="text" value={item.itemType}/>
                                                </td>
                                            </tr>
                                        ) : (
                                            <tr key={item.itemNo}>
                                                <td>{item.itemNo}</td>
                                                <td>{item.itemName}</td>
                                                <td>{item.itemPrice}</td>
                                                <td>{item.itemType}</td>
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
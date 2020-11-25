import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const per = 5 // 每页显示5条数据
/*
    1:0,1,2,3,4
    2:5,6,7,8,9
* */

export default function List(props){
    let {page="1"} = useParams();
    // console.log(useLocation());
    let tab = useLocation().pathname.split('/')[1];
    console.log(tab)
    let {data}  = props;
    let start = (Number(page)-1) * per;
    let end = start + per;
    let nowData = data.filter((item,index)=>{
        return index>=start & index <= end
    })
    return <ul className="list">
        {
            nowData.map((item)=>{
                return <li key={item.id}>{item.title}</li>
            })
        }
    </ul>
}
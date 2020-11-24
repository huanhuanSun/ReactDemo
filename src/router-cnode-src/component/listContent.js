import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../static/data'

const per = 5 // 每页显示5条数据
/*
    1:0,1,2,3,4
    2:5,6,7,8,9
* */

export default function ListContent(){
    let {type="good",page="1"} = useParams();
    page = Number(page);
    let start = (page - 1)*per;
    let end = start + per;
    let nowData = data[type].filter((item,index)=>{
        return index>= start && index <= end
    })
    console.log(nowData)
    return <ul>
        {
            nowData.map((item)=>{
                return <li key={item.id}>{item.title}</li>
            })
        }
    </ul>
}
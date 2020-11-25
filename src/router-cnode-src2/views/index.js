import React from 'react'
import { useParams } from 'react-router-dom';
import Pagenation from '../component/pagenation'
import data from '../static/data'

var newData = [];
for (let key in data) {
    data[key].map((item,index)=>{
        newData.push(item)
    })
}

const per= 10;//每页显示5条数据
export default function Index(){
    // console.log(useParams())
    // console.log(newData)
    const {page="1"} = useParams();
    const start = (Number(page)-1)*per;
    const end = start + per;
    const nowData = newData.filter((item,index)=>{
        return index >= start && index <= end
    })
    let dataLen = newData.length;
    return<>
            <ul className="list">
                {
                    nowData.map((item)=>{
                        return <li key={item.id}>{item.title}</li>
                    })
                }
            </ul>
            <Pagenation  dataLen={dataLen} />
        </>
}
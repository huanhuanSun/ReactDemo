import React from 'react'
import { Link, useParams } from 'react-router-dom'
import data from '../static/data'
const per = 5; //每页5条数据
export default function Pagenation (props) {
    let {type="good",page="1"} = useParams();
    let nowData = data[type];
    let pageLen = Math.floor(nowData.length/per)
    // console.log(pageLen)

    function render(){
        let navs = [];
        for(let i =1;i<=pageLen; i++){
            if (i === Number(page)) {
                navs.push(
                <span key={i} className="active">{i}</span>
                )
            }
            else{
                navs.push(
                    <Link key={i} to={`/list/${type}/${i}`} >{i}</Link>
                )
            }
            
        }
        return navs
    }
    return<ul className="pagenation">
        {
            render()
        }
    </ul>
}
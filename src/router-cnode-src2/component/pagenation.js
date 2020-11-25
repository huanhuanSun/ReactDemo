import React from 'react'
import { Link, useHistory, useParams,useLocation } from 'react-router-dom'

const per = 10; //每页5条数据
export default function Pagenation (props) {
    let history = useHistory();

    // console.log(useLocation())
    const {dataLen} = props;
    let {page="1"} = useParams();
    let type = useLocation().pathname.split("/")[1] || 'index';
    let pageLen = Math.ceil(dataLen/per)
    // console.log(pageLen)

    function render(){
        let navs = [];
        for(let i =1;i<=pageLen; i++){
            if (i === Number(page)) {
                navs.push(
                <a key={i} className="active">{i}</a>
                )
            }
            else{
                navs.push(
                    <Link key={i} to={`/${type}/${i}`} >{i}</Link>
                )
            }
        }
        return navs
    }
    return<nav className="pagination">
            <a onClick={()=>{
                if (Number(page)>1) {
                    history.push(`/${type}/${Number(page)-1}`); 
                }
            }}>上一页</a>
            {
                render()
            }
            <a onClick={()=>{
                if (Number(page)<pageLen) {
                    history.push(`/${type}/${Number(page)+1}`); 
                }
            }}>下一页</a>
        </nav>
}
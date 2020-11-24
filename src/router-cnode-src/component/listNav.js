import React from 'react'
import { NavLink, useHistory, useParams } from 'react-router-dom'


export default function ListNav(props){
    // console.log(useHistory())
    const {type="good",page}  = useParams();    
    return<>
        <nav className="list-nav">
            <NavLink to="/list/good" 
                isActive={()=>{
                    return type==='good'
                }}
            >精华</NavLink>
            <NavLink to="/list/share"
            >分享</NavLink>
            <NavLink 
                to="/list/ask"
            >问答</NavLink>
        </nav>
    </>
}
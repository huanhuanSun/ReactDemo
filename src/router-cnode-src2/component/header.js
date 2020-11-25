import React from 'react'
import { NavLink, useLocation, useParams, useRouteMatch } from 'react-router-dom'


export default function Header(){
    // console.log(useLocation())
    const {pathname} = useLocation();
    console.log(useRouteMatch())
    // const {page} = useParams();
    return <div className="nav">
    <NavLink
        to="/index"
        // isActive={()=>{
        //     return pathname==='/'|| pathname==='/index' 
        // }}
    >全部</NavLink>
    <NavLink
        // exact // 不加exac  加上就无法匹配 /good/2 这种url
        to="/good"
    >精华</NavLink>
    <NavLink
        to="/share"
        // exact // 不加exac  加上就无法匹配 /good/2 这种url
    >分享</NavLink>
    <NavLink
        to="/ask"
        // exact // 不加exac  加上就无法匹配 /good/2 这种url
    >问答</NavLink>
</div>
}
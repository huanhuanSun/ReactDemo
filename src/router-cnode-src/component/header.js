import React from 'react'
import { NavLink } from 'react-router-dom'


const active={
    fontWeight:"bold"
}
export default function Header(){
    return <div className="nav">
    <NavLink
        to="/"
        exact
        activeClassName="selected"
        activeStyle={active}
    >首页</NavLink>
    <NavLink
        to="/about"
        exact
        activeClassName="selected"
        activeStyle={active}
    >关于</NavLink>
    <NavLink
        to="/join"
        exact
        activeClassName="selected"
        activeStyle={active}
    >加入</NavLink>
    {/* <NavLink
        to="/list"
        activeClassName="selected"
        activeStyle={active}
    >列表</NavLink> */}
    <NavLink 
        to="/list"
        activeClassName="selected"
        activeStyle={active}
      >列表</NavLink>
</div>
}
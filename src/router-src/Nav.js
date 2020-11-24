import React from 'react'
import { Link } from 'react-router-dom'


export default function Nav(){
    return <>
        <Link to="/">首页</Link>
        <Link to="/about">关于我们</Link>
        <Link to="/join">加入我们</Link>
    </>
}
import React from 'react'
import { NavLink } from 'react-router-dom'
import ListContent from '../component/listContent';
import ListNav from '../component/listNav';
import Pagenation from '../component/pagenation';


export default function List(props){
    return<>
        <ListNav />
        <ListContent />
        <Pagenation />
    </>
}
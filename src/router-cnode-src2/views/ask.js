import React from 'react'
import { useLocation } from 'react-router-dom'
import List from '../component/list';
import Pagenation from '../component/pagenation';
import data from '../static/data'


export default function Good(){
    const {pathname} = useLocation();
    const nowData = data[pathname.split("/")[1]];
    const dataLen = nowData.length;
    return<>
        <List data={nowData} />
        <Pagenation dataLen={dataLen} />
    </>
}
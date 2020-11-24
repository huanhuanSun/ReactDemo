import React from 'react';


export default function Index() {
    return <>
        <img className="banner" src={require("../img/img4.png").default} alt=""/>
        <div className="wrap">
            <img src={require("../img/img_1.png").default} alt="1"/>
            <img src={require("../img/img_2.png").default} alt="2" />
        </div>
    </>
}
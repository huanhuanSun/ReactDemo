import React from 'react'
import { Redirect, Route, Switch, useLocation } from 'react-router-dom'
import Header from './component/header'
import Index from './views/index'
import Good from './views/good'
import Notfound from './views/page404'
import Share from './views/share'
import Ask from './views/ask'

import './static/index.css'

export default function App(){
    const {pathname} = useLocation()
    // console.log(pathname)
    return <div className="wrap">
        <Header />

        <Switch>
            <Route path={["/","/index","/index/:page"]} exact  render={()=>{
                // if (pathname==='/') {
                //     <Redirect from="/" to="/index" />
                // }
                return <Index />
            }} />
            <Route path={["/good","/good/:page"]} exact component={Good}/>
            <Route path={["/share","/share/:page"]} exact render={(props)=>{
                return <Share {...props} />
            }} />
            <Route 
                path={["/ask","/ask/:page"]} 
                exact 
                render={(props)=>{
                    return <Ask {...props} />
                }}
            />
            <Route component={Notfound}/>
            <Redirect from="/" to="/index" /> 
        </Switch>
    </div>
}
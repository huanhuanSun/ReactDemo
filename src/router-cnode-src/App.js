import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Header from './component/header'
import Index from './views/index'
import About from './views/about'
import Notfound from './views/page404'
import Join from './views/join'
import List from './views/list'

import './static/index.css'

export default function App(){
    const user ='shh';
    return <div className="wrap">
        <Header />

        <Switch>
            <Route path="/" exact render={()=>{
                return <Index user={user}/>
            }} />
            <Redirect from="/index" to="/" />
            <Route path="/about" exact component={About}/>
            <Route path="/join" exact render={(props)=>{
                return <Join {...props} />
            }} />
            <Route 
                path={["/list","/list/:type","/list/:type/:page"]} 
                exact 
                render={(props)=>{
                    const {params} = props.match;
                    const {type="good",page="1"} = params;
                    const types = ["good","share","ask"];
                    if (types.includes(type) && parseInt(page) + "" === page && page>0) {
                        return <List {...props} />
                    }
                    return <Redirect to="/404" />
                }}
            />
            <Route component={Notfound}/>
        </Switch>
    </div>
}
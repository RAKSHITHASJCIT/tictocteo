import React from 'react'
import profile from '../src/container/profile';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import home from '../src/container/home/home';
export const router= () => (
    <BrowserRouter>
    <Switch>
        <Route exact path='/profile' component={profile}/>
        <Route exact path='/home' component={home}/>
    </Switch>
    </BrowserRouter>
)
   
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import publicRoutes from './public'
import privateRoutes from './protected'
import PublicLayout from '../utils/PublicRoutes'
import PrivateLayout from '../utils/PrivateRoutes'
export default function index() {
    return (
        <BrowserRouter>
            <Switch>
              {publicRoutes.map((route,id)=>(
                  <Route path={route.path} key={id}>
                      <PublicLayout Component ={route.component} />
                  </Route>
              ))}
               {privateRoutes.map((route,id)=>(
                  <Route path={route.path} key={id} >
                      <PrivateLayout Component ={route.component} />
                  </Route>
              ))}
            </Switch>
        </BrowserRouter>
    )
}

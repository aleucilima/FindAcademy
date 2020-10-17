import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import AcademysMap from './pages/AcademysMap'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing }/>
                <Route path="/app" component={ AcademysMap }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
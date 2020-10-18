import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import AcademysMap from './pages/AcademysMap'
import Academy from './pages/Academy'
import CreateAcademy from './pages/CreateAcademy'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Landing }/>
                <Route path="/app" component={ AcademysMap }/>
                <Route path="/academys/create" component={ CreateAcademy }/>
                <Route path="/academys/:id" component={ Academy }/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import AcademysMap from './pages/AcademysMap'

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" component={Landing}/>
            <Route path="/app" component={AcademysMap}/>
        </BrowserRouter>
    )
}

export default Routes
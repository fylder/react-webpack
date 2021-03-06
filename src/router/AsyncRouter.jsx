import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import * as Routers from './AsyncPagers'
import requireAuth from '../user/EnsureLogin'

class AsyncRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/about' component={props => requireAuth(Routers.AsyncAbout(), props)} />
                {/* <Route path='/album' component={props => requireAuth(Routers.AsyncAlbum(), props)} /> */}
                {/* <Route path='/photo' component={props => requireAuth(Routers.AsyncPhoto(), props)} /> */}
                <Route path='/upload' component={props => requireAuth(Routers.AsyncUpload(), props)} />
                <Route path='/statistics' component={props => requireAuth(Routers.AsyncStatistics(), props)} />
            </Switch>
        )
    }
}

export default withRouter(AsyncRouter)

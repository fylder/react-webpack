import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import * as Routers from './AsyncPagers'
import requireAuth from '../user/EnsureLogin'

class AsyncRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Routers.AsyncHome()} />
                <Route exact path='/home' component={Routers.AsyncHome()} />
                <Route path='/login' component={Routers.AsyncLogin()} />
                <Route path='/about' component={props => requireAuth(Routers.AsyncAbout(), props)} />
                <Route path='/album' component={props => requireAuth(Routers.AsyncAlbum(), props)} />
                <Route path='/photo' component={props => requireAuth(Routers.AsyncPhoto(), props)} />
                <Route path='/upload' component={props => requireAuth(Routers.AsyncUpload(), props)} />
            </Switch>
        )
    }
}

export default withRouter(AsyncRouter)

import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './app.less'
import Layout from './layouts/Layout'

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={Layout} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App

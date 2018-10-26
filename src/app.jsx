import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import './app.less'
import Layout from './layouts/Layout'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' component={Layout} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App

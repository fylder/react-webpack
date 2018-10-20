import React, { Component } from 'react'
import './app.less'
import Layout from './layouts/Layout'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Layout />
            </div>
        )
    }
}

export default App

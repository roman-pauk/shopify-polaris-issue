import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import routes from './routes'
import '@shopify/polaris/styles.css'

class App extends Component {
    render() {
        return (
            <Switch>
                {routes.map(route => <Route key={route.name} {...route} /> )}
            </Switch>
        )
    }
}

export default App;

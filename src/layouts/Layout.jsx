import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import * as Routers from '../router/AsyncPagers'
import AsyncRouter from '../router/AsyncRouter'
import HeaderAppBar from '../components/Header'
import Menu from './Menu'
import store from '../redux/store'
import { logout } from '../redux/actions'
import * as TYPE from '../redux/types'
import './layout.less'

const theme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: {
            main: blue.A400
        }
    },
    typography: {
        useNextVariants: true
    }
})

class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div className='layout-box'>
                    <HeaderAppBar className='layout-header' />
                    <Switch>
                        <Route exact path='/' component={Routers.AsyncHome()} />
                        <Route exact path='/home' component={Routers.AsyncHome()} />
                        <Route path='/login' component={Routers.AsyncLogin()} />
                        <Route
                            render={() => (
                                <div className='layout-container'>
                                    <Grid item xs={12} container justify='center'>
                                        <Grid
                                            className='layout-grid'
                                            container
                                            item
                                            xs={12}
                                            sm={10}
                                            md={9}
                                            justify='center'
                                            alignItems='stretch'
                                        >
                                            <Grid item xs={12} sm={1} md={2}>
                                                <Menu />
                                            </Grid>
                                            <Grid item xs={12} sm={8} md={10}>
                                                <Paper className='layout-pager' square>
                                                    <AsyncRouter />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </div>
                            )}
                        />
                    </Switch>
                </div>
            </MuiThemeProvider>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    if (state.user.type === TYPE.USER_RESET) {
        store.dispatch(logout())
        ownProps.history.push('/login')
    }
    return state
}
export default withRouter(connect(mapStateToProps)(Layout))

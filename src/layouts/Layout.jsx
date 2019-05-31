import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import pink from '@material-ui/core/colors/pink'
import blueGrey from '@material-ui/core/colors/blueGrey'
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
            light: pink.A200,
            main: pink[500],
            dark: pink.A700
        },
        text: {
            primary: blueGrey[900],
            secondary: blueGrey[50]
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
                                <React.Fragment>
                                    <CssBaseline />
                                    <Container fixed>
                                        <Grid container>
                                            <Grid item xs={12} sm={1} md={2}>
                                                <Menu />
                                            </Grid>
                                            <Grid item xs={12} sm={11} md={10}>
                                                <Paper className='layout-pager' square>
                                                    <AsyncRouter />
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Container>
                                </React.Fragment>
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

import React from 'react'
import { withRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import pink from '@material-ui/core/colors/pink'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import * as Routers from '../router/AsyncPagers'
import AsyncRouter from '../router/AsyncRouter'
import HeaderAppBar from '../components/Header'
import Menu from './Menu'
import requireAuth from '../user/EnsureLogin'
import store from '../redux/store'
import { logout } from '../redux/actions'
import * as TYPE from '../redux/types'
import './layout.less'
import '../components/less/main.less'
import '../assets/styles/chartlist-material-react.less'

const theme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: {
            light: pink.A200,
            main: '#FFFFFF',
            dark: pink[500]
        },
        action: {
            active: pink[500],
            hover: pink[500],
            selected: pink[500],
            disabled: pink[500]
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
                        <Route path='/album' component={props => requireAuth(Routers.AsyncAlbumPager(), props)} />
                        <Route path='/photo' component={props => requireAuth(Routers.AsyncPhotoPager(), props)} />
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

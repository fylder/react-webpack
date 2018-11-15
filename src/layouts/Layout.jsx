import React from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import requireAuth from '../user/EnsureLogin'
import HeaderAppBar from '../components/Header'
import Home from '../pagers/Home'
import About from '../pagers/About'
import Menu from './Menu'
import Login from '../pagers/Login'
import * as TYPE from '../redux/types'
import Photo from '../pagers/Photo'
import Album from '../pagers/Album'
import Upload from '../pagers/Upload'
import store from '../redux/store'
import { logout } from '../redux/actions'
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
                                        {/* <Redirect to="/home" /> */}
                                        {renderRoutes([
                                            {
                                                component: () => <Home />,
                                                exact: true,
                                                path: '/home'
                                            },
                                            {
                                                component: props => requireAuth(Album, props),
                                                path: '/album'
                                            },
                                            {
                                                component: props => requireAuth(Photo, props),
                                                path: '/photo'
                                            },
                                            {
                                                component: props => requireAuth(Upload, props),
                                                path: '/upload'
                                            },
                                            {
                                                component: props => requireAuth(About, props),
                                                path: '/about'
                                            },
                                            {
                                                component: () => <Login />,
                                                path: '/login'
                                            }
                                        ])}
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </div>
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

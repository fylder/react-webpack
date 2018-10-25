import React from 'react'
// import { Redirect } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink'
import blue from '@material-ui/core/colors/blue'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ButtonAppBar from '../components/Header'
import Home from '../pagers/Home'
import About from '../pagers/About'
import './layout.less'
import Menu from './Menu'

const theme = createMuiTheme({
    palette: {
        primary: pink,
        secondary: {
            main: blue.A400
        }
    }
})

class Layout extends React.Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <ButtonAppBar />
                <Paper className='layout-container' square={false}>
                    <Grid container spacing={16}>
                        <Grid item xs={4} sm={3}>
                            <Menu />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            {/* <Redirect to="/home" /> */}
                            {renderRoutes([
                                {
                                    component: () => <Home />,
                                    exact: true,
                                    path: '/home'
                                },
                                {
                                    component: () => <About />,
                                    path: '/about'
                                }
                            ])}
                        </Grid>
                    </Grid>
                </Paper>
            </MuiThemeProvider>
        )
    }
}
export default Layout

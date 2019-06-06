import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import * as TYPE from '../redux/types'
import UserButton from './UserButton'
import store from '../redux/store'

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
}
class HeaderAppBar extends React.Component {
    constructor(props) {
        super(props)
    }

    // 登录
    handlerLogin = () => {
        this.props.history.push('/login')
    }

    // 跳转
    handlerHome = () => {
        if (store.getState().user.username || window.localStorage.username) {
            this.props.history.push('/album')
        } else {
            this.props.history.push('/')
        }
    }

    render() {
        const { classes } = this.props

        let btn
        this.state = {
            username: this.props.username
        }
        if (store.getState().user.username) {
            btn = <UserButton username={store.getState().user.username} />
        } else if (window.localStorage.username) {
            btn = <UserButton username={window.localStorage.username} />
        } else {
            btn = (
                <Button color='inherit' onClick={this.handlerLogin.bind(this)}>
                    <Typography color='inherit' className='font-text-none'>
                        Login
                    </Typography>
                </Button>
            )
        }

        return (
            <AppBar position='static'>
                <Toolbar>
                    <IconButton className={classes.menuButton} color='inherit' aria-label='Menu'>
                        <MenuIcon />
                    </IconButton>
                    <Box display='inline' className={classes.grow}>
                        <Button color='inherit' onClick={this.handlerHome.bind(this)}>
                            <Typography variant='h6' color='inherit' className='font-text-capitalize'>
                                Fylder
                            </Typography>
                        </Button>
                    </Box>
                    {btn}
                </Toolbar>
            </AppBar>
        )
    }
}

HeaderAppBar.propTypes = {
    classes: PropTypes.object.isRequired
}
const mapStateToProps = (state /** ownProps */) => {
    if (state.user.type === TYPE.USER_LOGIN || state.user.type === TYPE.USER_LOGOUT) {
        return { username: state.user.username }
    }
    return state
}

export default withStyles(styles)(withRouter(connect(mapStateToProps)(HeaderAppBar)))

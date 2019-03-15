import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Typography from '@material-ui/core/Typography'
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import { stringify } from 'qs'
import store from '../redux/store'
import { login } from '../redux/actions'
import config from '../config/config'
import './loginForm.less'

class LoginForm extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)

        this.state = {
            open: false,
            msg: '',
            username: 'fylder',
            password: '123'
        }
    }

    handleTouchTapLogin = async () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        const body = {
            username: data.username,
            password: data.password,
            grant_type: 'password'
        }
        fetchPolyfill(`${config.host}/user/login`, {
            mode: 'cors',
            // credentials: 'include',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                Authorization: 'Basic ZnlsZGVyOm15X3NlY3JldA=='
            },
            // body: `username=${data.username}&password=${data.password}&grant_type=password`
            body: stringify(body)
        })
            .then(response => response.json())
            .then(json => {
                const accessToken = json.access_token
                if (accessToken) {
                    window.localStorage.accessToken = accessToken
                    this.setState({
                        open: true,
                        msg: `save token:${accessToken}`
                    })
                    store.dispatch(login(data.username))
                } else {
                    this.setState({
                        open: true,
                        msg: '账号密码不对'
                    })
                }
            })
            .catch(ex => {
                this.setState({
                    open: true,
                    msg: `请求异常:${ex}`
                })
            })
    }

    handleUsernameChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handlePasswordChange = e => {
        this.setState({
            password: e.target.value
        })
    }

    handleTipClose = () => {
        this.setState({
            open: false
        })
    }

    handleClickBtn = () => {
        const data = {
            username: this.state.username,
            password: this.state.password
        }
        store.dispatch(login(data.username))
    }

    render() {
        return (
            <Card className='login-container' elevation={8}>
                <Typography variant='h5' component='h2'>
                    user login
                </Typography>
                <div className='login-username'>
                    <TextField
                        id='username'
                        label='First Name'
                        fullWidth
                        value={this.state.username}
                        onChange={this.handleUsernameChange}
                    />
                </div>
                <br />
                <TextField
                    id='password'
                    label='Password'
                    fullWidth
                    type='password'
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <br />
                <Button
                    id='login-submit'
                    variant='contained'
                    size='medium'
                    fullWidth
                    color='primary'
                    onClick={this.handleTouchTapLogin.bind(this)}
                    // icon={<FontIcon className='muidocs-icon-custom-github' />}
                >
                    LOGIN
                </Button>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    open={this.state.open}
                    autoHideDuration={3000}
                    onClose={this.handleTipClose}
                    ContentProps={{
                        'aria-describedby': 'message-id'
                    }}
                    message={<span id='message-id'>{this.state.msg}</span>}
                />
            </Card>
        )
    }
}

export default withRouter(LoginForm)

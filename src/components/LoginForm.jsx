import React from 'react'
import { withRouter } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { login } from '../redux/actions'
import store from '../redux/store'
import './loginForm.less'

class LoginForm extends React.Component {
    constructor(props, context) {
        super(props, context)
        // this.handleTouchTapLogin = this.handleTouchTapLogin.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleRequestClose = this.handleRequestClose.bind(this)

        this.state = {
            open: false,
            msg: '',
            username: 'fylder',
            password: ''
        }
    }

    // handleTouchTapLogin = () => {
    //     const data = {
    //         username: this.state.username,
    //         password: this.state.password
    //     }

    //     fetch('user/login_account', {
    //         method: 'POST',
    //         credentials: 'include',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    //         },
    //         body: `username=${data.username}&password=${data.password}`
    //     })
    //         .then(response => response.json())
    //         .then(json => {
    //             console.log('parsed json', json)
    //             if (json.result === 1) {
    //                 this.setState({
    //                     open: true,
    //                     msg: '登录成功'
    //                 })
    //                 setTimeout(() => {
    //                     window.location.href = '/photo/home'
    //                 }, 700)
    //             } else {
    //                 this.setState({
    //                     open: true,
    //                     msg: '登录失败'
    //                 })
    //             }
    //         })
    //         .catch(ex => {
    //             console.log('ex:', ex)
    //             this.setState({
    //                 open: true,
    //                 msg: `请求异常:${ex}`
    //             })
    //         })
    // }

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

    handleRequestClose = () => {
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
                    onClick={this.handleClickBtn.bind(this)}
                    // icon={<FontIcon className='muidocs-icon-custom-github' />}
                >
                    LOGIN
                </Button>
            </Card>
        )
    }
}

export default withRouter(LoginForm)

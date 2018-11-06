import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import LoginForm from '../components/LoginForm'
import * as TYPE from '../redux/types'

class Login extends React.Component {
    render() {
        return (
            <Grid container justify='center'>
                <Grid item xs={10} sm={8} md={4}>
                    <LoginForm />
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    if (state.user.type === TYPE.USER_LOGIN) {
        ownProps.history.push('/home')
    }
    return state
}

export default withRouter(connect(mapStateToProps)(Login))

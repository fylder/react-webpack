import React from 'react'
import Grid from '@material-ui/core/Grid'
import LoginForm from '../components/LoginForm'

class Login extends React.Component {
    render() {
        return (
            <Grid container justify='center'>
                <Grid item xs={10} sm={8} md={6}>
                    <LoginForm />
                </Grid>
            </Grid>
        )
    }
}

export default Login

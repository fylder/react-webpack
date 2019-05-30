import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import LoginForm from '../components/LoginForm'
import * as TYPE from '../redux/types'

class Login extends React.Component {
    render() {
        return (
            <Container maxWidth='xs'>
                <LoginForm />
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    if (state.user.type === TYPE.USER_LOGIN) {
        ownProps.history.push('/album')
    }
    return state
}

export default withRouter(connect(mapStateToProps)(Login))

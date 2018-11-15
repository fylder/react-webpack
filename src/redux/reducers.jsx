import { combineReducers } from 'redux'
import * as TYPE from './types'

const user = (state = { username: '' }, action) => {
    switch (action.type) {
        case TYPE.USER_LOGIN:
            window.localStorage.setItem('username', action.username)
            return action
        case TYPE.USER_LOGOUT:
            window.localStorage.removeItem('accessToken')
            window.localStorage.removeItem('username')
            return action
        case TYPE.USER_RESET:
            window.localStorage.removeItem('accessToken')
            window.localStorage.removeItem('username')
            return action
        default:
            return state
    }
}

const todoApp = combineReducers({
    user
})
export default todoApp

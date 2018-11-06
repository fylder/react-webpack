import { combineReducers } from 'redux'
import * as TYPE from './types'

const user = (state = { username: '' }, action) => {
    switch (action.type) {
        case TYPE.USER_LOGIN:
            return action
        case TYPE.USER_LOGOUT:
            return action
        default:
            return state
    }
}

const todoApp = combineReducers({
    user
})
export default todoApp

import { combineReducers } from 'redux'
import { LOGIN, LOGOUT, ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions'

const user = (state = { username: '' }, action) => {
    switch (action.type) {
        case LOGIN:
            return action
        case LOGOUT:
            return action
        default:
            return state
    }
}

const todos = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    action
                }
            ]
        case UPDATE_TODO:
            return [
                ...state,
                {
                    action
                }
            ]

        default:
            return state
    }
}

const delTodo = (state = [], action) => {
    switch (action.type) {
        case DELETE_TODO:
            return [
                {
                    action
                }
            ]
        default:
            return state
    }
}

const todoApp = combineReducers({
    user,
    todos,
    delTodo
})
export default todoApp

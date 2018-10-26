export const ADD_TODO = 'ADD_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = msg => ({
    type: ADD_TODO,
    msg
})

export const updateTodo = msg => ({
    type: UPDATE_TODO,
    msg
})
export const deleteTodo = msg => ({
    type: DELETE_TODO,
    msg
})

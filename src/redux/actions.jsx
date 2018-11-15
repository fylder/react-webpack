import { USER_LOGIN, USER_LOGOUT, USER_RESET } from './types'

export const login = username => ({
    type: USER_LOGIN,
    username
})
export const logout = username => ({
    type: USER_LOGOUT,
    username
})

export const reset = username => ({
    type: USER_RESET,
    username
})

import { USER_LOGIN, USER_LOGOUT } from './types'

export const login = username => ({
    type: USER_LOGIN,
    username
})
export const logout = username => ({
    type: USER_LOGOUT,
    username
})

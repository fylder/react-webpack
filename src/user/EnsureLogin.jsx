import React from 'react'
import { Redirect } from 'react-router-dom'
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import store from '../redux/store'
import { login, logout } from '../redux/actions'

const checkLogin = accessToken =>
    fetchPolyfill('http://127.0.0.1:7001/user/authenticate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: `Bearer ${accessToken}`
        }
    })
        .then(response => response.json())
        .then(json => {
            let access = false
            if (json.msg) {
                // 登录有效
                store.dispatch(login(json.username))
                access = true
            } else {
                // 登录失效
                store.dispatch(logout(''))
                access = false
            }
            return access
        })
        .catch(ex => {
            console.log('ex:', ex)
            return false
        })

// 登录验证
const requireAuth = (Layout, props) => {
    const state = store.getState()
    if (!state.user.username) {
        const ACCESS_TOKEN = window.localStorage.accessToken
        // 首次进入登录检测
        if (window.localStorage.username) {
            store.dispatch(login(window.localStorage.username))
        }
        if (ACCESS_TOKEN) {
            const access = checkLogin(ACCESS_TOKEN)
            if (access) {
                return <Layout {...props} />
            }
            if (!window.localStorage.username) {
                // Invalid token: access token is invalid
                return <Redirect to='/login' />
            }
        } else {
            return <Redirect to='/login' />
        }
        if (window.localStorage.username) {
            store.dispatch(login(window.localStorage.username))
        } else {
            return <Redirect to='/login' />
        }
    }
    if (!window.localStorage.username) {
        store.dispatch(logout(''))
        return <Redirect to='/login' />
    }
    return <Layout {...props} />
}

export default requireAuth

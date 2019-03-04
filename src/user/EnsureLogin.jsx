import React from 'react'
import { Redirect } from 'react-router-dom'
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import store from '../redux/store'
import config from '../config/config'
import { login, logout, reset } from '../redux/actions'

const checkLogin = accessToken =>
    fetchPolyfill(`${config.host}/user/authenticate`, {
        method: 'POST',
        mode: 'cors',
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
                // Invalid token: access token is invalid
                // 登录失效
                store.dispatch(reset())
                access = false
            }
            return access
        })
        .catch(ex => {
            console.log('ex:', ex)
            store.dispatch(reset())
            return false
        })

// 登录验证
const requireAuth = (Layout, props) => {
    const state = store.getState()
    if (state.user.username) {
        if (!window.localStorage.username) {
            store.dispatch(logout())
            return <Redirect to='/login' />
        }
        return <Layout {...props} />
    }
    // 首次进入登录检测
    if (window.localStorage.username) {
        store.dispatch(login(window.localStorage.username))
    }
    const ACCESS_TOKEN = window.localStorage.accessToken
    if (ACCESS_TOKEN) {
        checkLogin(ACCESS_TOKEN) // 检测访问口令失效
    } else {
        return <Redirect to='/login' />
    }
    return <Layout {...props} />
}

export default requireAuth

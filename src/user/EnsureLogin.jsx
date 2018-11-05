import React from 'react'
import { Redirect } from 'react-router-dom'
import store from '../redux/store'

// 登录验证
const requireAuth = (Layout, props) => {
    const state = store.getState()
    if (!state.user.username) {
        // 未登录
        return <Redirect to='/login' />
    }
    return <Layout {...props} />
}

export default requireAuth

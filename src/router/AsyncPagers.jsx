import Loadable from 'react-loadable'
import Loading from '../pagers/Loading'

const delayTime = 300 // 0.3 seconds

export const AsyncHome = () =>
    Loadable({
        loader: () => import('../pagers/Home'),
        loading: Loading,
        delay: delayTime
    })

export const AsyncLogin = () =>
    Loadable({
        loader: () => import('../pagers/Login'),
        loading: Loading,
        delay: delayTime
    })

export const AsyncAbout = () =>
    Loadable({
        loader: () => import('../pagers/About'),
        loading: Loading,
        delay: delayTime
    })

export const AsyncPhoto = () =>
    Loadable({
        loader: () => import('../pagers/Photo'),
        loading: Loading,
        delay: delayTime
    })

export const AsyncAlbum = () =>
    Loadable({
        loader: () => import('../pagers/Album'),
        loading: Loading,
        delay: delayTime
    })

export const AsyncUpload = () =>
    Loadable({
        loader: () => import('../pagers/Upload'),
        loading: Loading,
        delay: delayTime
    })

export const AsyncStatistics = () =>
    Loadable({
        loader: () => import('../pagers/Statistics'),
        loading: Loading,
        delay: delayTime
    })

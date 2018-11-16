import Loadable from 'react-loadable'
import Home from '../pagers/Home'

export const ahh = '123'

export const AsyncLogin = () =>
    Loadable({
        loader: () => import('../pagers/Login'),
        loading: Home
    })

export const AsyncAbout = () =>
    Loadable({
        loader: () => import('../pagers/About'),
        loading: Home
    })

export const AsyncPhoto = () =>
    Loadable({
        loader: () => import('../pagers/Photo'),
        loading: Home
    })

export const AsyncAlbum = () =>
    Loadable({
        loader: () => import('../pagers/Album'),
        loading: Home
    })

export const AsyncUpload = () =>
    Loadable({
        loader: () => import('../pagers/Upload'),
        loading: Home
    })

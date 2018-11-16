import React from 'react'
import { renderRoutes } from 'react-router-config'
import { withRouter } from 'react-router-dom'
import requireAuth from '../user/EnsureLogin'
import Home from '../pagers/Home'
import Login from '../pagers/Login'
import About from '../pagers/About'
import Album from '../pagers/Album'
import Photo from '../pagers/Photo'
import Upload from '../pagers/Upload'

class RenderRouter extends React.Component {
    render() {
        return (
            <div>
                {renderRoutes([
                    {
                        component: () => <Home />,
                        exact: true,
                        path: '/home'
                    },
                    {
                        component: props => requireAuth(Album, props),
                        path: '/album'
                    },
                    {
                        component: props => requireAuth(Photo, props),
                        path: '/photo'
                    },
                    {
                        component: props => requireAuth(Upload, props),
                        path: '/upload'
                    },
                    {
                        component: props => requireAuth(About, props),
                        path: '/about'
                    },
                    {
                        component: () => <Login />,
                        path: '/login'
                    }
                ])}
            </div>
        )
    }
}

export default withRouter(RenderRouter)

import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import GalleryPhoto from '../components/GalleryPhoto'

class Photo extends React.Component {
    render() {
        return (
            <Container fixed>
                <Typography variant='h5' color='inherit' noWrap>
                    gallery photo
                </Typography>
                <GalleryPhoto />
            </Container>
        )
    }
}

export default Photo

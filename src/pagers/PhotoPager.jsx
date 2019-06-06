import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MenuBreadcrumbs from '../components/MenuBreadcrumbs'
import GalleryPhoto from '../components/GalleryPhoto'

class PhotoPager extends React.Component {
    render() {
        return (
            <Container fixed>
                <Grid container>
                    <Paper className='layout-pager' square>
                        <MenuBreadcrumbs firstItemName='Home' secondItemName='Album' thirdItemName='Photo' />
                        <Container fixed>
                            <Paper elevation={6} className='header-card'>
                                <Typography variant='h5' color='secondary'>
                                    gallery photo
                                </Typography>
                            </Paper>
                            <GalleryPhoto />
                        </Container>
                    </Paper>
                </Grid>
            </Container>
        )
    }
}

export default PhotoPager

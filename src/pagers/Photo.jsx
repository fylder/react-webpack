import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import GalleryPhoto from '../components/GalleryPhoto'

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
})

class Photo extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={2}>
                    <Typography className={styles.title} variant='h6' color='inherit' noWrap>
                        gallery photo
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <GalleryPhoto />
                </Grid>
            </Grid>
        )
    }
}

export default Photo

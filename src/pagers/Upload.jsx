import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import UploadPic from '../components/UploadPic'

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
})

class Upload extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={12}>
                    <Typography className={styles.title} variant='h6' color='inherit' noWrap>
                        upload pic
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={8} md={4}>
                    <UploadPic />
                </Grid>
            </Grid>
        )
    }
}

export default Upload

import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Albums from '../components/Albums'

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
})

class Album extends React.Component {
    render() {
        return (
            <Grid container>
                <Grid item xs={12} sm={2}>
                    <Typography className={styles.title} variant='h6' color='inherit' noWrap>
                        photo
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Albums />
                </Grid>
            </Grid>
        )
    }
}

export default Album

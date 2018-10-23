import React from 'react'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import ImgCard from '../components/ImgCard'
import Ahh from '../components/Ahh'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
})

class Home extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6} sm={3} />
                    <Grid item xs={6} sm={3}>
                        <ImgCard />
                    </Grid>{' '}
                    <Grid item xs={6} sm={3}>
                        <Paper className={styles.paper}>
                            <Ahh />
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home

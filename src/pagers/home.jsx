import React, { Component } from 'react'
import ImgCard from '../components/ImgCard'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        // padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={6} sm={3} />
                    <Grid item xs={6} sm={3}>
                        <ImgCard />
                    </Grid>{' '}
                    <Grid item xs={6} sm={3}>
                        <Paper className={styles.paper} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Home

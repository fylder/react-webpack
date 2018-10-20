import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ButtonAppBar from '../components/Header'
import Home from '../pagers/home'

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
})

class Layout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <ButtonAppBar />
                <Grid container spacing={24}>
                    <Grid item xs />
                    <Grid item xs={8}>
                        <Paper className={styles.paper}>
                            <Home />
                        </Paper>
                    </Grid>
                    <Grid item xs />
                </Grid>
            </div>
        )
    }
}
export default Layout

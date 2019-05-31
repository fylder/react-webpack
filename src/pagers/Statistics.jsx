import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import pink from '@material-ui/core/colors/pink'

const styles = {
    headerCard: {
        paddingLeft: 24,
        paddingTop: 8,
        paddingBottom: 8,
        paddingRight: 24,
        width: 'fit-content',
        background: pink[500],
        position: 'relative',
        top: 24,
        left: 12
    },
    pager: {
        paddingLeft: 24,
        paddingTop: 32,
        paddingBottom: 24,
        paddingRight: 24,
        background: pink
    }
}

// @withStyles(styles)
class Statistics extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes } = this.props
        return (
            <Container fixed>
                <Paper elevation={6} className={classes.headerCard}>
                    <Typography variant='h5' color='textSecondary'>
                        Statistics
                    </Typography>
                </Paper>
                <Paper className={classes.pager}>
                    <span>fylder</span>
                </Paper>
            </Container>
        )
    }
}

export default withStyles(styles)(Statistics)

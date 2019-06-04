import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import pink from '@material-ui/core/colors/pink'
import ChartistGraph from 'react-chartist'
import { dailySalesChart, lineChart, testChart, testChart2 } from '../model/charts'
import '../assets/styles/chartlist-material-react.less'

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
    title: {
        padding: 8
    },
    pager: {
        paddingLeft: 24,
        paddingTop: 32,
        paddingBottom: 24,
        paddingRight: 24,
        background: pink
    },
    chartCard: {
        margin: 8,
        padding: 8,
        width: 'fit-content',
        background: pink.A200
    }
}

class Chart extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { classes } = this.props
        const datas = [dailySalesChart, lineChart, dailySalesChart, testChart, testChart2]
        return (
            <div>
                <Paper elevation={6} className={classes.headerCard}>
                    <Typography variant='h5' color='textSecondary'>
                        Statistics
                    </Typography>
                </Paper>
                <Paper className={classes.pager}>
                    <Typography variant='h6' color='textPrimary' className={classes.title}>
                        fylder
                    </Typography>
                    <Grid container>
                        {datas.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Paper elevation={2} className={classes.chartCard}>
                                        <ChartistGraph
                                            className='ct-chart'
                                            data={item.data}
                                            type='Line'
                                            options={item.options}
                                            listener={item.animation}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Paper>
            </div>
        )
    }
}
Chart.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Chart)

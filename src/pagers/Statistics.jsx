import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import pink from '@material-ui/core/colors/pink'
import ChartistGraph from 'react-chartist'
import { dailySalesChart, lineChart, testChart, testChart2 } from '../model/charts'

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
                    <Typography variant='h6' color='textPrimary' className={classes.title}>
                        fylder
                    </Typography>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4}>
                            <ChartistGraph
                                className='ct-chart'
                                data={dailySalesChart.data}
                                type='Line'
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ChartistGraph
                                data={lineChart.lineChartData}
                                options={lineChart.lineChartOptions}
                                type='Line'
                                listener={dailySalesChart.animation}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ChartistGraph
                                className='ct-chart'
                                data={dailySalesChart.data}
                                type='Line'
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ChartistGraph
                                className='ct-chart'
                                data={testChart.testData}
                                type='Line'
                                options={testChart.options}
                                // listener={testChart.animation}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <ChartistGraph
                                className='ct-chart'
                                data={testChart2.testData}
                                type='Line'
                                options={testChart2.options}
                                listener={testChart2.animation}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        )
    }
}

export default withStyles(styles)(Statistics)

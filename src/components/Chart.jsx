import React from 'react'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import BarChart from '@material-ui/icons/BarChart'
import ChartistGraph from 'react-chartist'
import { dailySalesChart, lineChart, testChart, testChart2 } from '../model/charts'
import '../assets/styles/chartlist-material-react.less'
import './less/main.less'
import './less/chart.less'

class Chart extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    handlerDetail = () => {
        this.props.history.push('/photo')
    }

    render() {
        const datas = [dailySalesChart, lineChart, dailySalesChart, testChart, testChart2]
        return (
            <div>
                <Paper elevation={6} className='header-card'>
                    <Typography variant='h5' color='textSecondary'>
                        Statistics
                    </Typography>
                </Paper>
                <Paper className='chart-pager'>
                    <Typography
                        variant='h6'
                        color='textPrimary'
                        className={classNames('chart-title', 'font-text-capitalize')}
                    >
                        fylder
                    </Typography>
                    <Grid container>
                        {datas.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Box display='flex' justifyContent='center'>
                                        <Box component='div' display='inline' className='chart-card-lay'>
                                            <Paper elevation={2} className='chart-card'>
                                                <ChartistGraph
                                                    className='ct-chart'
                                                    data={item.data}
                                                    type='Line'
                                                    options={item.options}
                                                    listener={item.animation}
                                                />
                                            </Paper>
                                            <div className='chart-lay'>
                                                <div className='chart-edit'>
                                                    <Button
                                                        variant='contained'
                                                        color='primary'
                                                        size='small'
                                                        className='font-text-capitalize'
                                                        onClick={this.handlerDetail.bind(this)}
                                                    >
                                                        chart
                                                        <BarChart />
                                                    </Button>
                                                </div>
                                            </div>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Paper>
            </div>
        )
    }
}

export default withRouter(Chart)

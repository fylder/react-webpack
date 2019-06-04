import React from 'react'
import Container from '@material-ui/core/Container'
import Chart from '../components/Chart'

// @withStyles(styles)
class Statistics extends React.Component {
    render() {
        return (
            <Container fixed>
                <Chart />
            </Container>
        )
    }
}

export default Statistics

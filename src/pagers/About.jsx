import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import EnhancedTable from '../components/EnhancedTable'

class About extends React.Component {
    render() {
        return (
            <Container fixed>
                <Typography variant='h5' gutterBottom color='inherit'>
                    about
                </Typography>
                <EnhancedTable />
            </Container>
        )
    }
}

export default About

import React from 'react'
import Container from '@material-ui/core/Container'
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
            <Container fixed>
                <Typography className={styles.title} variant='h5' color='inherit' noWrap>
                    photo
                </Typography>
                <Albums />
            </Container>
        )
    }
}

export default Album

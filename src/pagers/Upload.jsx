import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import UploadPic from '../components/UploadPic'

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
})

class Upload extends React.Component {
    render() {
        return (
            <Container fixed>
                <Typography className={styles.title} variant='h5' color='inherit' noWrap>
                    upload pic
                </Typography>
                <UploadPic />
            </Container>
        )
    }
}

export default Upload

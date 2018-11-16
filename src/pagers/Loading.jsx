import React from 'react'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
})

class Loading extends React.Component {
    render() {
        return (
            <Typography className={styles.title} variant='h6' color='inherit' noWrap>
                loading...
            </Typography>
        )
    }
}

export default Loading

import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
    lay: { padding: '2px' },
    media: { objectFit: 'cover' }
}
class ImgCard extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

    handleOnClick = () => {
        this.props.history.push('/photo')
    }

    render() {
        const { classes } = this.props
        const cardStyles = {
            card: {}
        }

        if (this.props.maxWidth > 0) {
            cardStyles.card = {
                maxWidth: this.props.maxWidth
            }
        } else {
            cardStyles.card = {
                maxWidth: 'auto'
            }
        }
        return (
            <div className={classes.lay}>
                <Card style={cardStyles.card}>
                    <CardActionArea onClick={this.handleOnClick}>
                        <CardMedia
                            component='img'
                            alt='Contemplative Reptile'
                            className={classes.media}
                            height='140'
                            image='https://photo.tuchong.com/4430064/l/217842320.webp'
                            title='Contemplative Reptile'
                        />
                        <CardContent>
                            <Typography gutterBottom variant='h5' component='h2'>
                                fylder
                            </Typography>
                            <Typography component='p'>ahhh</Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size='small' color='primary'>
                            Share
                        </Button>
                        <Button size='small' color='primary'>
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
ImgCard.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(withRouter(ImgCard))

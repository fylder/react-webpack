import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ImgCard from './ImgCard'

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        // width: 500,
        // height: 450,
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)'
    },
    icon: {
        color: 'white'
    }
})

const albums = [
    {
        id: 1,
        img: 'https://photo.tuchong.com/4430064/l/217842320.webp',
        featured: false,
        cols: 1,
        rows: 1
    },
    {
        id: 2,
        img: 'https://photo.tuchong.com/4430064/l/217842320.webp',
        featured: false,
        cols: 1,
        rows: 1
    },
    {
        id: 3,
        img: 'https://photo.tuchong.com/4430064/l/217842320.webp',
        featured: false,
        cols: 1,
        rows: 1
    },
    {
        id: 4,
        img: 'https://photo.tuchong.com/4430064/l/217842320.webp',
        featured: false,
        cols: 3,
        rows: 1
    },
    {
        id: 5,
        img: 'https://photo.tuchong.com/4430064/l/217842320.webp',
        featured: false,
        cols: 2,
        rows: 1
    },
    {
        id: 6,
        img: 'https://photo.tuchong.com/4430064/l/217842320.webp',
        featured: false,
        cols: 1,
        rows: 1
    }
]

class Albums extends React.Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { classes } = this.props
        return (
            <div>
                <GridList cellHeight={340} cols={3} spacing={12} className={classes.gridList}>
                    {albums.map(tile => (
                        <GridListTile key={tile.id} cols={tile.cols} rows={tile.rows}>
                            <ImgCard albumId={tile.id} />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
        )
    }
}
Albums.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Albums)

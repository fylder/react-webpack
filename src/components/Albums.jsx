import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ImgCard from './ImgCard'

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
        return (
            <GridList cellHeight={340} cols={3} spacing={12}>
                {albums.map(tile => (
                    <GridListTile key={tile.id} cols={tile.cols} rows={tile.rows}>
                        <ImgCard albumId={tile.id} />
                    </GridListTile>
                ))}
            </GridList>
        )
    }
}

export default Albums

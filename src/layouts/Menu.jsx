import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LinkedCamera from '@material-ui/icons/LinkedCamera'
import Collections from '@material-ui/icons/Collections'
import Photo from '@material-ui/icons/Photo'
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate'
import Bookmarks from '@material-ui/icons/Bookmarks'

const styles = theme => ({
    menuItem: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& $primary, & $icon': {
                color: theme.palette.common.white
            }
        }
    },
    primary: {},
    icon: {}
})

class Menu extends React.Component {
    constructor(props) {
        super(props)
        // this.handleClose = this.handleClose.bind(this)
    }

    handleShow = page => {
        if (page === 1) {
            this.props.history.push('/home')
        } else if (page === 2) {
            this.props.history.push('/album')
        } else if (page === 3) {
            this.props.history.push('/photo')
        } else if (page === 4) {
            this.props.history.push('/upload')
        } else if (page === 5) {
            this.props.history.push('/about')
        } else {
            this.props.history.push('/login')
        }
    }

    render() {
        return (
            <Paper square>
                <MenuList>
                    <MenuItem className={styles.menuItem} onClick={this.handleShow.bind(this, 1)}>
                        <ListItemIcon className={styles.icon}>
                            <Bookmarks />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: styles.primary }} inset primary='Home' />
                    </MenuItem>
                    <MenuItem className={styles.menuItem} onClick={this.handleShow.bind(this, 2)}>
                        <ListItemIcon className={styles.icon}>
                            <Collections />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: styles.primary }} inset primary='Album' />
                    </MenuItem>
                    <MenuItem className={styles.menuItem} onClick={this.handleShow.bind(this, 3)}>
                        <ListItemIcon className={styles.icon}>
                            <Photo />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: styles.primary }} inset primary='Photo' />
                    </MenuItem>
                    <MenuItem className={styles.menuItem} onClick={this.handleShow.bind(this, 4)}>
                        <ListItemIcon className={styles.icon}>
                            <AddPhotoAlternate />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: styles.primary }} inset primary='Upload' />
                    </MenuItem>
                    <MenuItem className={styles.menuItem} onClick={this.handleShow.bind(this, 5)}>
                        <ListItemIcon className={styles.icon}>
                            <LinkedCamera />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: styles.primary }} inset primary='About' />
                    </MenuItem>
                </MenuList>
            </Paper>
        )
    }
}

export default withRouter(Menu)
// export default Menu

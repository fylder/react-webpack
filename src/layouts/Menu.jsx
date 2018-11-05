import React from 'react'
import { withRouter } from 'react-router-dom'
import MenuList from '@material-ui/core/MenuList'
import MenuItem from '@material-ui/core/MenuItem'
import Paper from '@material-ui/core/Paper'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import LinkedCamera from '@material-ui/icons/LinkedCamera'
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

import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import Paper from '@material-ui/core/Paper'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import store from '../redux/store'
import { logout } from '../redux/actions'

const styles = () => ({
    btn: {
        textTransform: 'inherit'
    }
})

class UserButton extends React.Component {
    state = {
        anchorEl: null
    }

    constructor(porps) {
        super(porps)
    }

    handleClick = event => {
        this.setState({
            anchorEl: event.currentTarget
        })
    }

    handleClose = () => {
        this.setState({
            anchorEl: null
        })
    }

    handleLogout = () => {
        store.dispatch(logout())
        this.props.history.push('/home')
    }

    render() {
        const { classes } = this.props
        const { anchorEl } = this.state
        const open = Boolean(anchorEl)
        return (
            <div>
                <Button
                    aria-owns={open ? 'simple-popper' : undefined}
                    aria-haspopup='true'
                    // variant='contained'
                    color='inherit'
                    className={classes.btn}
                    onClick={this.handleClick.bind(this)}
                >
                    {this.props.username}
                </Button>
                <Popover
                    id='simple-popper'
                    open={open}
                    // open
                    anchorEl={anchorEl}
                    onClose={this.handleClose.bind(this)}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center'
                    }}
                >
                    <Paper>
                        <ClickAwayListener onClickAway={this.handleClose.bind(this)}>
                            <MenuList>
                                <MenuItem>Profile</MenuItem>
                                <MenuItem>My account</MenuItem>
                                <MenuItem onClick={this.handleLogout.bind(this)}>Logout</MenuItem>
                            </MenuList>
                        </ClickAwayListener>
                    </Paper>
                </Popover>
            </div>
        )
    }
}

export default withStyles(styles)(withRouter(UserButton))

import React from 'react'
import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import Link from '@material-ui/core/Link'
import HomeIcon from '@material-ui/icons/Home'
import WhatshotIcon from '@material-ui/icons/Whatshot'
import BarChart from '@material-ui/icons/BarChart'

const styles = theme => ({
    root: {
        padding: theme.spacing(1, 2)
    },
    link: {
        display: 'flex'
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20
    }
})

class MenuBreadcrumbs extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            firstItem: this.props.firstItemName,
            secondItem: this.props.secondItemName,
            thirdItem: this.props.thirdItemName
        }
    }

    handleClick = (event, path) => {
        event.preventDefault()
        if (path === 'first') {
            this.props.history.push('/statistics')
        } else if (path === 'second') {
            this.props.history.push('/album')
        }
    }

    render() {
        const { classes } = this.props
        let content
        if (this.state.thirdItem) {
            content = (
                <Breadcrumbs aria-label='Breadcrumb'>
                    <Link
                        color='inherit'
                        href='/'
                        onClick={event => this.handleClick(event, 'first')}
                        className={classes.link}
                    >
                        <HomeIcon className={classes.icon} />
                        {this.state.firstItem}
                    </Link>
                    <Link
                        color='inherit'
                        href='/getting-started/installation/'
                        onClick={event => this.handleClick(event, 'second')}
                        className={classes.link}
                    >
                        <WhatshotIcon className={classes.icon} />
                        {this.state.secondItem}
                    </Link>
                    <Typography color='textPrimary' className={classes.link}>
                        <BarChart className={classes.icon} />
                        {this.state.thirdItem}
                    </Typography>
                </Breadcrumbs>
            )
        } else if (this.state.secondItem) {
            content = (
                <Breadcrumbs aria-label='Breadcrumb'>
                    <Link
                        color='inherit'
                        href='/'
                        onClick={event => this.handleClick(event, 'first')}
                        className={classes.link}
                    >
                        <HomeIcon className={classes.icon} />
                        {this.state.firstItem}
                    </Link>
                    <Typography color='textPrimary' className={classes.link}>
                        <BarChart className={classes.icon} />
                        {this.state.secondItem}
                    </Typography>
                </Breadcrumbs>
            )
        } else {
            content = (
                <Breadcrumbs aria-label='Breadcrumb'>
                    <Typography color='textPrimary' className={classes.link}>
                        <BarChart className={classes.icon} />
                        {this.state.firstItem}
                    </Typography>
                </Breadcrumbs>
            )
        }
        return (
            <Paper elevation={0} className={classes.root}>
                {content}
            </Paper>
        )
    }
}

export default withStyles(styles)(withRouter(MenuBreadcrumbs))

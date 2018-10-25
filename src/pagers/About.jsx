import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import EnhancedTable from '../components/Table'

const styles = theme => ({
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block'
        }
    }
})

class About extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={2} sm={2}>
                        <Typography className={styles.title} variant="h6" color="inherit" noWrap>
                            about
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <EnhancedTable />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default About

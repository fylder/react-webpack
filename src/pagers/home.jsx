import React from 'react'
import Grid from '@material-ui/core/Grid'
import ImgCard from '../components/ImgCard'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={2} sm={2} />
                    <Grid item xs={12} sm={6}>
                        <ImgCard />
                    </Grid>
                    <Grid item xs={2} sm={2} />
                </Grid>
            </div>
        )
    }
}

export default Home

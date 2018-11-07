import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import ImgCard from '../components/ImgCard'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Grid container justify='center'>
                <Grid item xs={12} sm={6}>
                    <ImgCard maxWidth={345} />
                </Grid>
            </Grid>
        )
    }
}
const mapStateToProps = (state /* , ownProps */) => ({
    state
})

const mapDispatchToProps = {}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

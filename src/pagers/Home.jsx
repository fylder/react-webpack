import React from 'react'
import { connect } from 'react-redux'
// import Grid from '@material-ui/core/Grid'
// import ImgCard from '../components/ImgCard'
import Banner from '../components/Banner'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Banner />
                {/* <Grid item xs={12} container justify='center' alignItems='stretch'>
                    <Grid item xs={12}>
                        <ImgCard maxWidth={345} />
                    </Grid>
                </Grid> */}
            </div>
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

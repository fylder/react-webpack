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
        return <Banner />
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

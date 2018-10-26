import React from 'react'
import { connect } from 'react-redux'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { addTodo, updateTodo, deleteTodo } from '../redux/actions'
import store from '../redux/store'
import ImgCard from '../components/ImgCard'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 'ahh'
        }
    }

    handlerSend = () => {
        // this.props.addTodo('fylder')
        store.dispatch(addTodo('fylder'))
    }

    handlerUpdate = () => {
        this.props.updateTodo('fylder')
    }

    handlerDelete = () => {
        this.props.deleteTodo('fylder')
    }

    render() {
        return (
            <div>
                <Grid container spacing={16}>
                    <Grid item xs={2} sm={2}>
                        <Button variant='contained' color='primary' onClick={this.handlerSend.bind(this)}>
                            {this.state.msg}
                        </Button>
                        <Button variant='contained' color='primary' onClick={this.handlerUpdate.bind(this)}>
                            update
                        </Button>
                        <Button variant='contained' color='primary' onClick={this.handlerDelete.bind(this)}>
                            del
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ImgCard />
                    </Grid>
                    <Grid item xs={2} sm={2} />
                </Grid>
            </div>
        )
    }
}
const mapStateToProps = (state /* , ownProps */) => {
    console.dir(state)
    return {
        state
    }
}

const mapDispatchToProps = { addTodo, updateTodo, deleteTodo }

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

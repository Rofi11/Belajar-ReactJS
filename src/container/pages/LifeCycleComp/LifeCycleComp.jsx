// LifeCycle React => urutan yg terjadi dalam react
import React, { Component , Fragment } from 'react';
import { GlobalConsumer } from '../../../context/context';
import './LifeCycleComp.css'
import { connect } from "react-redux";

class LifeCycleComp extends Component {
    state = {
        count: 1
    }
    constructor(props) {
        super(props);
        this.State = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null
    }

    componentDidMount () {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        // console.log('shouldComponentUpdate')
        console.group('shouldComponentUpdate')
        // console.log('nextProps:',nextProps)
        console.log('nextState:', nextState)
        console.log('this state:', this.state)
        if(nextState.count >= 4){
            return false
        }
        console.groupEnd()
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps , prevState , snapshot){
        console.log('componentDidUpdate')
    }

    componentWillUnmount () {
        console.log(' componentWillUnmount')
    }

    changeCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('render')
        return(
            <Fragment>
                <p>Halaman LifeCycle Component</p>
                <hr />
                <button className='btn' onClick={this.changeCount}>Component Button {this.state.count}</button>
                <hr />
<<<<<<< HEAD
                <p>Total Order: {this.props.state.totalOrder}</p>
=======
                <p>Total Order : {this.props.order}</p>
>>>>>>> master
            </Fragment>
        )
    }
}

<<<<<<< HEAD
export default GlobalConsumer(LifeCycleComp);
=======
const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(LifeCycleComp);
>>>>>>> master

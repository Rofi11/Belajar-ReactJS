import React, { Component } from 'react';
import { GlobalConsumer } from '../../../../context/context';


class Counter extends Component{
    // state = {
    //     order: 4
    // }
    
    // // urutan 2
    // // mempengaruhi count state order dengan newValue(ini sebuah method/function)
    // // ketika count nya berubah saya akan megeksekusi props saya
    // handleCounterChange = (newValue) => {
    //     // memnaggil props onCounterChange
    //     this.props.onCounterChange(newValue) // ini adlah value yg akan dikirim ke halaman product bagian onCounterChange
    // }
    
    // // urutan 3
    // // mempengaruihi state sebelum nya/ merubah value yg dimiliki
    // // function tambah
    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         // panggil method
    //         //  value yg dikirim adalah this.state.order yg sudah berubah nilai nya, dan dikirim ke atas
    //         this.handleCounterChange(this.state.order)
    //     })
    // }
    
    // // function kurang
    // handleMinus = () => {
    //     if(this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             // panggil method
    //         this.handleCounterChange(this.state.order)
    //         })
    //     }
    // }
    render(){
        console.log(this)
        return(
            <div className="counter">
            <button className="minus" onClick={ ()=> this.props.dispatch({type:'MINUS_ORDER'}) }>-</button>
            <input type="text" value={this.props.state.totalOrder}/>
            <button className="plus" onClick={ ()=> this.props.dispatch({type:'PLUS_ORDER'}) }>+</button>
            </div>
        )
        
    }
}


export default GlobalConsumer(Counter);
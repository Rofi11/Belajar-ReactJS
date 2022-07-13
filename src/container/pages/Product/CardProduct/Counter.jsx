import React, { Component } from 'react';
import { connect } from "react-redux";

class Counter extends Component {

// // urutan 2
// // mempengaruhi count state order dengan newValue(ini sebuah method/function)
//     // ketika count nya berubah saya akan megeksekusi props saya
//     handleCounterChange = (newValue) => {
//         // memnaggil props onCounterChange
//         this.props.onCounterChange(newValue) // ini adlah value yg akan dikirim ke halaman Cardproduct bagian onCounterChange
//     }
    
// // urutan 3
// // mempengaruihi state sebelum nya/ merubah value yg dimiliki
//     // function tambah
//     handlePlus = () => {
//         this.setState({
//             order: this.state.order + 1
//         }, () => {
//             // panggil method
//             //  value yg dikirim adalah this.state.order yg sudah berubah nilai nya, dan dikirim ke atas
//             this.handleCounterChange(this.state.order)
//         })
//     }

//     // function kurang
//     handleMinus = () => {
//         if(this.state.order > 0) {
//             this.setState({
//                 order: this.state.order - 1
//             }, () => {
//                 // panggil method
//             this.handleCounterChange(this.state.order)
//             })
//         }
//     }

    render(){
        console.log(this.props)
        return(
            <div className="counter">
                    <button className="minus" onClick={this.props.handleMinus}>-</button>
                    <input type="text" value={this.props.order}/> 
                        {/* this.props.order dari mapStateToProps (global state) */}
                    <button className="plus" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

// dispatch dari component counter dengan {connect di react redux} dan coonect adalah high order component
// memanggil store global dan merubah menjadi props
    // parameter state diambil dari state global(global state di index.js)
const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handlePlus: () => dispatch({type:actionType.PLUS_ORDER}),
        handleMinus: () => dispatch({type:actionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps, mapDispatchToProps ) (Counter);
    // parameter connect ada 2 state dan dispatch
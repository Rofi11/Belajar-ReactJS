// membuat Product yg troli = Update Parent oleh Child Component

import React, { Component, Fragment } from 'react';
import './Product.css'
import CardProduct from './CardProduct/CardProduct';
<<<<<<< HEAD
import { GlobalConsumer } from '../../../context/context';
=======
import { connect } from "react-redux";
>>>>>>> master

// statefull component


class Product extends Component {
<<<<<<< HEAD
=======
    // state = {
    //     order: 4 //akan di update oleh child nya atau function di bawah
    // }

    // untuk mengupdate state order
    // urutan 4
    // handleCounterChange = (newValue) => {
    //     this.setState({
    //         order: newValue
    //     })
    // }
>>>>>>> master

    render(){
        return(
            <Fragment>
                <p>Halaman Product</p>
                <hr />
                <div className="header">
                    <div className="logo">
                        <img src="data:image/png;base64,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" alt="logo etanee" />
                    </div>
                    <div className="troley">
                        <img src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png" alt="troley" />
<<<<<<< HEAD
                        <div className="count">{this.props.state.totalOrder}</div>
=======
                        <div className="count">{this.props.order}</div>
>>>>>>> master
                    </div>
                </div>
                <CardProduct/> 
                {/* urutan 1 => lanjutan nya susuai urutan*/}
                    {/* onCounterChange adalah props , nama yg dipake bebas, ini  contoh props yg memanggil function*/}
                    {/* function nya yg dapat merubah nilai dari parent nya */}
                    {/* akan ambil data value nya dari method yg berjalan di CardProduct handleCounterChange lalau dikirim ke handleCounterChange yg di halaman ini / yg diatas */}
        </Fragment>
        )
    }
}

<<<<<<< HEAD
export default GlobalConsumer(Product);
=======
const mapStateToProps = (state) => {
    return{
        order: state.totalOrder
    }
}

export default connect(mapStateToProps) (Product);
>>>>>>> master

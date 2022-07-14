// membuat Product yg troli = Update Parent oleh Child Component
    // ini adalah child nya karena Card Product

import React, { Component } from 'react';
import Counter from './Counter'



// statefull component


class CardProduct extends Component {
    

    render(){
        return(
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="data:image/jpeg;base64,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" alt="Ayam Berbumbu" />
                    </div>
                    <p className="product-title">Daging ayam berbumbu</p>
                    <p className="product-price">Rp.410.000</p>
                    <Counter/>
                </div>
        )
    }
}

export default CardProduct;
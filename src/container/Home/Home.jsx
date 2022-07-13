import React, { Component , Fragment , createContext} from 'react';
import Blogpost from '../pages/BlogPost/BlogPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import {Routes, Route, Link } from "react-router-dom";// import bagian routes dan route bisa disini, atauoun di index.js bersama BrowserRouter
import YoutubeCompPages from '../pages/YoutubeCompPages/YoutubeCompPages'

export const RootContext = createContext()
const Provider = RootContext.Provider

// statefull component karena pakai class
class Home extends Component {
    state = {
        totalOrder: 0
    }

    // membuat sebuah function utk dispatch kalo di redux
        // namanya bisa bebas, agar mudah di mengerti kia pakai dispatch saja, tapi penggunaan nya sama kaya dispatch

    dispatch = (action) => {
        if(action.type === 'PLUS_ORDER'){
            return this.setState({
                totalOrder: this.state.totalOrder + 1
            })
        }
        if(action.type === 'MINUS_ORDER' && this.state.totalOrder > 0){
            return this.setState({
                totalOrder: this.state.totalOrder - 1
            })
        }
    }

    render() {
        return (
            <Provider value={ //value disisni bisa mengirimkan object 
                {
                    state: this.state,
                    dispatch: this.dispatch
                }
            }>
                <Routes>
                    {/* membuat route nya wajib didalam routes, fragment bertugas utk terlihat jadi one child karna React hanya merender one child */}
                    <Fragment> 
                        <Route path="/" element={<Blogpost/>} /> 
                        <Route path="/Product" element={<Product/>} />  
                        <Route path="/LifeCycleComp" element={<LifeCycleComp/>} />
                        <Route path="/youtube-component" element={<YoutubeCompPages/>} />
                    </Fragment> 
                </Routes>
            </Provider>
        )
    }
}

export default Home ;
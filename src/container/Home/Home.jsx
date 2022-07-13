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
        totalOrder: 5
    }

    // componentDidMount() {
    //     // setTimeout(() => {
    //     //     this.setState({
    //     //         showComponent: false
    //     //     })
    //     // }, 15000)
    // }

    render() {
        return (
            <Provider value={this.state}>
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
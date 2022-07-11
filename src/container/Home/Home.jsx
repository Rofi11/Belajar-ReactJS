import React, { Component , Fragment} from 'react';
import Blogpost from '../pages/BlogPost/BlogPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import {Routes, Route, Link } from "react-router-dom";// import bagian routes dan route bisa disini, atauoun di index.js bersama BrowserRouter
import YoutubeCompPages from '../pages/YoutubeCompPages/YoutubeCompPages'

// statefull component karena pakai class
class Home extends Component {
    state = {
        showComponent : true
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
            <Routes>
                    {/* membuat route nya wajib didalam routes, fragment bertugas utk terlihat jadi one child karna React hanya merender one child */}
                    <Fragment> 
                        <Route path="/" element={<Blogpost/>} /> 
                        <Route path="/Product" element={<Product/>} />  
                        <Route path="/LifeCycleComp" element={<LifeCycleComp/>} />
                        <Route path="/youtube-component" element={<YoutubeCompPages/>} />
                    </Fragment> 
            </Routes>
        )
    }
}

export default Home;
import React, { Component , Fragment} from 'react';
import Blogpost from '../BlogPost/BlogPost';
import YutubeComp from '../../component/YutubeComp/YutubeComp';
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import Product from '../Product/Product';
import {Routes, Route, Link } from "react-router-dom";// import bagian routes dan route bisa disini, atauoun di index.js bersama BrowserRouter


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
                {/* <div>
                    <p>Yuotube Component</p>
                    <hr />
                    <YutubeComp
                        time="7.12"
                        title="tutorial bagian 1"
                        desc="2x tonton dalam 2 hari"/>
                    <YutubeComp 
                        time="6.18"
                        title="tutorial bagian 2"
                        desc="200x tonton dalam 4 hari"/>
                    <YutubeComp 
                        time="3.14"
                        title="tutorial bagian 3"
                        desc="100x tonton dalam 7 hari"/>
                    <YutubeComp 
                        time="10.00"
                        title="tutorial bagian 4"
                        desc="500x tonton dalam 10 hari"/>
                    <YutubeComp /> */}
                    
                    {/* membuat route nya wajib didalam routes, fragment bertugas utk terlihat jadi one child karna React hanya merender one child */}
                    <Fragment> 
                        <Route path="/" element={<Blogpost/>} /> 
                        <Route path="/Product" element={<Product/>} />  
                        <Route path="/LifeCycleComp" element={<LifeCycleComp/>} />
                    </Fragment> 
            </Routes>
        )
    }
}

export default Home;
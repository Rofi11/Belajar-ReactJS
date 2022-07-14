<<<<<<< HEAD
import React, { Component , Fragment } from 'react';
=======
// libraries
import React, { Component , Fragment} from 'react';
import {Routes, Route, Link  } from "react-router-dom";// import bagian routes dan route bisa disini, atauoun di index.js bersama BrowserRouter

// pages
>>>>>>> master
import Blogpost from '../pages/BlogPost/BlogPost';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import Product from '../pages/Product/Product';
import YoutubeCompPages from '../pages/YoutubeCompPages/YoutubeCompPages'
import GlobalProvider from '../../context/context';


// statefull component karena pakai class
class Home extends Component {

    render() {
        return (

                <Routes>
                    {/* membuat route nya wajib didalam routes, fragment bertugas utk terlihat jadi one child karna React hanya merender one child */}
                    <Fragment> 
                        <Route path="/" element={<Blogpost/>} /> 
                        <Route path="/detail-post/:id" element={<DetailPost/>} /> 
                        <Route path="/Product" element={<Product/>} />  
                        <Route path="/LifeCycleComp" element={<LifeCycleComp/>} />
                        <Route path="/youtube-component" element={<YoutubeCompPages/>} />
                    </Fragment> 
                </Routes>

        )
    }
}

// ini merupakan high order component, home secara otomatis sudah terselubung provider karena menjadi children, di ambil dari context.jsx
export default GlobalProvider(Home) ;
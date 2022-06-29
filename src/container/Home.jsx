import React, { Component } from 'react';
import YutubeComp from '../component/YutubeComp/YutubeComp';

// statefull component karena pakai class
class Home extends Component {
    render() {
        return (
            <div>
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
                <YutubeComp />
            </div>
        )
    }
}

export default Home;
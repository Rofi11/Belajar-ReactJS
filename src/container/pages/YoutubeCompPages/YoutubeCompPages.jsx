import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp';


class YoutubeCompPages extends Component{
    render(){
        return(
            <Fragment>
                <p>Yuotube Component</p>
                <hr />
                <YoutubeComp
                    time="7.12"
                    title="tutorial bagian 1"
                    desc="2x tonton dalam 2 hari"/>
                <YoutubeComp 
                    time="6.18"
                    title="tutorial bagian 2"
                    desc="200x tonton dalam 4 hari"/>
                <YoutubeComp 
                    time="3.14"
                    title="tutorial bagian 3"
                    desc="100x tonton dalam 7 hari"/>
                <YoutubeComp 
                    time="10.00"
                    title="tutorial bagian 4"
                    desc="500x tonton dalam 10 hari"/>
                <YoutubeComp /> 
            </Fragment>
        )
    }
}

export default YoutubeCompPages;
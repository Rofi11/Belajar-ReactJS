import axios from 'axios';
import React, { Component } from 'react';

class DetailPost extends Component{
// masih gagal totalllll

    state = {
        post : {
            title: '',
            body: ''
        }
    }
    // componentDidMount(){
    //     let id = this.props.match.params.id
    //     axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => {
    //             console.log('result:', res);
    //             let post = res.data
    //             this.setState({
    //                 post : {
    //                     title: post.title,
    //                     body: post.body
    //                 }
    //             })
    //         })
    // }
    render(){
        console.log(this.props)
        return(
            
            <p>Detail Post</p>
        )
    }
}

export default DetailPost;
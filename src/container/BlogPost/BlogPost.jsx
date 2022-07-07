// belajar utk mengkonsumsi API publict
import React, { Component,Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css'
import axios from 'axios';


class Blogpost extends Component {
    // 1.buat state yg berisi array kosong
    state = {
        post: []
    }

    getPostApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    // 2.diubah state nya degan ComponentDidMount
    componentDidMount () {
        // tangkap API publik nya
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post:json
        //         })
        //     })
        this.getPostApi()
    }

    handleRemove = (data) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
            .then((res) => {
                this.getPostApi()
            })
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>BlogPost</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
                
            </Fragment>
        )
    }
}

export default Blogpost;
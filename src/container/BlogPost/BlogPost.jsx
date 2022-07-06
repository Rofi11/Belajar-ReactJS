// belajar utk mengkonsumsi API publict
import React, { Component,Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css'


class Blogpost extends Component {
    // 1.buat state yg berisi array kosong
    state = {
        post: []
    }
    // 2.diubah state nya degan ComponentDidMount
    componentDidMount () {
        // tangkap API publik nya
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    post:json
                })
            })
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>BlogPost</p>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
                
            </Fragment>
        )
    }
}

export default Blogpost;
// belajar utk mengkonsumsi API publict
import React, { Component,Fragment } from 'react';
import Post from '../../component/Post/Post';
import './BlogPost.css'
import axios from 'axios';


class Blogpost extends Component {
    // 1.buat state yg berisi array kosong
    state = {
        post: [],
        FormBlogPost: {
            id:1,
            title: '',
            body: '',
            userId:1
        },
    }

    getPostApi = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts?_sort=id&_order=desc') //?_sort=id&_order=desc utk mengurut dan membalikan dari yg terakhir di baca nya, jadi kalo  data asli dan ada penambahan maka akan terlihat ke satu
            .then((result) => {
                this.setState({
                    post: result.data
                })
            })
    }

    // 2.diubah state nya degan ComponentDidMount
    componentDidMount () {
        this.getPostApi()
    }

    handleRemove = (data) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${data}`)
            .then((res) => {
                console.log(res)
                this.getPostApi()
            })
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let FormBlogPostNew = {...this.state.FormBlogPost} //Destrugsign assigment ambil data dari FormBlogPost jadi variabel baru
        // arah title dan body nya saja
        FormBlogPostNew[event.target.name] = event.target.value //name dari input nya, title dan body yg di target value utk di ubah
        // Di pake utk id nya
        let timestamp = new Date().getTime()
        FormBlogPostNew['id'] = timestamp
        this.setState({
            FormBlogPost: FormBlogPostNew
        })
    }

    PostDataToAPi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state.FormBlogPost)
            .then((res) => {
                console.log(res)
                this.getPostApi()
            }, (err) => {
                console.log('erro: ', err)
            })
    }

    handleSubmit = () => {
        this.PostDataToAPi()
        // liat di console nya di data object
    }

    render() {
        return(
            <Fragment>
                <p className='section-title'>BlogPost</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title </label>
                    <input type="text" name='title' placeholder='add title' onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>simpan</button>
                </div>
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
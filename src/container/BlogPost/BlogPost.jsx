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
        isUpdate : false,
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

    handleUpdate = (data)  => {
        console.log(data)
        this.setState({
            FormBlogPost : data,
            isUpdate : true // mnetriger isUpdate yg false jadi true
        })
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target)
        let FormBlogPostNew = {...this.state.FormBlogPost} //Destrugsign assigment ambil data dari FormBlogPost jadi variabel baru
        // arah title dan body nya saja
        FormBlogPostNew[event.target.name] = event.target.value //name dari input nya, title dan body yg di target value utk di ubah
        // Di pake utk id nya
        if(!this.state.isUpdate){ 
            let timestamp = new Date().getTime()
            // dibuat kondisi agar tidak error, id baru ditambah saat tidak ada yg di update, saat ada update id dari timestamp tidak akan ada
            FormBlogPostNew['id'] = timestamp
        }
        this.setState({
            FormBlogPost: FormBlogPostNew
        })
    }

    PostDataToAPi = () => {
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state.FormBlogPost) //this.state.FormBlogPost adalah parameter
            .then((res) => {
                console.log(res)
                this.getPostApi()
                    // membalikan form menjadi kosong/semula
                this.setState({
                    FormBlogPost: {
                        id:1,
                        title: '',
                        body: '',
                        userId:1
                    },
                })
            }, (err) => {
                console.log('error: ', err)
            })
    }

    PutDataToApi = () => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.state.FormBlogPost.id}` , this.state.FormBlogPost)//this.state.FormBlogPost adalah parameter dan object yg dikirim utk di update berdasarkan id nya
        .then(res => {
            console.log(res)
            this.getPostApi()
                // membalikan form menjadi semula setelah mengupdate dan mengembalikan fungsinya menjadi post lagi
            this.setState({
                isUpdate: false,
                FormBlogPost: {
                    id:1,
                    title: '',
                    body: '',
                    userId:1
                },
            })
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate) { // jiks true maka sudah dpt trigger dari handleUpdate
            this.PutDataToApi()
        } else { // jika false berarti tidak ada action update dalam pages
            this.PostDataToAPi()
        }
        // liat di console nya di data object
    }

    render() {
        return(
            <Fragment>
                <p>Halaman BlogPost/Pages Utama</p>
                <hr />
                <p className='section-title'>BlogPost</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title </label>
                    <input type="text" name='title' value={this.state.FormBlogPost.title} placeholder='add title' onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" value={this.state.FormBlogPost.body} placeholder='add Blog Content' onChange={this.handleFormChange}></textarea>
                    <button className='btn-submit' onClick={this.handleSubmit}>simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} Update={this.handleUpdate}/>
                    })
                }
                
            </Fragment>
        )
    }
}

export default Blogpost;
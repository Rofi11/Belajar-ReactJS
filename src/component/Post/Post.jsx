import React from 'react';

const Post = (props) => {
    return(
        <div className="post">
                <div className="img-thumb-dummy">
                    <img src="https://placeimg.com/200/150/tech" alt="Dummy-img" />
                </div>
                <div className="content">
                    <p className="title" onClick={() => props.goDetail(props.data.title)}> {props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className='Update' onClick={() => {props.Update(props.data)}}>Update</button>
                    <button className='remove' onClick={() => {props.remove(props.data.id)}}>Remove</button>
                </div>
        </div>
    )
}

export default Post;


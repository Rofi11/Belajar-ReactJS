import React from "react"
import './YoutubeComp.css'


// stateless component
const YoutubeComp = (props) => {
    return (
      // <div className="container">
        <div className="yutube-wrapper">
          <div className="img-thumb-youtube">
              <img src="https://i.ytimg.com/vi/7eUuuc-TEQE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCiZz6RoGcqR4RckQR70vfQzYOaBA"></img>
              <p className="time">{props.time}</p>
          </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
      // {/* </div> */}
    );
}

// membuat default props nya agar kalo data dari sana nya kosong maka akan menggunakan default props nya
  // dibuat jadi object
YoutubeComp.defaultProps = {
  time: "00.00",
  title: "title here",
  desc: "xx di tonton dalam xx hari"
}

export default YoutubeComp;
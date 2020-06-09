import React from 'react';

const FrameList = (props)=> {
    const src = `https://www.youtube.com/embed/${props.videoId}`
    return (
            <div className="center framelist">
            <iframe src={src} title={props.title}></iframe>
            <h3>Title: {props.title}</h3>
         </div>
         
    )
}

export default FrameList
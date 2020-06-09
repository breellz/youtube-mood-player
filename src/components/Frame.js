import React, { useContext } from 'react';
import MoodContext from '../context/Mood-context'
import FrameList from './FrameList'

const Frame = () => {
    const {state} = useContext(MoodContext)
    const youtubeVideos = state
    
    return(youtubeVideos ?  
        <div className="frame">
        {youtubeVideos.map((youtubeVideo) => <FrameList 
            key ={youtubeVideo.id.videoId}
            videoId={youtubeVideo.id.videoId} 
            title = {youtubeVideo.snippet.title
        } thumbnail = {youtubeVideo.snippet.thumbnails.high.url} />)}
        </div> : <p>Loading</p>
    )
    
    //
}

export default Frame
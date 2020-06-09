import React, { useContext, useState } from 'react';
import MoodContext from '../context/Mood-context';
import apikeys from '../Api'


const MoodSelector = () => {
    const {  dispatch } = useContext(MoodContext)
    const [id, setid] = useState([])
    const [mood, setMood]= useState('')

    const Happy = () => {
        const videos = []
        setMood('happy')
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=happy%20songs&key=${apikeys.apikey}`)
            .then(res=> res.json())
            .then(data=> data.items.forEach((item)=>{
                videos.push(item)
            })).catch(error => console.log(error))
             setid(videos)
            dispatch({ type: 'SELECT_MOOD', mood, id})
            
    }

    const Sad = () => {
        const videos = []
        setMood('sad')
        fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=sad%20songs&key=AIzaSyB6cG0ooaQQN5Gwx2U38mOFddas8eZf4nc')
            .then(res=> res.json())
            .then(data=> data.items.forEach((item)=>{
                videos.push(item)
            })).catch(error => console.log(error))
             setid(videos)
            dispatch({ type: 'SELECT_MOOD', mood, id})
            
    }
    return (
 <div className="wrapper">
        <button onClick = {Happy}>Happy</button>
        <button onClick = {Sad}>Sad</button>
</div>
    )
}

export { MoodSelector as default }
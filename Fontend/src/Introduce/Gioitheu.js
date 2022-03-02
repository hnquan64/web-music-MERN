import React from 'react'
import video_intro from '../Img/intro.mp4'
import './Gioithieu.css'

export default class GioiThieu extends React.Component{
    render(){
        return(
            <div className='gioithieu-bg'>
                <div className='khoi-video-intro'>
                    <video muted loop autoPlay className='video-intro'>
                        <source src={video_intro} type="video/mp4"></source>
                    </video>
                </div>
                <div className='info'>
                    <p>GoMusic Of The World</p>
                    <h1>GOMUSIC - World's Leading Music Listening Platform !!!!!!</h1>
                    <span>With us you will have great moments of experience. Pleased to serve you ! Product of GoPro Team.</span>
                </div>
            </div>
        )
    }
}
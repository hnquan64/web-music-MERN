import React from 'react'
import './Gochart.css'
import like from '../Img/like.png'
import more from '../Img/more.png'
import micro from '../Img/micro.png'

export default class Song extends React.Component{
    render(){
        return(
                    <div className='song-full'>
                        <div className='song-stt'>{this.props.sttSong}</div>
                        <img className='song-avt' src={this.props.imgSong}></img>
                        <div className='song-info'>
                            <span>{this.props.nameSong}</span><br/>
                            <a href=''>{this.props.casi}</a>
                        </div>
                        <div className='song-time'>{this.props.timeSong}</div>
                        <div>
                            <img className='song-icon-more' src={more}/>
                        </div>
                        <div>
                            <img className='song-icon' src={like} />
                        </div>
                        <div>
                            <img className='song-icon' src={micro}/>
                        </div>
                    </div>
        ); 
    }
}
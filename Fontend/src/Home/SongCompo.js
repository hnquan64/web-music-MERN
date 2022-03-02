import React from 'react'
import {Link} from 'react-router-dom'
import './SongCompo.css'
import Popup from 'reactjs-popup'
import Player from './Player'



export default class SongCompo extends React.Component{
    render(){
        return(
            <div className='songcompo-full'>
                <div className='hover'>
                    <Popup modal trigger={<img className='songcompo-img' src={this.props.imgSong}></img>}>
                        <Player img={this.props.imgSong}
                                name={this.props.casi}
                                desc={this.props.nameSong}
                                src={this.props.Aud} ></Player>
                    </Popup>
                    {/* <img className='songcompo-img' src={this.props.imgSong}></img> */}
                </div>
                <div className='songcompo-info'>
                    <p>{this.props.nameSong}</p>
                    <a href=''>{this.props.casi}</a>
                </div>
            </div>
        )
    }
}
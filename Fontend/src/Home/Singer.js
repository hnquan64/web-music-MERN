import React from 'react'
import img_gochoice from '../Img/gochoice.png'
import './Home.css'

export default class Singer extends React.Component{
    render(){
        return(
            <div className='singer-full'>
                <div className='singer-avt'>
                    <a href=''><img src={this.props.imgSinger}></img></a>
                </div>
                <div className='singer-info'>
                    <img src={img_gochoice}></img>
                    <p><a href=''>{this.props.nameSinger}</a></p>
                </div>
            </div>
        )
    }
}
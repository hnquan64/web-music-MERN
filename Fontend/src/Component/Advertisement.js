import React from 'react'
import './Advertisement.css'

export default class Advertisement extends React.Component{
    constructor(props){
        super(props);
        this.state ={
                Advertisement:{
                    link:require('../Img/intro_netflix.mp4'),
                    muted: "true"
            }
        }
    }
    render(){
        return(
            <div className='advertisement-full'>
                <div className='advertisement-80'>
                    <video autoPlay loop muted={this.state.Advertisement.muted}>
                        <source src={this.state.Advertisement.link} type="video/mp4"></source>
                    </video>
                </div>
            </div>
        )
    }
}
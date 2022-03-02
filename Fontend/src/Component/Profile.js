import React from 'react'
import './Profile.css'

import bia from '../Img/Alan_Walker_2.jpg'
import avt from '../Img/hienho.jpeg'

export default class Profile extends React.Component{
    // constructor(props){
    //     super(props);

    // }
    render(){
        return(
            <div className='profile-full'>
                <div className='profile-avt'>
                    <img className='zindex3' src={bia}></img>
                    <img className='zindex4' src={avt}></img>
                </div>
                <div>

                </div>
            </div>
        )
    }
}
import React from 'react'
import Chen from '../Actions/Chen'
import Profile from './Profile'

export default class PageProfile extends React.Component{
    render(){
        return(
            <div>
                <Chen></Chen>
                <Profile></Profile>
            </div>
        )
    }
}
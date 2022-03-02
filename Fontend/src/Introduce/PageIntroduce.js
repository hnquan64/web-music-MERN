import React from 'react'
import IntroNav from '../Introduce/IntroNav'
import GioiThieu from '../Introduce/Gioitheu'


export default class PageIntroduce extends React.Component{
    render(){
        return(
            <div>
                <IntroNav></IntroNav>
                <GioiThieu></GioiThieu>
            </div>
        )
    }
}
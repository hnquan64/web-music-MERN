import React from 'react'
import New_router from '../New/New_router'
import Chen from '../Actions/Chen'

export default class PageIntroduce extends React.Component{
    render(){
        return(
            <div>
                <Chen></Chen>
                <New_router></New_router>
            </div>
        )
    }
}
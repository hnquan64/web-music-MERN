import React from 'react'
import New_router from '../New/New_router'
import Chen from '../Actions/Chen'
import Recent from '../Home/Recent'
import Favourite from '../Home/Favourite'

export default class PageLibrary extends React.Component{
    render(){
        return(
            <div>
                <Chen></Chen>
                <Recent></Recent>
                <Favourite></Favourite>
            </div>
        )
    }
}
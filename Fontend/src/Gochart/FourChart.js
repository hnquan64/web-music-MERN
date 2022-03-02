import React from 'react'
import {Link} from 'react-router-dom'
import './Gochart.css'

import imgVN from '../Img/vpop.png'
import imgCN from '../Img/Cpop.png'
import imgKR from '../Img/kpop.png'
import imgUSUK from '../Img/usuk.png'

export default class FourChart extends React.Component{
    render(){
        return(
            <div className='fourchart-full'>
                <div className='fourchart-80'>
                    <div className='fourchart-1'>
                        <Link to='/vietnam'><img src={imgVN}></img></Link>
                    </div>
                    <div className='fourchart-1'>
                        <Link to='/korea'><img src={imgKR}></img></Link>
                    </div>
                    <div className='fourchart-1'>
                        <Link to='/china'><img src={imgCN}></img></Link>
                    </div>
                    <div className='fourchart-1'>
                        <Link to='/usuk'><img src={imgUSUK}></img></Link>
                    </div>
                </div>
            </div>
        )
    }
}
import React from 'react'

import Poster from '../Home/Poster'
import ChartComponent from '../Component/ChartComponent'
import FourChart from '../Gochart/FourChart'
import SlideSinger from '../Home/SlideSinger'
import Advertisement from '../Component/Advertisement'
import Chen from '../Actions/Chen'
import Recent from './Recent'
import Trending from './Trending'
import HotMusic from './HotMusic'
import Favourite from './Favourite'
import Ballad from './Ballad'
import Pop from './Pop'
import RB from './R&B'
import RAP from './RAP'

export default class PageHome extends React.Component{
    render(){
        return(
            <div>
                <Chen></Chen>
                <Poster></Poster>
                <ChartComponent></ChartComponent>
                <FourChart></FourChart>
                <Recent></Recent>
                <Advertisement></Advertisement>
                <Trending></Trending>
                <SlideSinger></SlideSinger>
                <HotMusic></HotMusic>
                <Favourite></Favourite>
                <Ballad></Ballad>
                <Pop></Pop>
                <RB></RB>
                <RAP></RAP>
            </div>
        )
    }
}
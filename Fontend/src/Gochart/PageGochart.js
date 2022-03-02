import React from 'react'
import ChartComponent from '../Component/ChartComponent'
import SlideSinger from '../Home/SlideSinger'
import Top100_Gochart from '../Gochart/Top100_Gochart'


export default class PageGochart extends React.Component{
    render(){
        return(
            <div>
                <ChartComponent></ChartComponent>
                <SlideSinger></SlideSinger>
                <Top100_Gochart></Top100_Gochart>
            </div>
        )
    }
}
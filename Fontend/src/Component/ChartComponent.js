import React from 'react'
import './ChartComponent.css'
import Chart from './Chart'
import ListChart from './ListChart'

export default class ChartComponent extends React.Component{
    render(){
        return(
            <div className='chartComponent-full'>
                <h2>#GoChart</h2>
                <div className='chartComponent-chartlist'>
                    <div className='chartComponent-chart'>
                        <Chart></Chart>
                    </div>
                    <div className='chartComponent-list'>
                        <ListChart></ListChart>
                    </div>
                </div>
            </div>
        );
    }
}
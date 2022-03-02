import React, { Component } from 'react';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: '00h', top1: 4000, top2: 2400, top3:4700, top4:3200, top5:8890, amt: 5400},
        {name: '04h', top1: 3000, top2: 3400, top3:6700, top4:1800, top5:5380, amt: 2210},
        {name: '08h', top1: 2000, top2: 1500, top3:3300, top4:1200, top5:2460, amt: 2290},
        {name: '12h', top1: 2780, top2: 5600, top3:5400, top4:4400, top5:1340, amt: 2000},
        {name: '16h', top1: 1890, top2: 9700, top3:2800, top4:3700, top5:6290, amt: 2181},
        {name: '20h', top1: 2390, top2: 7200, top3:1700, top4:5300, top5:6670, amt: 2500},
      ]
    }
  }

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer className="chart" height={300}>
        <LineChart 
         width={400} 
         height={200} 
         data={data}
         margin={{top: 6, right: 30, left: 10, bottom: 5}}
        >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="5 5"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="top1" stroke="#E4340E" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="top2" stroke="#EBB643" />
        <Line type="monotone" dataKey="top3" stroke="#8712E2" />
        <Line type="monotone" dataKey="top4" stroke="#4E6EA9" />
        <Line type="monotone" dataKey="top5" stroke="#50D3B9" />
        </LineChart>
      </ResponsiveContainer>
    );
  }
}

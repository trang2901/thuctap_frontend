import React, { Component } from 'react';

import {ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class ChartExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'Tháng 1',  Cong_Viec_Moi: 2400,  Ung_Vien:2000},
        {name: 'Tháng 2', Cong_Viec_Moi: 1398,  Ung_Vien:2100},
        {name: 'Tháng 3',  Cong_Viec_Moi: 9800,  Ung_Vien:2002},
        {name: 'Tháng 4',  Cong_Viec_Moi: 3908,  Ung_Vien:2000},
        {name: 'Tháng 5',  Cong_Viec_Moi: 4800, Ung_Vien:2003},
        {name: 'Tháng 6',  Cong_Viec_Moi: 3800, Ung_Vien:7004},
        {name: 'Tháng 7',  Cong_Viec_Moi: 4300, Ung_Vien:2000},
        {name: 'Tháng 8',  Cong_Viec_Moi: 4300,  Ung_Vien:2800},
        {name: 'Tháng 9', Cong_Viec_Moi: 4300, Ung_Vien:2300},
        {name: 'Tháng 10',  Cong_Viec_Moi: 4300, Ung_Vien:7090},
        {name: 'Tháng 11',  Cong_Viec_Moi: 4300, Ung_Vien:2012},
        {name: 'Tháng 12', Cong_Viec_Moi: 4300, Ung_Vien:2011},

      ]
    }
  }

  render() {
    const { data } = this.state;

    return (
      <ResponsiveContainer className="chart" height={300}>
        <LineChart
         width={600}
         height={300}
         data={data}
         margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
        <XAxis dataKey="name"/>
        <YAxis/>
        <CartesianGrid strokeDasharray="3 3"/>
        <Tooltip/>
        <Legend />
        <Line type="monotone" dataKey="Cong_Viec_Moi" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line type="monotone" dataKey="Ung_Vien" stroke="#82ca9d" />
        {/* <Line type="monotone" dataKey="Ung_Vien" stroke="#ff0000" /> */}

        </LineChart>
      </ResponsiveContainer>
    );
  }
}

export default ChartExample;

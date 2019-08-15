import React, {Component} from 'react'
import { BarChart, CartesianGrid, XAxis,YAxis, Tooltip, Bar} from 'recharts';
class TopEmployees extends Component {
    render() {
        return (
        <BarChart
        layout="vertical"
        width={400}
        height={250}
        data={this.props.data}
        margin={{
          top: 20, right: 20, bottom: 20, left: 20,
        }}>
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis type="number" label="Sales" />
        <YAxis dataKey="name" type="category" />
        <Tooltip />
        <Bar dataKey="sales" barSize={20} fill="#413ea0" />
      </BarChart>
        )
    }
}
export default TopEmployees
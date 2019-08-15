import React, {Component} from 'react'
import { LineChart, CartesianGrid, XAxis,YAxis, Tooltip, Line} from 'recharts';

class SalesSinceDate extends Component {
    render() {
        return (
            <LineChart width={730} height={250} data={this.props.clientsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"  label="date"/>
                <YAxis label="Sales"/>
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#82ca9d" />
            </LineChart>)
    }
}
export default SalesSinceDate
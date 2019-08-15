import React, {Component} from 'react'
import { LineChart, CartesianGrid, XAxis,YAxis, Tooltip, Line} from 'recharts';

class SalesSinceDate extends Component {
    render() {
        return (
            <LineChart   className="sales-since-chart" width={900} height={200} data={this.props.clientsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"  label={{ value: 'Date', angle: 0, position: 'bottom' }}/>
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#ff6e54" />
            </LineChart>)
    }
}
export default SalesSinceDate
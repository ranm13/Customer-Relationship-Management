import React, {Component} from 'react'
import { BarChart, XAxis,YAxis, Tooltip, Bar} from 'recharts';
class TopEmployees extends Component {
    render() {
        return (
            <BarChart
                className="top-employees-chart"
                layout="vertical"
                width={300}
                height={170}
                data={this.props.data}
                margin={{
                top: 20, right: 20, bottom: 20, left: 20,
                }}>
                <XAxis type="number" label={{ value: 'Sales', angle: 0, position: 'bottom' }} />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Bar dataKey="sales" barSize={20} fill="#003f5c" />
            </BarChart>

        )
    }
}
export default TopEmployees
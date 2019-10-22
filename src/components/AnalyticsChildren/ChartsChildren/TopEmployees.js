import React, {Component} from 'react'
import { BarChart, XAxis,YAxis, Tooltip, Bar, ResponsiveContainer} from 'recharts';
class TopEmployees extends Component {
    render() {
        return (
            <div id="top-employees-container">
                Top Employees
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        className="top-employees-chart"
                        layout="vertical"
                        data={this.props.data}
                        margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                        }}>
                        <XAxis type="number" label={{ value: 'Sales', angle: 0, position: 'bottom' }} tick={{fontSize: 11, fill:"black", fontWeight:"bold"}} />
                        <YAxis dataKey="name" type="category" tick={{fontSize: 11, fill:"black", fontWeight:"bold"}} />
                        <Tooltip />
                        <Bar dataKey="sales" barSize={20} fill="#003f5c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>    
        )
    }
}
export default TopEmployees
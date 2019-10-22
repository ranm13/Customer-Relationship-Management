import React, {Component} from 'react'
import { LineChart, XAxis,YAxis, Tooltip, Line, ResponsiveContainer} from 'recharts';

class SalesSinceDate extends Component {
    render() {
        return (
            <div id="sales-since-container">
                Sales Since {this.props.clientsData[0].date}
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart   className="sales-since-chart" width={900} height={200} data={this.props.clientsData}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="date"  label={{ value: 'Date', angle: 0, position: 'bottom' }} tick={{fontSize: 10, fill:"black", fontWeight:"bold"}}/>
                        <YAxis tick={{fontSize: 10, fill:"black", fontWeight:"bold"}} />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="#ff6e54" strokeWidth={4} />
                    </LineChart>
                </ResponsiveContainer>
            </div>    
        )
    }
}
export default SalesSinceDate
import React, {Component} from 'react'
import axios from 'axios'
import { LineChart, XAxis,YAxis, Tooltip, Line, ResponsiveContainer} from 'recharts';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class SalesSinceDate extends Component {
    constructor(){
        super()
        this.state = {
            lastMonthSales: []
        }
    }

    async componentDidMount() {
        const response = await axios.get("/analytics/charts/lastmonthsales")
        this.setState({lastMonthSales: response.data})
    }
    render() {
        return (
            this.state.lastMonthSales[0]?  
            <div id="sales-since-container">
                Sales Since {this.state.lastMonthSales[0].date}
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart   className="sales-since-chart" width={900} height={200} data={this.state.lastMonthSales}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="date"  label={{ value: 'Date', angle: 0, position: 'bottom' }} tick={{fontSize: 10, fill:"black", fontWeight:"bold"}}/>
                        <YAxis tick={{fontSize: 10, fill:"black", fontWeight:"bold"}} />
                        <Tooltip />
                        <Line type="monotone" dataKey="sales" stroke="#ff6e54" strokeWidth={4} />
                    </LineChart>
                </ResponsiveContainer>
            </div>:
            <Loader type="TailSpin" style={{margin: "auto"}}/>      
        )
    }
}
export default SalesSinceDate
import React, {Component} from 'react'
import axios from 'axios'
import { BarChart, XAxis,YAxis, Tooltip, Bar, ResponsiveContainer} from 'recharts';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class TopEmployees extends Component {
    constructor(){
        super()
        this.state = {
            topEmployees: []
        }
    }

    async componentDidMount() {
        const response = await axios.get("/analytics/charts/topemployees")
        this.setState({topEmployees: response.data})
    }
    render() {
        
        return (
            this.state.topEmployees[0]?    
            <div id="top-employees-container">
                Top Employees
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        className="top-employees-chart"
                        layout="vertical"
                        data={this.state.topEmployees}
                        margin={{
                        top: 20, right: 20, bottom: 20, left: 20,
                        }}>
                        <XAxis type="number" label={{ value: 'Sales', angle: 0, position: 'bottom' }} tick={{fontSize: 11, fill:"black", fontWeight:"bold"}} />
                        <YAxis dataKey="_id" type="category" tick={{fontSize: 11, fill:"black", fontWeight:"bold"}} />
                        <Tooltip />
                        <Bar dataKey="count" barSize={20} fill="#003f5c" />
                    </BarChart>
                </ResponsiveContainer>
            </div>:
            <Loader type="TailSpin" style={{margin: "auto"}}/>    
        )
    }
}
export default TopEmployees
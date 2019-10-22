import React, {Component} from 'react'
import axios from 'axios'
import { BarChart, XAxis,YAxis, Tooltip, Bar, ResponsiveContainer} from 'recharts';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class SalesBy extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            category: "country"
        }
    }

    changeHandler = (e) => {
        let name = e.target.name
        this.setState({
            [name]: e.target.value
        }, async () =>{
            const response = await axios.get(`/analytics/charts/salesby/${this.state.category}`)
            this.setState({data: response.data})
        })
    }

    async componentDidMount(){
        const response = await axios.get(`/analytics/charts/salesby/${this.state.category}`)
        this.setState({data: response.data})
    }

    render() {
        return (
        this.state.data[0]? 
        <div className="sales-by-chart">
            <div id="sales-by-container">Sales By
                <select id="sales-by-select" name="category" value={this.state.category} onChange={this.changeHandler}>
                        <option value="country">Country</option>
                        <option value="firstContact">Month(all time)</option>
                        <option value="emailType">Email</option>
                        <option value="owner">Owner</option>
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={this.state.data}
                    margin={{
                    top: 20, right: 20, bottom: 20, left: 20,
                    }}>
                    <YAxis type="number" label={{ value: 'Sales', angle: -90, position: 'insideLeft' }} tick={{fontSize: 10, fill:"black", fontWeight:"bold"}}/>
                    <XAxis dataKey="_id" interval={0} angle={-30} tick={{fontSize: 9, fill:"black", fontWeight:"bold", textAnchor: 'end'}}/>
                    <Tooltip />
                    <Bar dataKey="count" fill="#955196" />
                </BarChart>
            </ResponsiveContainer>
        </div>:
        <Loader type="TailSpin" style={{margin: "auto"}}/>
        )
    }
}
export default SalesBy
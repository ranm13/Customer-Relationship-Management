import React, {Component} from 'react'
import axios from 'axios'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
  
class ClientAcquisition extends Component {
  constructor(){
    super()
    this.state = {
        clientAcquisitionByDate: []
    }
}

async componentDidMount() {
    const response = await axios.get("/analytics/charts/salesbyaquisitiondate")
    this.setState({clientAcquisitionByDate: response.data})
}
    render() {
        const COLORS = [`#795548`, `#34495e`, `#95a5a6`];
        let data = this.state.clientAcquisitionByDate
        return (
          this.state.clientAcquisitionByDate[0]?  
          <div id="client-aqcuisition-container">
            Client Aqcuisition
            <ResponsiveContainer width="100%" height="100%">
                <PieChart  className="client-acquisition-chart">
                  <Pie
                    data={data}
                    outerRadius={70}
                    label
                    fill="#8884d8"
                    dataKey="sales">
                    {data.map(d => <Cell key={`cell-${data.indexOf(d)}`} fill={COLORS[data.indexOf(d)]} />)}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>:
            <Loader type="TailSpin" style={{margin: "auto"}}/>      
          );
        }
      }
      
export default ClientAcquisition
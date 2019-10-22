import React, {Component} from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer} from 'recharts';
  
class ClientAcquisition extends Component {
    render() {
        const COLORS = [`#795548`, `#34495e`, `#95a5a6`];
        let data = this.props.data
        return (
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
            </div>    
          );
        }
      }
      
export default ClientAcquisition
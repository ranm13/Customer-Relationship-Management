import React, {Component} from 'react'
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
  
class ClientAcquisition extends Component {
    render() {
        const COLORS = [`#795548`, `#34495e`, `#95a5a6`];
        let data = this.props.data
        return (
            <PieChart  className="client-acquisition-chart" width={220} height={220}>
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
          );
        }
      }
      
export default ClientAcquisition
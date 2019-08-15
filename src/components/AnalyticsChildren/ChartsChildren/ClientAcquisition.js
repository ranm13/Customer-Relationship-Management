import React, {Component} from 'react'
import { PieChart, Pie, Cell, Tooltip} from 'recharts';
  
class ClientAcquisition extends Component {
    render() {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];
        let data = this.props.data
        return (
            <PieChart width={400} height={400}>
              <Pie
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
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
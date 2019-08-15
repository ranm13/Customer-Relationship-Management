import React, {Component} from 'react'
import { FaChartLine } from 'react-icons/fa';

class MonthNewClients extends Component {
    getCurrentMonthName = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
        const currentDate = new Date()

        return monthNames[currentDate.getMonth()]
    }

    render() {
        return (
        <div>
            <div className="analytics-icon" id="chart-icon"><FaChartLine  size="4em"/></div>
            <div className="analytics-badges-data">
            <h1>{this.props.NumOfCurrentMonthNewClients}</h1>
            <div>New {this.getCurrentMonthName()} Clients</div>
            </div>
        </div>)
    }
}
export default MonthNewClients
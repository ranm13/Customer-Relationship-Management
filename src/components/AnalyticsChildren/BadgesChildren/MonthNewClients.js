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
            <FaChartLine />
            {this.props.NumOfCurrentMonthNewClients}
            <div>New {this.getCurrentMonthName()} Clients</div>
        </div>)
    }
}
export default MonthNewClients
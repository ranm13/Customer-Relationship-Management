import React, {Component} from 'react'
import axios from 'axios'
import { FaChartLine } from 'react-icons/fa';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class MonthNewClients extends Component {
    constructor(){
        super()
        this.state = {
            currentMonthNewClients: ""
        }
    }
    getCurrentMonthName = () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]
        const currentDate = new Date()

        return monthNames[currentDate.getMonth()]
    }

    async componentDidMount() {
        const response = await axios.get("/analytics/badges/newmonthclients")
        this.setState({currentMonthNewClients: response.data.count})
    }

    render() {
        return (
        this.state.currentMonthNewClients || this.state.currentMonthNewClients === 0 ?
        <div>
            <div className="analytics-icon" id="chart-icon"><FaChartLine  size="4em"/></div>
            <div className="analytics-badges-data">
            <div className="badge-data">{this.state.currentMonthNewClients}</div>
            <div className="badge-text">New {this.getCurrentMonthName()} Clients</div>
            </div>
        </div>:
        <Loader type="TailSpin" style={{margin: "auto"}}/>)
    }
}
export default MonthNewClients
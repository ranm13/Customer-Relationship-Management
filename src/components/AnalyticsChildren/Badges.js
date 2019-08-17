import React, {Component} from 'react'
import moment from 'moment'
import MonthNewClients from './BadgesChildren/MonthNewClients';
import EmailsSent from './BadgesChildren/EmailsSent';
import OutstandingClients from './BadgesChildren/OutstandingClients';
import HottestCountry from './BadgesChildren/HottestCountry';


class Badges extends Component {
    isDateInTheCurrentMonth = (date) => {
        let currentDate = new Date()
        let checkedDate = new Date(date)
        return (moment(checkedDate).isSame(currentDate, 'month'))
    }

    filterArrayLengthByTheme = (theme) => {
        let filtteredArray = this.props.clientsData.filter(c => 
            (theme === "currentMonthNewClients"? this.isDateInTheCurrentMonth(c.firstContact)
            :theme === "countSentEmails"? c.emailType
            :theme === "countOutstandingClients"? !c.sold
            :null))
        return filtteredArray.length
    }

    getHottestCountry = () => {
        let countCountries = {}
        this.props.clientsData.forEach(c => countCountries[c.country]? countCountries[c.country]++ :  countCountries[c.country] = 1)
        let hottestCountry = Object.keys(countCountries).reduce((a, b) => countCountries[a] > countCountries[b] ? a : b)
        return hottestCountry
    }

    render() {
        return (
        <div id="badges-container">
            <MonthNewClients NumOfCurrentMonthNewClients={this.filterArrayLengthByTheme("currentMonthNewClients")}/>
            <EmailsSent NumOfSentEmails={this.filterArrayLengthByTheme("countSentEmails")}/>
            <OutstandingClients outstandingClients={this.filterArrayLengthByTheme("countOutstandingClients")}/>
            <HottestCountry hottestCountry={this.getHottestCountry()}/>
        </div>)
    }
}
export default Badges
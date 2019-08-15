import React, {Component} from 'react'
import MonthNewClients from './BadgesChildren/MonthNewClients';
import EmailsSent from './BadgesChildren/EmailsSent';
import OutstandingClients from './BadgesChildren/OutstandingClients';
import HottestCountry from './BadgesChildren/HottestCountry';


class Badges extends Component {
    isDateInTheCurrentMonth = (date) => {
        let currentDate = new Date()
        let checkedDate = new Date(date)
        let currentMonth = currentDate.getMonth()
        let currentYear = currentDate.getFullYear()
        let checkedDateMonth = checkedDate.getMonth()
        let checkedDateYear = checkedDate.getFullYear()
        return (currentMonth === checkedDateMonth && currentYear === checkedDateYear)
    }

    countCurrentMonthNewClients = () => {
        let currentMonthNewClients = this.props.clientsData.filter(c => this.isDateInTheCurrentMonth(c.firstContact))
        return currentMonthNewClients.length
    }

    countSentEmails = () => {
        let currentMonthNewClients = this.props.clientsData.filter(c => c.emailType)
        return currentMonthNewClients.length
    }

    countOutstandingClients = () => {
        let outstandingClients = this.props.clientsData.filter(c => !c.sold)
        return outstandingClients.length
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
            <MonthNewClients NumOfCurrentMonthNewClients={this.countCurrentMonthNewClients()}/>
            <EmailsSent NumOfSentEmails={this.countSentEmails()}/>
            <OutstandingClients outstandingClients={this.countOutstandingClients()}/>
            <HottestCountry hottestCountry={this.getHottestCountry()}/>
        </div>)
    }
}
export default Badges
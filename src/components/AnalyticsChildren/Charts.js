import React, {Component} from 'react'
import moment from 'moment'
import TopEmployees from './ChartsChildren/TopEmployees';
import SalesSinceDate from './ChartsChildren/SalesSinceDate';
import ClientAcquisition from './ChartsChildren/ClientAcquisition';
import SalesBy from './ChartsChildren/SalesBy';

class Charts extends Component {

    getTopEmployees = () => {
        let countEmployeesClients = {}
        let topEmployees = []
        this.props.clientsData
            .filter(c => c.sold)
            .forEach(c => countEmployeesClients[c.owner]? countEmployeesClients[c.owner]++ :  countEmployeesClients[c.owner] = 1)
        let employeesNames = Object.keys(countEmployeesClients)
        employeesNames.forEach(e =>  topEmployees.push({name: e, sales: countEmployeesClients[e]}))
        topEmployees.sort(function(a, b){return b.sales - a.sales}).splice(3)
        return topEmployees
    }

    getLastMonthDates = () => {
        let dates = []
        let today = moment().format()
        let priorDate = moment().subtract('30', 'days').format('MM/DD/YYYY')
        while (moment(priorDate).isBefore(today)) {
            dates.push({date: priorDate, sales: 0})
            priorDate =  moment(priorDate).add('1', 'days').format('MM/DD/YYYY')
        }
        return dates
      }

    getLastMonthSales = () => {
        let today = moment().format()
        let priorDate = moment().subtract('30', 'days').format()
        let dates = this.getLastMonthDates()
        this.props.clientsData
            .filter(c => moment(c.firstContact).isBetween( priorDate, today))
            .forEach(c => dates.find(d => d.date === moment(c.firstContact).format('MM/DD/YYYY')).sales++)
        return dates
    }

    getSalesByAquisitionDate = () => {
        let clientsData = this.props.clientsData
        let today = moment().format()
        let aMonthAgo = moment().subtract('30', 'days').format()
        let sixMonthAgo = moment().subtract('6', 'months').format()
        let aYearAgo = moment().subtract('1', 'years').format()
        let dataByAquisitionDate = {
            LastMonth: 0,
            sixToTwelveMonthsAgo:0,
            moreThanAYearAgo:0
        }
        for(let client of clientsData){
            if(moment(client.firstContact).isBetween( aMonthAgo, today)){
                dataByAquisitionDate.LastMonth++
            }
            else if(moment(client.firstContact).isBetween( aYearAgo, sixMonthAgo)){
                dataByAquisitionDate.sixToTwelveMonthsAgo++
            }
            else if(moment(client.firstContact).isBefore( aYearAgo)){
                dataByAquisitionDate.moreThanAYearAgo++
            }
        }
        let data = []
        let keys = Object.keys(dataByAquisitionDate)
        keys.forEach(k => data.push({name:k, sales:dataByAquisitionDate[k]}))
        return data
    }

    render() {
        return (
        <div id="charts-container">
            <TopEmployees data={this.getTopEmployees()}/>
            <SalesBy clientsData={this.props.clientsData} />
            <SalesSinceDate clientsData={this.getLastMonthSales()}/>
            <ClientAcquisition data={this.getSalesByAquisitionDate()}/>
        </div>)
    }
}
export default Charts
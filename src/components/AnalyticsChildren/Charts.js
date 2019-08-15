import React, {Component} from 'react'
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

    render() {
        return (
        <div>
            <TopEmployees data={this.getTopEmployees()}/>
            <SalesBy clientsData={this.props.clientsData} />
            <SalesSinceDate />
            <ClientAcquisition />
        </div>)
    }
}
export default Charts
import React, {Component} from 'react'
import TopEmployees from './ChartsChildren/TopEmployees';
import SalesSinceDate from './ChartsChildren/SalesSinceDate';
import ClientAcquisition from './ChartsChildren/ClientAcquisition';
import SalesBy from './ChartsChildren/SalesBy';

class Charts extends Component {
    render() {
        return (
        <div id="charts-container">
            <TopEmployees />
            <SalesBy />
            <SalesSinceDate />
            <ClientAcquisition />
        </div>)
    }
}
export default Charts
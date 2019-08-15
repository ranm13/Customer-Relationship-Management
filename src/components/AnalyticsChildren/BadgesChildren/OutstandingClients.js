import React, {Component} from 'react'
import { FaUserCircle } from 'react-icons/fa';

class OutstandingClients extends Component {
    render() {
        return (
        <div>
            <div className="analytics-icon" id="user-icon"><FaUserCircle size="4em"/></div>
            <div className="analytics-badges-data">
                <h1>  {this.props.outstandingClients}</h1>
                <div>Outstanding Clients</div>
            </div>
        </div>)
    }
}
export default OutstandingClients
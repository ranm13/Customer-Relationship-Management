import React, {Component} from 'react'
import { FaUserCircle } from 'react-icons/fa';

class OutstandingClients extends Component {
    render() {
        return (
        <div>
            <div className="analytics-icon" id="user-icon"><FaUserCircle size="4em"/></div>
            <div className="analytics-badges-data">
                <div className="badge-data">  {this.props.outstandingClients}</div>
                <div className="badge-text">Outstanding Clients</div>
            </div>
        </div>)
    }
}
export default OutstandingClients
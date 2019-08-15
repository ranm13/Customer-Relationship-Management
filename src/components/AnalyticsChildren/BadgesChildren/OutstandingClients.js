import React, {Component} from 'react'
import { FaUserCircle } from 'react-icons/fa';

class OutstandingClients extends Component {
    render() {
        return (
        <div>
            <FaUserCircle />
            {this.props.outstandingClients}
            <div>Outstanding Clients</div>
        </div>)
    }
}
export default OutstandingClients
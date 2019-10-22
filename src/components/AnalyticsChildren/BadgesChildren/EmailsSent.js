import React, {Component} from 'react'
import { FaEnvelope } from 'react-icons/fa';
class EmailsSent extends Component {
    render() {
        return (
        <div>
            <div className="analytics-icon" id="envelope-icon" ><FaEnvelope size="4em"/></div> 
            <div className="analytics-badges-data">
                <div className="badge-data"> {this.props.NumOfSentEmails}</div>
                <div className="badge-text">Emails Sent</div>
            </div>
            
        </div>)
    }
}
export default EmailsSent
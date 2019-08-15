import React, {Component} from 'react'
import { FaEnvelope } from 'react-icons/fa';
class EmailsSent extends Component {

    render() {
        return (
        <div>
            <div className="analytics-icon" id="envelope-icon" ><FaEnvelope size="4em"/></div> 
            <div className="analytics-badges-data">
                <h1> {this.props.NumOfSentEmails}</h1>
                <div>Emails Sent</div>
            </div>
            
        </div>)
    }
}
export default EmailsSent
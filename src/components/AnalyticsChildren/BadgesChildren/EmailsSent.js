import React, {Component} from 'react'
import { FaEnvelope } from 'react-icons/fa';
class EmailsSent extends Component {

    render() {
        return (
        <div>
            <FaEnvelope />
            {this.props.NumOfSentEmails}
            <div>Email Sent</div>
        </div>)
    }
}
export default EmailsSent
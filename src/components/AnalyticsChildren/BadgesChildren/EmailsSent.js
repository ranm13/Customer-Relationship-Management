import React, {Component} from 'react'
import axios from 'axios'
import { FaEnvelope } from 'react-icons/fa';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'
class EmailsSent extends Component {
    constructor(){
        super()
        this.state = {
            emailsSent: ""
        }
    }

    async componentDidMount() {
        const response = await axios.get("/analytics/badges/emailssent")
        this.setState({emailsSent: response.data.emailsSent})
    }

    render() {
        return (
            this.state.emailsSent || this.state.emailsSent === 0 ?
        <div>
            <div className="analytics-icon" id="envelope-icon" ><FaEnvelope size="4em"/></div> 
            <div className="analytics-badges-data">
                <div className="badge-data"> {this.state.emailsSent}</div>
                <div className="badge-text">Emails Sent</div>
            </div> 
        </div>:
           <Loader type="TailSpin" style={{margin: "auto"}}/>)
    }
}
export default EmailsSent
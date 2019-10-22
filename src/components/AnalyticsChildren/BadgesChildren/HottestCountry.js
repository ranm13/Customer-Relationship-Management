import React, {Component} from 'react'
import axios from 'axios'
import { FaGlobeAfrica } from 'react-icons/fa';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

class HottestCountry extends Component {
    constructor(){
        super()
        this.state = {
            hottestCountry: ""
        }
    }

    async componentDidMount() {
        const response = await axios.get("/analytics/badges/hottestcountry")
        this.setState({hottestCountry: response.data._id})
    }
    render() {
        
        return (
        this.state.hottestCountry?
        <div>
            <div className="analytics-icon" id="globe-icon"><FaGlobeAfrica size="4em"/></div>
            <div className="analytics-badges-data">
                <div className="badge-data">{this.state.hottestCountry}</div>
                <div className="badge-text">Hottest Country</div>
            </div>
        </div>:
        <Loader type="TailSpin" style={{margin: "auto"}}/>)
    }
}
export default HottestCountry
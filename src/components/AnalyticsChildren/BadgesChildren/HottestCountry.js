import React, {Component} from 'react'
import { FaGlobeAfrica } from 'react-icons/fa';

class HottestCountry extends Component {
    render() {
        return (
        <div>
            <div className="analytics-icon" id="globe-icon"><FaGlobeAfrica size="4em"/></div>
            <div className="analytics-badges-data">
                <h1>{this.props.hottestCountry}</h1>
                <div>Hottest Country</div>
            </div>
        </div>)
    }
}
export default HottestCountry
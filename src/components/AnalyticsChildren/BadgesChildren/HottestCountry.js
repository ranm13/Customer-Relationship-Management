import React, {Component} from 'react'
import { FaGlobeAfrica } from 'react-icons/fa';

class HottestCountry extends Component {


    render() {
        return (
        <div>
            <FaGlobeAfrica />
            {this.props.hottestCountry}
            <div>Hottest Country</div>
        </div>)
    }
}
export default HottestCountry
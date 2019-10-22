import React, {Component} from 'react'
import Badges from './AnalyticsChildren/Badges';
import Charts from './AnalyticsChildren/Charts';

class Analytics extends Component {
    render() {
        return (
        <div>
            <Badges/>
            <Charts/> 
        </div>)
    }
}
export default Analytics
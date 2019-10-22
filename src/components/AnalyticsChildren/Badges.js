import React, {Component} from 'react'
import moment from 'moment'
import MonthNewClients from './BadgesChildren/MonthNewClients';
import EmailsSent from './BadgesChildren/EmailsSent';
import OutstandingClients from './BadgesChildren/OutstandingClients';
import HottestCountry from './BadgesChildren/HottestCountry';


class Badges extends Component {
    render() {
        return (
        <div id="badges-container">
            <MonthNewClients/>
            <EmailsSent/>
            <OutstandingClients/>
            <HottestCountry/>
        </div>)
    }
}
export default Badges
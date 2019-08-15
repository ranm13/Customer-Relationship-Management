import React, {Component} from 'react'
import axios from 'axios'
import Badges from './AnalyticsChildren/Badges';
import Charts from './AnalyticsChildren/Charts';

class Analytics extends Component {
    constructor(){
        super()
        this.state = {
            clientsData: ""
        }
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:1991/clients", function(){})
        this.setState({ clientsData: response.data})
    }
    
    render() {
        return (
        this.state.clientsData?(<div id="Analytics-container">
        <Badges clientsData={this.state.clientsData}/>
        <Charts clientsData={this.state.clientsData}/> 
        </div>): null)
    }
}
export default Analytics